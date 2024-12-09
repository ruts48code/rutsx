<script>
	let { t = 'primary', onclick, v = $bindable(), children } = $props();
</script>

<label class="form-control w-full">
	<div class="label">
		<span class="label-text">{@render children()}</span>
	</div>
	<input type={t} class="input input-bordered w-full" {onclick} bind:value={v} />
</label>
