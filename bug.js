function foo(x) {
  if (x == null) {
    return 0;
  } else {
    return x + 1;
  }
}

console.log(foo(null)); // 0
console.log(foo(undefined)); // NaN