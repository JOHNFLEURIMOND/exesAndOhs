function sortArray(array) {

  var odd = array.filter(is_odd).sort(ascending);
  return array.map(replace_odd_inorder);

  function ascending(a, b) {

    return a > b;
  }

  function is_odd(num) {

    return num % 2;
  }

  function replace_odd_inorder(num) {

    return is_odd(num) ? odd.shift() : num;
  }
}