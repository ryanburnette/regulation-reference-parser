# Regulation Reference Parser

## Installation

```
npm install regulation-reference-parser
```

## Usage

```javascript
const parse = require('regulation-reference-parser')

parse('14 CFR § 91.213(b)(2) and (c)(3)')
=> { 
     title: '14',
     part: '91',
     section: '213',
     /* not supported yet
     paragraphs: [
       'b',
       'c'
     ],
     subparagraphs: [
       b: [
         '2'
       ],
       c: [
         '3'
       ]
     ]
     */
   }
```

## Notes

This is a work in progress.

This was written for use in reference to aviation regulations. It will most
likely cover scenarios related to aviation. Outside that scope, it will most
likely not cover all scenarios, but feel free to contribute to the library.
