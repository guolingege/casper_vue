
// import { BitGo } from "bitgo";


let ACCESS_TOKEN = '';

function generateBaseParams(seedHex) {
    console.log('type of seedHex:' + (typeof seedHex));
    console.log(seedHex);
    const BitGo = require('bitgo').BitGo;
    const bitGo = new BitGo({accessToken: ACCESS_TOKEN, env: 'prod'}); // defaults to testnet. add env: 'prod' if you want to go against mainnet
    bitGo.session().then(result =>{
        console.log(result);
    });

    // console.log('generateBaseParams result:' + result);
    // return result;
}
