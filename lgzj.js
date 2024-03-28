var body = $response.body;
var obj = JSON.parse(body);

obj.validVip = true;
body = JSON.stringify(obj);
$done({body});
