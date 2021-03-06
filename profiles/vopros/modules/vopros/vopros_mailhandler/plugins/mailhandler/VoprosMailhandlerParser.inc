<?php

/**
 * @file
 * VoprosMailhandlerParser class.
 */

/**
 * Parses an IMAP stream and creates and email entity.
 */
class VoprosMailhandlerParser extends MailhandlerParser {

  /**
   * Define defaults.
   *
   * Override defaul_commands so we don't get "status: 1" prepended to body.
   */
  public function sourceDefaults() {
    return array(
      'auth_required' => TRUE,
      'default_commands' => '',
      'commands_failed_auth' => 'status: 0',
    );
  }

  public function configForm(&$form_state) {
    $form = array();

    $form['info'] = array(
      '#markup' => '<p>' . t('No settings available') . '</p>',
    );

    return $form;
  }

  /*
   * This defines sources which user's can select to map values to.
   */
  public function getMappingSources() {
    $sources = parent::getMappingSources();
    $sources['subject_question'] = array(
      'name' => t('Question id from subject code'),
      'description' => t('The question id gotten from a code in the subject'),
    );
    return $sources;
  }

  public function sourceForm($source_config) {
    $form = array();
    return $form;
  }

  /**
   * Implementation of FeedsParser::parse().
   */
  public function parse(FeedsSource $source, FeedsFetcherResult $fetcher_result) {
    $fetched = $fetcher_result->getRaw();
    $mailbox = $fetched['mailbox'];
    $result = new FeedsParserResult();
    if (!empty($fetched['messages'])) {
      foreach ($fetched['messages'] as $mid => &$message) {
        if ($class = mailhandler_plugin_load_class('mailhandler', $mailbox->settings['retrieve'], 'retrieve', 'handler')) {
          $class->purge_message($mailbox, $message);
        }
        $this->commands($message, $source);
        $subject = imap_mime_header_decode($message['subject']);
        $subject_string = '';
        foreach ($subject as $string) {
          if ($string->charset == 'ISO-8859-1') {
            $subject_string .= utf8_encode($string->text);
          }
          else {
            $subject_string .= $string->text;
          }
        }
        $message['subject'] = $subject_string;
        $subject = $message['subject'];
        preg_match('/\[#(?P<question_id>\d+){1,}\]/', $subject, $matches);
        $message['subject_question'] = NULL;
        if (isset($matches['question_id'])) {
          $message['subject_question'] = $matches['question_id'];
        }
        $result->items[] = $message;
      }
    }
    return $result;
  }
}
