<!DOCTYPE html>
<html lang="<?php echo unmark_phrase('en'); ?>">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
    <meta name="apple-mobile-web-app-capable" content="no">
    <title><?php echo unmark_phrase('Unmark'); ?></title>
    <link href="https://cdn.jsdelivr.net/gh/gdtool/testing/assets/css/fonts.css" rel="stylesheet">
    <link rel="stylesheet" href="/assets/css/unmark.css?v=<?php echo $this->config->item('unmark_version'); ?>" />
    <link rel="icon" type="image/png" sizes="32x32" href="https://cdn.jsdelivr.net/gh/gdtool/testing/assets/images/pwa/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="https://cdn.jsdelivr.net/gh/gdtool/testing/assets/images/pwa/favicon-16x16.png">
    <link rel="icon" type="image/ico" href="/favicon.ico" />
    <link rel="manifest" href="/manifest.json">
    <link rel="apple-touch-icon" sizes="180x180" href="https://cdn.jsdelivr.net/gh/gdtool/testing/assets/images/logo/android-chrome-180.png">
    <link rel="mask-icon" href="https://cdn.jsdelivr.net/gh/gdtool/testing/assets/images/pwa/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#13293d">
    <meta name="theme-color" content="#13293d">
    <script src="https://cdn.jsdelivr.net/gh/gdtool/testing/assets/js/plugins/modernizr-2.7.1.min.js"></script>
    <script>
        /* grunticon Stylesheet Loader | https://github.com/filamentgroup/grunticon | (c) 2012 Scott Jehl, Filament Group, Inc. | MIT license. */
        window.grunticon=function(e){if(e&&3===e.length){var t=window,n=!!t.document.createElementNS&&!!t.document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect&&!!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),A=function(A){var o=t.document.createElement("link"),r=t.document.getElementsByTagName("script")[0];o.rel="stylesheet",o.href=e[A&&n?0:A?1:2],r.parentNode.insertBefore(o,r)},o=new t.Image;o.onerror=function(){A(!1)},o.onload=function(){A(1===o.width&&1===o.height)},o.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="}};
        grunticon( [ "/assets/css/icons.data.svg.css", "/assets/css/icons.data.png.css", "/assets/css/icons.fallback.css" ] );
    </script>
    <noscript><link href="/assets/css/icons.fallback.css" rel="stylesheet"></noscript>
</head>

<?php if (isset($active_label)) : ?>
<body id="unmark" class="label-<?php print $active_label['label_id']; ?>" data-lookup="<?php print $lookup_type; ?>">
<?php else : ?>
<body id="unmark" data-lookup="<?php if(isset($lookup_type)) { print $lookup_type; } ?>">
<?php endif; ?>

    <header class="mobile-header">
        <div class="branding">
          <span class="icon">
            <img src="https://cdn.jsdelivr.net/gh/gdtool/testing/assets/images/logo/logo64.png" />
          </span>
          <span class="text">
            <span class="title">各种书签</span>
          </span>
        </div>
        <a class="menu-activator" title="View/Hide Menu" rel="200" href="#panel-menu">
            <i>
                <span class="crossbar"></span>
                <span class="crossbar"></span>
                <span class="crossbar"></span>
            </i>
        </a>
        <a id="mobile-sidebar-show" title="<?php echo unmark_phrase('View/Hide Details'); ?>" href="#" style="height: 0; width: 0; visibility: hidden;">
            <i>
                <span class="ball"></span>
                <span class="ball"></span>
                <span class="ball"></span>
            </i>
        </a>
    </header>

    <main class="unmark-stage">
    <div id="unmark-wrapper">
    <?php $this->load->view('layouts/navigation'); ?>

    <div class="main-wrapper">
        <div class="inner-wrapper">
            <div class="main-content">
