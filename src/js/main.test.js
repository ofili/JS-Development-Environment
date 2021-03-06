//import { expect } from 'chai';
var chai = require('chai');
var expect = chai.expect;

//import jsdom from 'jsdom';
const jsdom = require("jsdom");
const fs = require('fs');

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('should have h1 that says Users', (done) => {
    const index = fs.readFileSync("./src/index.html", "utf-8");
    const {JSDOM} = jsdom;
    const dom = new JSDOM(index);
    const h1 = dom.window.document.getElementsByTagName("h1")[0];
    expect(h1.innerHTML).to.equal("Users");
    done();
    window.close();
  })
})
