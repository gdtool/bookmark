<!DOCTYPE html>
<html lang="<?php echo unmark_phrase('en'); ?>">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <title><?php echo unmark_phrase('Unmark - The to do app for bookmarks.') ?></title>
    <link href="https://cdn.jsdelivr.net/gh/gdtool/testing/assets/css/fonts.css" rel="stylesheet">
    <link rel="stylesheet" href="/assets/css/unmark.css?v=<?php echo $this->config->item('unmark_version'); ?>" />
    <link rel="stylesheet" href="/assets/css/unmark_welcome.css?v=<?php echo $this->config->item('unmark_version'); ?>" />
    <link rel="icon" type="image/ico" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="57x57"   href="https://cdn.jsdelivr.net/gh/gdtool/testing/assets/images/logo/logo64.png">
    <link rel="apple-touch-icon" sizes="114x114" href="https://cdn.jsdelivr.net/gh/gdtool/testing/assets/images/logo/logo128.png">
    <link rel="apple-touch-icon" sizes="72x72"   href="https://cdn.jsdelivr.net/gh/gdtool/testing/assets/images/logo/logo64.png">
    <link rel="apple-touch-icon" sizes="144x144" href="https://cdn.jsdelivr.net/gh/gdtool/testing/assets/images/logo/logo128.png">
    <link rel="apple-touch-icon" sizes="60x60"   href="https://cdn.jsdelivr.net/gh/gdtool/testing/assets/images/logo/logo64.png">
    <link rel="apple-touch-icon" sizes="120x120" href="https://cdn.jsdelivr.net/gh/gdtool/testing/assets/images/logo/logo128.png">
    <link rel="apple-touch-icon" sizes="76x76"   href="https://cdn.jsdelivr.net/gh/gdtool/testing/assets/images/logo/logo64.png">
    <link rel="apple-touch-icon" sizes="152x152" href="https://cdn.jsdelivr.net/gh/gdtool/testing/assets/images/logo/logo128.png">
    <script src="https://cdn.jsdelivr.net/gh/gdtool/testing/assets/js/plugins/modernizr-2.7.1.min.js"></script>
    <script>
        /* grunticon Stylesheet Loader | https://github.com/filamentgroup/grunticon | (c) 2012 Scott Jehl, Filament Group, Inc. | MIT license. */
        window.grunticon=function(e){if(e&&3===e.length){var t=window,n=!!t.document.createElementNS&&!!t.document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect&&!!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),A=function(A){var o=t.document.createElement("link"),r=t.document.getElementsByTagName("script")[0];o.rel="stylesheet",o.href=e[A&&n?0:A?1:2],r.parentNode.insertBefore(o,r)},o=new t.Image;o.onerror=function(){A(!1)},o.onload=function(){A(1===o.width&&1===o.height)},o.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="}};
        grunticon( [ "/assets/css/icons.data.svg.css", "/assets/css/icons.data.png.css", "/assets/css/icons.fallback.css" ] );
    </script>
    <noscript><link href="/assets/css/icons.fallback.css" rel="stylesheet"></noscript>
</head>
<body class="unmark-solo" id="unmark-login">

<div id="unmark_login_page">
    <div class="loginWrapper">
        <div class="loginInner">
          <div class="login-branding">
            <div class="login-branding-wrapper">
              <div class="login-ball">
                <img src="/assets/images/logo/logo64.png" />
              </div>
              <?php /*<h1><?php echo unmark_phrase('Sign In To') ?></h1> */ ?>
              <div class="login-text">
                各种书签
              </div>
            </div>
          </div>
            <form id="unmarkLogin" method="post" action="/login">
                <input type="email" class="field-input" name="email" id="email" placeholder="<?php echo unmark_phrase('Email Address') ?>" autocapitalize="off" />
                <input type="password" class="field-input" name="password" id="password" placeholder="<?php echo unmark_phrase('Password') ?>" />
                <button class="login-submit" type="submit"><?php echo unmark_phrase('Sign In') ?></button>
            </form>
            <div class="response-message"></div>
            <div class="login-links">
              <div class="login-links-wrapper">
                <a href="#" class="forgot-pass" title="<?php echo unmark_phrase('Forgot Password?') ?>"><?php echo unmark_phrase('Forgot Password?') ?></a>
                <span class="sep">&bull;</span>
                <a href="/register" class="register" title="<?php echo unmark_phrase('Register') ?>"><?php echo unmark_phrase('Register') ?></a>
              </div>
            </div>
        </div>
    </div>

    <div class="forgotPassWrapper">
        <div class="loginInner">
          <div class="login-branding">
            <div class="login-branding-wrapper">
              <div class="login-ball">
                <img src="/assets/images/logo/logo64.png" />
              </div>
              <?php /*<h1><?php echo unmark_phrase('Reset Password For') ?></h1> */ ?>
              <div class="login-text">
                各种书签
              </div>
            </div>
          </div>
            <form id="unmarkForgotPass" method="post" action="/tools/forgotPassword">
                <input type="email" class="field-input" name="email" id="forgot_email" placeholder="<?php echo unmark_phrase('Email Address') ?>" autocomplete="off" autocapitalize="off" autocorrect="off" />
                <button class="forgot-submit" type="submit"><?php echo unmark_phrase('Reset Password') ?></button>
            </form>
            <div class="response-message"></div>
            <div class="login-links">
              <div class="login-links-wrapper">
                <a href="#" class="forgot-pass" title="<?php echo unmark_phrase('Sign into your account') ?>"><?php echo unmark_phrase('Need to Sign In?') ?></a>
              </div>
            </div>
        </div>
    </div>

    <div class="unmark-spinner"></div>
    <div class="unmark-success"><i class="icon-check"></i></div>

</div>

<?php $this->load->view('layouts/footer_unlogged_scripts'); ?>

</body>
</html>
