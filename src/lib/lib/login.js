import { json } from '@sveltejs/kit';
import { elog } from '$lib/lib/elog.js';

export const login = async (d) => {
	try {
		let r = await (
			await fetch('https://api.rmutsv.ac.th/elogin', {
				method: 'POST',
				body: JSON.stringify({
					username: d.username,
					password: d.password
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			})
		).json();
		if (r.status == 'ok') {
			elog(`${r.name} (${r.username} - ${r.facname}) login successful`);
		} else {
			elog(`${d.username} login fail (${r.status})`);
		}
		return json(r);
	} catch (e) {
		elog(`(error) api login`);
		return json({ status: 'error' });
	}
};
