const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");



module.exports = buildModule("FirstModule", (m) => {
 
  const First = m.contract("First", []);
  
  return { First };
});
