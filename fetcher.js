const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const path = process.argv[3];

console.log('url: ', url);
console.log('path: ',path);

request('http://example.edu', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  const bytes = body.length;
  fs.writeFile(path, body, err => {
    if (err) {
      console.error(err)
      return
    } console.log(`Downloaded and saved ${bytes} bytes to ${path}`)
    //file written successfully
  });
});
//fs.writeFile(path, body, {}, () => {
//  console.log(`Downloaded and saved ${bytes} bytes to ${path}`)
//});
// //file written successfully
// });



