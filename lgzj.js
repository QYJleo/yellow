/*******************************

[rewrite_local]

^https:\/\/footprint-api\.quthing\.com\/vip\/state url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/lgzj.js

[mitm]

hostname = footprint-api.quthing.com

*************************************/


var body = JSON.parse($response.body);

body.data.validVip = true,

$done({ body: JSON.stringify(body) });
