function titleCase(str) {
  let allLower = str.toLowerCase()
  let strArr = allLower.split(' ')
  let result = strArr.map(word => word.replace(word[0], word[0].toUpperCase()))
  return result.join(' ')
}

titleCase("I'm a little tea pot");
