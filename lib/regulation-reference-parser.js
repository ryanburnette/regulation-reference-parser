;(function() {
  function parse(str,options) {
    if ( !options ) {
      options = {
        default_cfr: '14'
      }
      options.replace = [
        ['FAR',options.default_cfr + ' CFR ']
      ]
    }

    for (var i=0; i<options.replace.length; i++) {
      str = str.replace(options.replace[i][0],options.replace[i][1])
    }

    if ( str.length <= 6) {
      str = options.default_cfr + ' CFR ' + str
    }

    if ( str.startsWith('§') ) {
      str = options.default_cfr + ' CFR ' + str
    }

    var found = str.match(/([\d]{1,2})?( )?(CFR|FAR)?( )?(\§)?( )?(\d{1,2})?(.)?([\d]*)/)

    var title   = found[1]
    var part    = found[7]
    var section = found[9]

    return {
      title: title,
      part: part,
      section: section
    }
  }
  
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = parse;
  }
  else {
    if (typeof define === 'function' && define.amd) {
      define([], function() {
        return parse;
      });
    }
    else {
      window.parse = parse;
    }
  }
})();
