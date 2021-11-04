const myArgs = process.argv.slice(2);
const request = require('request');
const fs = require('fs');
console.log(myArgs);

var url = myArgs[0];
request(url, (error, response, body)=>{
     
  // Printing the error if occurred
  if(error) console.log(error)
  
  // Printing status code
  console.log(response.statusCode);
    
  // Printing body
  console.log(body);

  fs.writeFile(myArgs[1], body, err => {
    if (err) {
      console.error(err)
      return
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${myArgs[1]}`);
  })
}); 



