<div<?php print $attributes; ?>>
  <header class="l-header-wrapper" role="banner">
    <div class="l-header">
      <h1 class="site-name">
        <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home"><span class="first">Penelope</span> <span class="last">Boyd</span></a>
      </h1>
      <?php print render($page['header']); ?>
    </div>
    <div class = "l-top-menu" role="navigation">
      <?php print render($page['menu']); ?>
    </div>
  </header>
  <div class="l-main">
    <div class="l-content" role="main">
      <a id="main-content"></a>
      <?php print $messages; ?>
      <?php print render($tabs); ?>
      <?php if ($action_links): ?>
      <ul class="action-links">
        <?php print render($action_links); ?>
      </ul>
      <?php endif; ?>
      <?php print render($page['content']); ?>
      <?php print $feed_icons; ?>
    </div>
  </div>
  <footer class="l-footer" role="contentinfo">
    <?php print render($page['footer']); ?>
  </footer>
</div>