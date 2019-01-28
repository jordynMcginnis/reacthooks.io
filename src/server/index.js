const hooks = require('../hooks/index.js');
const key = require('./key.env')
const algoliasearch = require('algoliasearch');
const passcode = key.key;
const client = algoliasearch("HL2G9DSLG4", passcode);
const index = client.initIndex('hooks');

const allHooks = hooks.hookNames.map(function(hook){
  return { name : hook }
});

index.addObjects(allHooks, function(err, content) {
  console.log(content);
});