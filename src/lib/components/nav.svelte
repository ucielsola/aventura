<script>
	import ColorToggle from './colorToggle.svelte';
</script>

<nav class="border fixed split-nav">
	<div class="nav-brand">
		<h3><a href="/">Home</a></h3>
	</div>
	<div class="collapsible">
		<input id="collapsible1" type="checkbox" name="collapsible1" />
		<label for="collapsible1">
			<div class="bar1" />
			<div class="bar2" />
			<div class="bar3" />
		</label>
		<div class="collapsible-body">
			<ul class="inline">
				<li><a href="/stories/">Stories</a></li>
				<li><a href="/about">About</a></li>
				<li><a href="https://github.com/ucielsola">Github</a></li>
				<!-- <ColorToggle /> -->
			</ul>
		</div>
	</div>
</nav>
