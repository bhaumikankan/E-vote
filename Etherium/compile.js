const path =require("path");
const fs= require("fs-extra");
const solc=require("solc");
fs.removeSync(path.join(__dirname,"build"));
const votePath = path.resolve(__dirname,"Contract","voteing.sol");
const source= fs.readFileSync(votePath, "utf8");

fs.ensureDirSync(path.join(__dirname,"build"));

var input = {
    language: 'Solidity',
    sources: {
      'voteing.sol': {
        content: source,
      }
    },
    settings: {
      outputSelection: {
        '*': {
          '*': ['*']
        }
      }
    }
  };

  var output = JSON.parse(solc.compile(JSON.stringify(input))).contracts['voteing.sol'];
  
  for(contract in output) {
      fs.outputJSONSync(path.join(__dirname,"build",`${contract}.json`),output[contract])
  }


