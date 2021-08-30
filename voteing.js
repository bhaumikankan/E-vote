import compilecode from './Etherium/build/Voteing.json'
const address='0xa34bAd4d93b793D149eAa8d5B3568C0EC655590c'
import web3 from './web3'

export default (new web3.eth.Contract(compilecode.abi,address));