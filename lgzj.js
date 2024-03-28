var body = JSON.parse($response.body);

body.data.validVip = true,

$done({ body: JSON.stringify(body) });
