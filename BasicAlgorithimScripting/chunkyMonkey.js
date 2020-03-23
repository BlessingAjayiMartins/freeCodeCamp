function chunkArrayInGroups(arr, size) {
  let result = []
  let hold = []
  for (let a = 0; a < arr.length; a++ ) { 
    let end = arr.length -1 
    hold.push(arr[a])
    if (hold.length === size || a === end) {
      result.push(hold)
      hold = []
    }
  }
  return result
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);