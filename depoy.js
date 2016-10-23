var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var abi = [{"constant":true,"inputs":[],"name":"getHeartbeat","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getParameters","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[{"name":"parm","type":"uint256"}],"type":"constructor"}];
var ConstructorTest = web3.eth.contract(abi);
var bin = '604180602560803960605262bc614e600055602060666000396000516001556060516080f360e060020a60003504638d20ff141415601e5760005460405260206040f35b63a5ea11da60e060020a600035041415603d5760015460405260206040f35b600256';
var account = web3.eth.coinbase;
var c = ConstructorTest.new(0xdeadface, {data: bin, from: account, gas: 1000000});

//c.getHeartbeat();
//c.getParameters();
