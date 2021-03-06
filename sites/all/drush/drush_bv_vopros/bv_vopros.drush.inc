<?php

/**
 * @file
 * Drush commands/hooks for Biblioteksvagten Vopros.
 */

/**
 * Implements hook_drush_sql_sync_sanitize().
 */
function bv_vopros_drush_sql_sync_sanitize($site) {
  // Bootstrap to db, so we can use drush_db_select().
  drush_bootstrap(DRUSH_BOOTSTRAP_DRUPAL_DATABASE);

  // Fix nodejs host.
  $sanitize_query = "UPDATE variable SET value='" . serialize("localhost") . "' WHERE name = 'nodejs_server_host';";
  drush_sql_register_post_sync_op('nodesj_host', dt('Set nodejs host to localhost'), $sanitize_query);

  // Fix nodejs scheme.
  $sanitize_query = "UPDATE variable SET value='" . serialize("http") . "' WHERE name = 'nodejs_server_scheme';";
  drush_sql_register_post_sync_op('nodesj_scheme', dt('Set nodejs scheme to http'), $sanitize_query);

  // Fix mailhandler mailbox email.
  $boxes = drush_db_select('mailhandler_mailbox', array(
             'mid',
             'settings',
             'admin_title',
           ));

  $i = 1;
  while ($box = drush_db_fetch_object($boxes)) {
    $settings = unserialize($box->settings);
    if ($settings['mail'] == 'bv@biblioteksvagten.dk') {
      // Replace the main address with test@.
      $mail = 'test@biblioteksvagten.dk';
    }
    else {
      // Replace the rest with test+<num>@.
      $mail = 'test+' . $i++ . '@biblioteksvagten.dk';
    }
    $settings['name'] = $mail;
    $sanitize_query = "UPDATE mailhandler_mailbox SET mail = '" . $mail . "', admin_title = '" . $mail . "', settings = '" . serialize($settings) . "' WHERE mid = " . $box->mid . ";";
    drush_sql_register_post_sync_op('mailbox_' . $mail, dt('Fix mailbox @box', array('@box' => $box->admin_title)), $sanitize_query);
  }

  // Fix Solr server port number.
  $servers = drush_db_select('search_api_server', array('id', 'options', 'name'));
  while ($server = drush_db_fetch_object($servers)) {
    $options = unserialize($server->options);
    $options['port'] = '8983';
    $sanitize_query = "UPDATE search_api_server SET options = '" . serialize($options) . "' WHERE id = " . $server->id . ";";
    drush_sql_register_post_sync_op('search_api_' . $server->id, dt('Fix search_api server @server', array('@server' => $server->name)), $sanitize_query);
  }
}
