const arr = ["hello", 1, 2, 3, 4, 5, 6];
const element = "hi";
arr.length += 1;

for (let i = arr.length - 1; i > 0; --i) {
  arr[i] = arr[i - 1];
}
arr[0] = element;

console.log(arr);
