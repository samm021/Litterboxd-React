const iter = string => {
  let arr = []
  let str = ''
  let counter = 0
  for (let i = 0; i < string.length; i++) {
    if (!str || str !== string[i]) {
      str = string[i]
      counter = 1
    } else {
      counter += 1
    }
    if (str && str !== string[i+1] || i === string.length - 1) {
      arr.push(str+counter)
    }
  }
  return arr
}

console.log(iter('aaaabbbcca'))