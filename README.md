# lll-constructor

This repository tests the idea of implementing constructors in LLL. Until now, any LLL constructors were simply initialization functions that had to be called after deployment. With the addition of the `(__pushsize)` operator (thanks, @axic!) LLL now supports initialization on deployment, the same as Solidity does. As soon as the compiler changes make it into the main Solidity branch, LLL will behave exactly the same as Solidity when accessed via web3.
