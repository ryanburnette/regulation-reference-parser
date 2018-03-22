function parse(str,options) {
  if ( !options ) {
    options = {
      default_cfr: '14'
    }
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

module.exports = parse
