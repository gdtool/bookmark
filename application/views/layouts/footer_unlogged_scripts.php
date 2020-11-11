<script type="text/javascript">
var unmark  = unmark || {};
unmark.vars = {};
unmark.vars.csrf_token   = '<?php print $csrf_token; ?>';
</script>

<script src="https://cdn.jsdelivr.net/gh/gdtool/testing/assets/libraries/jquery/jquery-2.1.0.min.js"></script>
<script src="/assets/js/production/unmark.loggedout.js?v=<?php echo $this->config->item('unmark_version'); ?>"></script>
