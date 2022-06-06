const apiPromise = fetch("https://grandcircusco.github.io/demo-apis/donuts.json")
.then(res => res.json());

//step 1
apiPromise.then(data => console.log(data)); 

//step 2

apiPromise.then((data) => console.log(data.count));

//step 3--we're setting the new variable equat to that from number 2 and console log to see the 8

const countPromise = apiPromise.then(donuts => donuts.count);
countPromise.then(count => console.log(count));

//step 4

const top4Promise = apiPromise.then(data => data.results.slice(0, 4));
top4Promise.then(top4data => console.log(top4data));

//step 5--you can name data as doughnuts
//marp returns an array with just the names

const namesPromise = apiPromise.then(data => data.results.map(datas => datas.name ));
//return namesPromise; }); you can add this if wanted
namesPromise.then((datasNames) => console.log(datasNames)); 

//step 6

// Create a new promise named capNamesPromise that chains on namesPromise to return an array with the names of the donuts capitalized. Log the value from capNamesPromise.

const capNamesPromise = namesPromise.then(datasNames => datasNames.map(name => name.toUpperCase()));
capNamesPromise.then((upperCaseNames) => console.log(upperCaseNames));

//step 7

let badPromise = fetch("https://grandcircusco.github.io/demo-apis/wrong.json")
.then(res => res.json());

badPromise.catch(err => {
    console.log("Failed!!, err");
});
