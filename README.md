# lll-constructor

This repository demonstrates the concept of implementing constructors in LLL. Until now, any LLL constructors were simply initialization functions that had to be called after deployment. With the addition of the `(__pushsize)` operator (thanks, @axic!) LLL now supports constructor parameter retrieval on deployment, the same as Solidity does. As soon as the compiler changes make it into the main Solidity branch, LLL will behave exactly the same as Solidity when accessed via web3.

NOTE: This will not compile with the current version of Solidity. We'll need to wait until the changes @axic made to the LLL compiler get deployed and are made available. I'll update this document and the source code when that occurs.
