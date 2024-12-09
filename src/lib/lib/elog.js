import { getTimex } from 'rutsotp';
import process from 'node:process';

export const elog = async (d) => {
	console.log(`${await getTimex(new Date())} - pid:${process.pid} ${d}`);
};
