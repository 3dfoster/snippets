function hasDuplicate(str, file) {
  var isDuplicate = true
  var i = 0;
  var j = 0;
  
  while (j < file.length) {
    if (file[j] == '\n') {
      if (isDuplicate == false) {
        isDuplicate = true
        i = -1
      }
      else return true
    }

    if (str[i] == undefined)
      isDuplicate = false
    else if (str[i] != file[j])
      isDuplicate = false

    i++
    j++
  }
  return false;
}