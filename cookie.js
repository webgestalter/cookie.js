var cookie = (name,value,days) => {

  var ck = document.cookie;

  if( !name.startsWith('!') && !value && !days ){

    // get cookie
    var result = ck.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return result ? result[2] : null;

  } else {

    // set values for removing cookie
    name.startsWith('!') ? (value='',days='-1') : '' ;

    // set cookie
    var d = new Date;
    d.setTime( d.getTime() + 24 * 60 * 60 * 1000 * ( days || 1000) );
    ck = name + '=' + value + ';path=/;expires=' + d.toGMTString();

  }

},
