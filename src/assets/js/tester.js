const endpoints = ['a', 'b', 'c', 'd', 'e', 'f']



let endpointConstants= endpoints.map(e=>`http://localhost:3000/api/v1/url/search/${e.toUpperCase()}`)


console.log(endpointConstants)

const endpointA = ('http://localhost:3000/api/v1/url/search/a');


const endpointB = ('http://localhost:3000/api/v1/url/search/b');
const endpointC = ('http://localhost:3000/api/v1/url/search/c');
const endpointD = ('http://localhost:3000/api/v1/url/search/d');
const endpointE = ('http://localhost:3000/api/v1/url/search/e');
const endpointF = ('http://localhost:3000/api/v1/url/search/f');
/*  axios.get('http://localhost:3000/api/v1/url/search/a'); */