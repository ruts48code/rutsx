<script>
	let { t = 'primary', onclick, href = '', children } = $props();
</script>

{#if href == ''}
	<button class="btn btn-{t} w-full border border-{t}" {onclick} {href}>{@render children()}</button
	>
{:else}
	<a class="btn btn-{t} w-full border border-{t}" {onclick} {href}>{@render children()}</a>
{/if}
