var request = require('request');
var options = {
'method': 'POST',
'url': 'https://93d042df4133.ngrok.io/api/vi/query_build',
'headers': {
'Content-Type': 'application/json',
'Cookie': 'ahoy_visitor=6b614483-f428-426c-b5a3-865cd7dac229'
},
body: JSON.stringify({"rule_sets":{"first":"HI","first2":"Last"}})

};
request(options, function (error, response) {
if (error) throw new Error(error);
console.log(response.body);
});