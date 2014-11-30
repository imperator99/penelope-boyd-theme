<?php

/**
 * @file
 * Template overrides as well as (pre-)process and alter hooks for the
 * Penelope Boyd (4.2) theme.
 */

/**
* Implements template_process_html().
*/

// Remove Query Strings from CSS and js filenames (CacheBuster)
function penelope_boyd_4_2_process_html(&$variables) {
  $variables['styles'] = preg_replace('/\.css\?.*"/','.css"', $variables['styles']);
  $variables['scripts'] = preg_replace('/\.js\?.*"/','.js"', $variables['scripts']);
}
