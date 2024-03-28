/*******************************

[rewrite_local]

^https:\/\/footprint-api\.quthing\.com\/vip\/state url script-response-body https://raw.githubusercontent.com/QYJleo/yellow/main/lgzj.js

[mitm]

hostname = footprint-api.quthing.com

*************************************/

var body = $response.body;
var obj = JSON.parse(body);

obj.data.validVip = true,
body = JSON.stringify(obj);
$done({body});
