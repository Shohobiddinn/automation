import axios from 'axios';
import baseurl from './baseurl';

export default async function server(
	endpoint: string = '',
	method: string = 'get',
	data: any | null = null,
) {
	let token: String = '12324';
	let result: any, error: any;

	await axios
		.request({
			baseURL: baseurl + endpoint,
			headers: { Authorization: `Bearer ${token}` },
			method: method,
			data: data,
		})
		.then((res) => {
			result = res;
		})
		.catch((err: any) => {
			error = err;
			console.log(error);

		})
		.finally(() => {
		});

	return new Promise((resolve, reject) => {
		if (result) resolve(result);
		else reject(error);
	});
}
