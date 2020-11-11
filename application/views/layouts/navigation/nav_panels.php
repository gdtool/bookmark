<div id="panel-label" class="nav-panel">
	<h4 class="nav-heading"><?php echo unmark_phrase('Labels'); ?></h4>
	<ul class="label-list">
		<?php
		if (isset($labels)) :
		foreach ($labels as $label) : ?>
			<li class="label-<?php print $label->label_id ?>">
				<a href="/marks/label/<?php print $label->slug; ?>"><?php print unmark_phrase($label->name); ?></a>
				<span><?php echo printMarksCount($label->total_active_marks); ?></span>
			</li>
		<?php endforeach; endif; ?>
	</ul>
</div>
<div id="panel-tags" class="nav-panel">
	<h4 class="nav-heading"><?php echo unmark_phrase('Most-Used Tags') ?></h4>
	<ul class="tag-list">
		<?php if (isset($tags) && $tags['popular'] != '') : ?>
			<?php foreach ($tags['popular'] as $pop_tag) : ?>
				<li class="tag-<?php print $pop_tag->tag_id ?>">
					<a href="/marks/tag/<?php print $pop_tag->slug; ?>">#<?php print $pop_tag->name; ?></a>
					<span><?php echo printMarksCount($pop_tag->total); ?></span>	
				</li>
			<?php endforeach; ?>
		<?php else : ?>
			<li><?php echo unmark_phrase('You haven\'t added any tags yet. When you do the ones you use most will be listed here.'); ?></li>
		<?php endif; ?>
	</ul>
	<h4 class="nav-heading"><?php echo unmark_phrase('Recently-Used Tags') ?></h4>
	<ul class="tag-list">
	<?php if (isset($tags) && $tags['recent'] != '') : ?>
			<?php foreach ($tags['recent'] as $recent_tag) : ?>
				<li class="tag-<?php print $recent_tag->tag_id ?>">
					<a href="/marks/tag/<?php print $recent_tag->slug; ?>">#<?php print $recent_tag->name; ?></a>
					<span><?php echo printMarksCount($recent_tag->total); ?></span>	
				</li>
			<?php endforeach; ?>
		<?php else : ?>
			<li><?php echo unmark_phrase('When saving a mark, add a tag, and the most recent ones you use will show up here.'); ?></li>
		<?php endif; ?>
	</ul>
</div>
<div id="panel-timeline" class="nav-panel">
	<h4 class="nav-heading"><?php echo unmark_phrase('Timeline')?></h4>
	<?php $this->load->view('layouts/timeline'); ?>
</div>
<!-- <div id="panel-search" class="nav-panel">
	<h4 class="nav-heading"><?php echo unmark_phrase('Search')?></h4>
	<form method="get" action="/marks/search" id="search-form">
		<input type="text" name="q" id="search-input" placeholder="<?php echo unmark_phrase('SEARCH...') ?>" autocapitalize="off">
		 <li><a href="#" class="action" data-action="change_password"><?php echo unmark_phrase('Change Password'); ?></a></li>
		<button type="submit"><i class="icon-go"></i></button>
	</form>
	<h4 class="nav-heading"><?php echo unmark_phrase('Most-Used Tags') ?></h4>
	<ul class="tag-list">
		<?php //$this->load->view('layouts/navigation/tags_list.php'); ?>
	</ul>
</div> -->
<div id="panel-settings" class="nav-panel">

	<?php $this->load->view('layouts/accountlinks'); ?>

	<h4 class="nav-heading"><?php echo unmark_phrase('Help')?></h4>
	<ul class="nav-list">
		<li><a target="_blank" rel="noopener noreferrer" href="https://github.com/cdevroe/unmark/issues/" title="Report Issue"><?php echo unmark_phrase('Report Issue') ?></a></li>
		<li><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/unmarkit" title="Follow us on Twitter">Follow us on Twitter</a></li>
		<li><a href="mailto:colin+unmark@cdevroe.com" title="Contact support">Contact Support</a></li>
	</ul>
	<h4 class="nav-heading"><?php echo unmark_phrase('Tools')?></h4>
	<ul class="nav-list">
		<li><a href="#" class="add-button"><?php echo unmark_phrase('Install APP'); ?></a></li>
		<li><a target="_blank" rel=\"noopener noreferrer\" href="https://chrome.google.com/webstore/detail/unmark/cdhnljlbeehjgddokagghpfgahhlifch"><?php echo unmark_phrase('Chrome Extension') ?></a></li>
	</ul>
	<button id="logout-btn" class="danger" data-action="logout"><?php echo unmark_phrase('Sign Out') ?></button>
</div>
<div id="panel-archive" class="nav-panel">
	<h4 class="nav-heading"><?php echo unmark_phrase('Archive')?></h4>
	<small><?php echo unmark_phrase('Tip: You can restore a mark from your Archive. Additionally, when searching you can search just your archive.')?></small>
</div>
