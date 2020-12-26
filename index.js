function map(source, callbck) {
   let arr = []

   for (let i = 0; i < source.length; i++){
       arr.push(callbck(source[i]))
   }

   return arr
}


function reduce(source, callbck, startingValue) {
  let reducedValue = !!startingValue ? startingValue : source[0]
  let int = !!startingValue ? 0 : 1

  for (; int < source.length; int++) {
    reducedValue = callbck(source[int], reducedValue)
  }

  return reducedValue;
}
