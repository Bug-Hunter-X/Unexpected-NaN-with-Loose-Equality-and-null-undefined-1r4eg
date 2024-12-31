function foo(x) {
  if (x === null || x === undefined) {
    return 0;
  } else {
    return x + 1;
  }
}

console.log(foo(null)); // 0
console.log(foo(undefined)); // 0