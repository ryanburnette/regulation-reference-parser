const mocha = require("mocha")
const chai = require("chai")
const path = require("path")
const describe = mocha.describe
const expect = chai.expect
const parse = require('../lib/regulation-reference-parser')

describe ('#parse()', () => {
  it('is a function',() => {
    expect(parse).to.be.a('function')
  })

  it('parses 14 CFR 91.213',() => {
    expect(parse('14 CFR 91.213')).to.eq({
      title: 14,
      part: 91,
      section: 213
    })
  })

  it('parses 14 CFR § 91.213',() => {
    expect(parse('14 CFR § 91.213')).to.eq({
      title: 14,
      part: 91,
      section: 213
    })
  })

  it('parses 91.213',() => {
    expect(parse('91.213')).to.eq({
      title: 14,
      part: 91,
      section: 213
    })
  })

  it('parses § 91.213',() => {
    expect(parse('§ 91.213')).to.eq({
      title: 14,
      part: 91,
      section: 213
    })
  })

  it('parses § 91.213(a)',() => {
    expect(parse('§ 91.213')).to.eq({
      title: 14,
      part: 91,
      section: 213,
      paragraphs: ['a']
    })
  })

  it('parses § 91.213(a)',() => {
    expect(parse('§ 91.213')).to.eq({
      title: 14,
      part: 91,
      section: 213,
      paragraphs: ['a']
    })
  })

  it('parses § 91.213(a)(b)',() => {
    expect(parse('§ 91.213')).to.eq({
      title: 14,
      part: 91,
      section: 213,
      paragraphs: ['a','b']
    })
  })

  it('parses § 91.213(a)(1) and (2)',() => {
    expect(parse('§ 91.213')).to.eq({
      title: 14,
      part: 91,
      section: 213,
      paragraphs: ['a'],
      subparagraphs: {
        a: [1,2]
      }
    })
  })
})
