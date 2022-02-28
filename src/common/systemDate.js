import Vue from 'vue';
import { dateFormat } from '@/common/utils/utils.js';

let memo = null;
export default function getSysDate() {
	if (memo) {
		return memo;
	}
	memo = Vue.http.post('/app/sysdateQry').then(res => {
		memo = null;
		let date = {};
		let currDate = new Date();
		if (res.STATUS == 1) {
			currDate = new Date(res.TIMESTAMP - 0);
		}
		date = {
			currDate: dateFormat(currDate, 'yyyy/MM/dd'),
			currTime: dateFormat(currDate, 'HH:mm:ss'),
			date: currDate
		}
		return Promise.resolve(date);
	});
	return memo;
}