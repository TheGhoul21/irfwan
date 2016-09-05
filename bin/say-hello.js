#!/usr/bin/env node
 
var lib= require('../lib/index.js');
if(process.argv.length != 3) {
  console.err("Worng number of arguments");
}
var name = process.argv[2];

var greeting = lib.sayHello(name);
 
console.log(greeting);
