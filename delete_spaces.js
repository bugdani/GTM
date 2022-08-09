function(){
  return function(cadena){
    return cadena.replace(/^\s+|\s+$/gm,'');
  }
}
