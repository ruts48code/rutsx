// place files you want to import through the `$lib` alias in this folder.
import { OTP } from 'rutsotp';
import { queryDB } from 'rutsdb';
import conf from '$lib/config.json';

export const api = async (d) => {
	return await (
		await fetch('/api', {
			method: 'POST',
			body: JSON.stringify(d),
			headers: {
				'Content-Type': 'application/json',
				otp: await OTP(conf.secret[0])
			}
		})
	).json();
};

export const db = async (query, items) => {
	return await queryDB(conf.dbs, query, items);
};
