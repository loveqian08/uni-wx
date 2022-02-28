module.exports = function(str, maxLen = 84) {
	let len = 0;
	let i = 0;
	let index = -1;
	for (; i < str.length; i++) {
		if (str.charCodeAt(i) > 127 || str.charCodeAt(i) == 94) {
			len += 2;
		} else {
			len++;
		}
		if (len > maxLen) {
			index = i;
			break;
		}
	}
	if (index !== -1) {
		return str.substring(0, index) + '...';
	} else {
		return str;
	}
}
