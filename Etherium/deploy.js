const Web3=require('web3');
const HDWalletProvider=require('@truffle/hdwallet-provider');
const compileCode=require('./build/Voteing.json')
const mnemonicPhrase = "drift virus toss perfect wheel stove tiger sustain barrel school cake object";
let provider = new HDWalletProvider(mnemonicPhrase, "https://rinkeby.infura.io/v3/c418d4eba8b84ff092648af21a3e7e6f");

const web3=new Web3(provider);

const deploy=async()=>{

    const accounts=await web3.eth.getAccounts();
    
    const instance=new web3.eth.Contract(compileCode.abi);
    
    const voteing= await instance.deploy({data:compileCode.evm.bytecode.object}).send({
           from:accounts[0],
    })

    console.log(voteing.options.address);
    //0x0a0A3f7b059baaF569feCD32148f69Eb733C2c92

}

deploy();