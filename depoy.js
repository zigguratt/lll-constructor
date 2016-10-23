var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var abi = [{"constant":true,"inputs":[],"name":"getParameter","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[{"name":"parameter","type":"uint256"}],"type":"constructor"}];
var ConstructorTest = web3.eth.contract(abi);
var bin = '602280601e606039604052602060406000396000516000556040516060f360e060020a600035046340f4f7b91415601e5760005460205260206020f35b600256';
var account = web3.eth.coinbase;
var c = ConstructorTest.new(0xdeadface, {data: bin, from: account, gas: 1000000});
