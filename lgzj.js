/*******************************

[rewrite_local]

^https:\/\/footprint-api\.quthing\.com\/vip\/state url script-response-body https://raw.githubusercontent.com/QYJleo/yellow/main/lgzj.js

[mitm]

hostname = footprint-api.quthing.com

*************************************/


var body = JSON.parse($response.body);

body.data.trialPeriod = false,
body.data.vipType = 7,
body.data.validVip = true,
body.data.expireTime = 4102372800000,
body.data.vipCount = 999999999,

$done({ body: JSON.stringify(body) });
