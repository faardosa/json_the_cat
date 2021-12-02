const request = require('request');
const breedName = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
request(url,function(error, response, body) {
  
  if (error) {
    console.log("URL not found", error);
  }
  const data = JSON.parse(body);
  const breedData = data[0];
    
  if (breedData) {
    console.log(breedData.description);
  } else {
    console.log("Breed name not found", breedName);
  }

  
});