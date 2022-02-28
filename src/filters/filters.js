import dateFormatFilter from '@/filters/dateFormatFilter.js';
import imageServerFilter from '@/filters/imageServer.js';
import MoneyFormatter from '@/filters/money-formatter.js';
import StringMoreFilter from '@/filters/StringMore.js';

import formats from '@/common/format.js';
export const filters = {
	...formats,
	dateFormatFilter,
	imageServerFilter,
	MoneyFormatter,
	StringMoreFilter
}