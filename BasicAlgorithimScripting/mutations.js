function mutation(arr) {
  let firstArr = arr[0].toLowerCase()
  let secondArr = arr[1].toLowerCase()
  let result = true
  for (let a = 0; a < secondArr.length; a++) {
    if (firstArr.indexOf(secondArr[a]) < 0) {
      result = !result
    }
  }
  return result
}

mutation(["hello", "hey"]);
