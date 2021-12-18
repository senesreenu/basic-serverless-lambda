'use strict';

module.exports.generateRandomNumber = async (event) => {
  const randomNumber = parseInt(Math.random()*100);
  console.log('Random Number Generated = '+randomNumber);
  return randomNumber;
  };