export const sessionBack = async (text) => {
	let token = sessionStorage.getItem('token');
	if (token == null) {
		alert(text);
		location.href = '/';
	}
};
