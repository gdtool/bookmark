<div class="navigation-content">
    <?php $this->load->view('layouts/navigation/nav_icons'); ?>
</div>
<div class="navigation-pane">
	<div class="brand-panel">
		<span class="title">各种书签</span>
		<span class="version"><?php echo $this->config->item('unmark_version'); ?></span>
	</div>
    <div class="navigation-panel-wrapper">
        <?php $this->load->view('layouts/navigation/nav_panels'); ?>
    </div>
</div>
