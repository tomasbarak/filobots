const axios = require('axios')
const randomstring = require("randomstring");
const parse = require('node-html-parser').parse;

var attemtps = 1000000;
function hacerGanarAPosta(){
    let randid = randomstring.generate(40);
    axios.post('https://api.premios.filo.news/api/users/update', {
        candidates: [
          "ricard_zappa",
          "posta_sports",
          "posta_sports",
          "posta_sports",
          "posta_sports",
          "posta_sports",
          "posta_sports",
          "posta_sports",
          "posta_sports",
          "posta_sports"
        ],
        id: randid,
}).then(res => {
    console.log(`statusCode: ${res.status} votos restantes: ${attemtps} id: ${randid}`)
    attemtps--;
  }).catch(error => {
    const root = parse(error.response.data);
    console.log(root.querySelectorAll('pre').toString())
})
}
hacerGanarAPosta()
setInterval(function(){
    hacerGanarAPosta()
    hacerGanarAPosta()
    hacerGanarAPosta()
    hacerGanarAPosta()
    hacerGanarAPosta()
}, 0)