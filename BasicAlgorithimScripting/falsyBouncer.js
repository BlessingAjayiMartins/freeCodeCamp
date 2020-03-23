function bouncer(arr) {
  let result = [];
  for(let a = 0; a < arr.length; a++) {
    if (arr[a]) {
      result.push(arr[a])
    }
  }
  return result
}

bouncer([7, "ate", "", false, 9]);
