<script>
	import { api } from '$lib';
	import { login } from '$lib/lib/login.js';
	import Mbutton from '$lib/component/mbutton.svelte';
	import { onMount } from 'svelte';
	import Mblock from '$lib/component/mblock.svelte';
	import Mtext from '$lib/component/mtext.svelte';
	import Mblockx from '$lib/component/mblockx.svelte';
	let state = $state({
		username: '',
		password: '',
		token: '',
		name: ''
	});
	const loginWeb = async () => {
		let r = await api({
			api: 'login',
			username: state.username,
			password: state.password
		});
		if (r.status == 'ok') {
			sessionStorage.setItem('token', r.token);
			sessionStorage.setItem('name', r.name);
			state.token = r.token;
			state.name = r.name;
		} else {
			alert(r.status);
		}
	};
	const logoutWeb = async () => {
		sessionStorage.clear();
		state.token = sessionStorage.getItem('token');
		state.name = sessionStorage.getItem('name');
	};
	onMount(async () => {
		state.token = sessionStorage.getItem('token');
		state.name = sessionStorage.getItem('name');
	});
</script>

<div class="flex w-full flex-col items-center p-10">
	<Mblock>
		<div class="font-bold">Login Page</div>
		<Mblockx>
			<div>Name : {state.name}</div>
			<div class="truncate">Token : {state.token}</div>
		</Mblockx>
		<Mtext t="text" bind:v={state.username}>Username</Mtext>
		<Mtext t="password" bind:v={state.password}>Password</Mtext>
		<Mbutton onclick={async () => loginWeb()}>login</Mbutton>

		<div class="divider font-bold">Action</div>
		<Mbutton t={'neutral'} href="/user">goto User page</Mbutton>
		<Mbutton t={'secondary'} onclick={async () => logoutWeb()}>logout</Mbutton>
	</Mblock>
</div>
