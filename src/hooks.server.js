import { CheckOTPs } from 'rutsotp';
import conf from '$lib/config.json';
import { elog } from '$lib/lib/elog.js';

export const handle = async ({ event, resolve }) => {
	let apiFunc;
	event.locals.secret = conf.secret;
	if (event.url.pathname.startsWith('/api')) {
		if (event.request.method === 'OPTIONS') {
			return new Response(null, {
				headers: {
					'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Headers': '*'
				}
			});
		} else {
			if (
				!(
					(await CheckOTPs(event.request.headers.get('otp'), conf.secret, conf.otptime)) ||
					(event.request.headers.get('otp') == conf.secret[0] && conf.secretpass)
				)
			) {
				elog(`(error) Wrong OTP is ${event.request.headers.get('otp')}`);
				return new Response(null, {
					status: 403
				});
			}
		}
	}

	if (!event.url.pathname.startsWith('/api')) {
		elog(`(${event.request.method}) - ${event.url.pathname}`);
	}
	const response = await resolve(event);
	if (event.url.pathname.startsWith('/api')) {
		response.headers.append('Access-Control-Allow-Origin', `*`);
	}
	return response;
};
