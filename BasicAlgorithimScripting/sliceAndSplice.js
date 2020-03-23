function frankenSplice(arr1, arr2, n) {
  let copyFirstArr = arr1.slice()
  let intoSecondArr = arr2.splice(n,0,...copyFirstArr)
  return arr2
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
