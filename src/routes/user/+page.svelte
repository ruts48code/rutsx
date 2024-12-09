<script>
	import { onMount } from 'svelte';
	import { sessionBack } from '$lib/lib/sessionBack.js';
	import Mblock from '$lib/component/mblock.svelte';
	import Mbutton from '$lib/component/mbutton.svelte';
	import Mblockx from '$lib/component/mblockx.svelte';
	let state = $state({
		name: '',
		toekn: ''
	});
	onMount(async () => {
		sessionBack('You have no permission here!!!');
		state.token = sessionStorage.getItem('token');
		state.name = sessionStorage.getItem('name');
	});
</script>

<div class="flex w-full flex-col items-center p-10">
	<Mblock>
		<div class="font-bold">User Page</div>
		<Mblockx>
			<div>Name : {state.name}</div>
			<div class="truncate">Token : {state.token}</div>
		</Mblockx>
		<div class="divider font-bold">Action</div>
		<Mbutton t="neutral" href="/">goto Login page</Mbutton>
	</Mblock>
</div>
