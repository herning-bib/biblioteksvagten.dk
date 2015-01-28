<?php

/**
 * @file
 * Theming functions for ting.
 */

/**
 * Template preprocessor for ting objects.
 */
function template_preprocess_ting_object(&$variables) {
  $variables['object'] = $variables['elements']['#object'];

  $variables['page'] = $variables['elements']['#view_mode'] == 'full';
  $variables['classes_array'][] = drupal_html_class('view-mode-' . $variables['elements']['#view_mode']);
  // Helpful $content variable for templates.
  foreach (element_children($variables['elements']) as $key) {
    $variables['content'][$key] = $variables['elements'][$key];
  }

  if ( isset($variables['content']['entities']) ) {
    foreach ( $variables['content']['entities'] as $key => $val ) {
      $variables['content']['overview']['types'][] = $key;
    }
  }

}

/**
 * Template preprocessor for ting object details.
 */
function template_preprocess_ting_object_details(&$variables) {
  $object = $variables['object'] = $variables['elements']['#object'];

  // Helpful $content variable for templates.
  foreach (element_children($variables['elements']) as $key) {
    $variables['content'][$key] = $variables['elements'][$key];
  }

  if (isset($object->record['dcterms:abstract'])) {
    $abstracts = (array) $object->record['dcterms:abstract'];
    // Was printed in ting_object_overview
    unset($abstracts[''][0]);
    $abstract = implode(' ; ', ting_format_abstract($abstracts['']));
    if (trim($abstract)) {
      $items[] = array(
        'data' => check_plain($abstract),
        'class' => array('abstract'),
      );
    }
  }

  $items[] = array(
    'data' => '<h4>' . t('Type') . '</h4>',
    'children' => array($object->type),
    'class' => array('type'),
  );

  if (!empty($object->record['dc:format'][''])) {
    $items[] = array(
      'data' =>  '<h4>' . t('Format') . '</h4>',
      'children' => $object->record['dc:format'][''],
      'class' => array('dc-format'),
    );
  }

  if (!empty($object->record['dcterms:isPartOf'][''])) {
    $items[] = array(
     'data' => '<h4>' . t('Available in') . '</h4>',
     'children' => $object->record['dcterms:isPartOf'][''],
     'class' => array('is-part-of'),
   );
 }

  if (!empty($object->language)) {
    $items[] = array(
      'data' => '<h4>' . t('Language') . '</h4>',
      'children' => array($object->language),
      'class' => array('language'),
    );
  }

  if (!empty($object->record['dc:language']['dkdcplus:spoken'])) {
    $items[] = array(
      'data' => '<h4>' . t('Speech') . '</h4>',
      'children' => $object->record['dc:language']['dkdcplus:spoken'],
      'class' => array('oss-spoken'),
    );
  }

  if (!empty($object->record['dc:language']['dkdcplus:subtitles'])) {
    $items[] = array(
      'data' => '<h4>' . t('Subtitles') . '</h4>',
      'children' => $object->record['dc:language']['dkdcplus:subtitles'],
      'class' => array('oss-subtitles'),
    );
  }

  if (!empty($object->record['dc:subject']['dkdcplus:genre'])) {
    $items[] = array(
      'data' => '<h4>' . t('Genre') . '</h4>',
      'children' => $object->record['dc:subject']['dkdcplus:genre'],
      'class' => array('oss-genre'),
    );
  }

  if (!empty($object->subjects)) {
    $items[] = array(
      'data' => '<h4>' . t('Subjects') . '</h4>',
      'children' => $object->subjects,
      'class' => array('subjects'),
    );
  }

  if (!empty($object->record['dc:subject']['dkdcplus:DK5'])) {
    $items[] = array(
      'data' => '<h4>' . t('Classification') . '</h4>',
      'children' => array($object->record['dc:subject']['dkdcplus:DK5'][0] . (isset($object->record['dc:subject']['dkdcplus:DK5-Text']) ? ' (' . $object->record['dc:subject']['dkdcplus:DK5-Text'][0] . ')' : '')),
      'class' => array('dkdcplus-dk5'),
    );
  }

  if (!empty($object->record['dcterms:spatial'][''])) {
    $items[] = array(
      'children' => $object->record['dcterms:spatial'][''],
      'class' => array('dcterms-spatial'),
    );
  }

  if (!empty($object->record['dc:contributor']['dkdcplus:dkind'])) {
    $items[] = array(
      'data' => '<h4>' . t('Reader') . '</h4>',
      'children' => $object->record['dc:contributor']['dkdcplus:dkind'],
      'class' => array('oss-dkind'),
    );
  }

  if (!empty($object->record['dc:contributor']['dkdcplus:act'])) {
    $items[] = array(
      'data' => '<h4>' . t('Actor') . '</h4>',
      'children' => $object->record['dc:contributor']['dkdcplus:act'],
      'class' => array('oss-act'),
    );
  }

  if (!empty($object->record['dc:contributor']['dkdcplus:mus'])) {
    $items[] = array(
      'data' => '<h4>' . t('Musician') . '</h4>',
      'children' => $object->record['dc:contributor']['dkdcplus:mus'],
      'class' => array('oss-mus'),
    );
  }

  if (!empty($object->record['dcterms:hasPart']['dkdcplus:track'])) {
    $items[] = array(
      'data' => '<h4>' . t('Contains') . '</h4>',
      'children' => $object->record['dcterms:hasPart']['dkdcplus:track'],
      'class' => array('oss-track'),
    );
  }

  if (!empty($object->record['dcterms:isReferencedBy'][''])) {
    $items[] = array(
      'data' => '<h4>' . t('Referenced by') . '</h4>',
      'children' => $object->record['dcterms:isReferencedBy'][''],
      'class' => array('dcterms-isreferencedby'),
    );
  }

  if (!empty($object->record['dc:description'])) {
    foreach ($object->record['dc:description'] as $type => $dc_description) {
      $items[] = array(
        'data' => '<h4>' . t('Description') . '</h4>',
        'children' => $dc_description,
        'class' => array('dc-description'),
      );
    }
  }

  if (!empty($object->record['dc:source'][''])) {
    $items[] = array(
      'data' => '<h4>' . t('Original title') . '</h4>',
      'children' => $object->record['dc:source'][''],
      'class' => array('dc-source'),
    );
  }

  if (!empty($object->record['dcterms:replaces'][''])) {
    $items[] = array(
      'data' => '<h4>' . t('Previous title') . '</h4>',
      'children' => $object->record['dcterms:replaces'][''],
      'class' => array('dcterms-replaces'),
    );
  }

  if (!empty($object->record['dcterms:isReplacedBy'][''])) {
    $items[] = array(
      'data' => '<h4>' . t('Later title') . '</h4>',
      'children' => $object->record['dcterms:isReplacedBy'][''],
      'class' => array('dcterms-isreplacedby'),
    );
  }

  if (!empty($object->record['dc:identifier']['dkdcplus:ISBN'])) {
    $items[] = array(
      'data' => '<h4>' . t('ISBN no.') . '</h4>',
      'children' => $object->record['dc:identifier']['dkdcplus:ISBN'],
      'class' => array('dkdcplus-isbn'),
    );
  }

  if (!empty($object->record['dc:identifier']['dcterms:URI'])) {
    $uris = array();
    foreach ($object->record['dc:identifier']['dcterms:URI'] as $uri) {
      $uris[] = l(drupal_strlen($uri) > 60 ? drupal_substr($uri, 0, 60) . '...' : $uri, $uri, array('attributes'=>array('target'=>'_new', 'title' => $uri)));
      }
    $items[] = array(
      'data' => '<h4>' . t('Host publication') . '</h4>',
      'children' => $uris,
      'class' => array('dcterms-uri'),
    );
  }

  if (!empty($object->record['dkdcplus:version'][''])) {
    $items[] = array(
      'data' => '<h4>' . t('Version') . '</h4>',
      'children' => $object->record['dkdcplus:version'][''],
      'class' => array('dkdcplus-version'),
    );
  }

  if (!empty($object->record['dcterms:extent'][''])) {
    $items[] = array(
      'data' => '<h4>' . t('Extent') . '</h4>',
      'children' => $object->record['dcterms:extent'][''],
      'class' => array('dcterms-extent'),
    );
  }

  if (!empty($object->record['dc:publisher'][''])) {
    $items[] = array(
      'data' => '<h4>' . t('Publisher') . '</h4>',
      'children' => $object->record['dc:publisher'][''],
      'class' => array('dc-publisher'),
    );
  }

  if (!empty($object->record['dc:rights'][''])) {
    $items[] = array(
      'data' => '<h4>' . t('Rights') . '</h4>',
      'children' => $object->record['dc:rights'][''],
      'class' => array('dc-rights'),
    );
  }

  $variables['content'] = array(
    '#theme' => 'item_list',
    '#items' => $items,
  );
}

/**
 * Helper function to format abstracts from ting.
 */
function ting_format_abstract($string) {
  $string = str_replace('Indhold:', '', $string);
  $string = str_replace(' ; ', '<br/>', $string);
  $string = str_replace(' / ', '<br/>', $string);

  return $string;
}