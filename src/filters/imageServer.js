import { Global } from '@/common/global.js';
module.exports = function (path) {
	return path ? (/^https?/.test(path) || /^wxfile/.test(path) || /^file/.test(path) || /^\/static/.test(path) ? path : Global.imageServerPath + path) : '';
}