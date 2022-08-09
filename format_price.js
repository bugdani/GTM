function(){
  return function(price){
    return price.replace(/[^0-9\.]+/g, "").replaceAll(",",".");
  }
}
