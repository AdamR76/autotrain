import { urAjax } from "./std.mjs";

const ajaxUrl = location.host.includes('localhost')
	? 'http://autotrain.ajax.localhost:1338'
	: 'https://autotrain.ajax';


const ajax = urAjax(ajaxUrl, { expandSingleResultSet: false });

export default ajax;