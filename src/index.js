module.exports =  function reverse (arg) {
    let change = '';
    arg = Math.abs(arg);
    arg = arg.toString();
    for (let i = 0; i < arg.length; i++) {
      change = arg[i] + change;
    }
    return Number(change);
  }
  
