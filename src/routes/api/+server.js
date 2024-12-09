import { login } from '$lib/lib/login.js';
import { elog } from '$lib/lib/elog.js';
import { json } from '@sveltejs/kit';

export const POST = async ({ request }) => {
	const apiData = await request.json();
	if (apiData.api) {
		elog(`api is ${apiData.api}`);
	}
	switch (apiData.api) {
		case 'login':
			return login(apiData);
	}
	return json({
		status: 'api'
	});
};
