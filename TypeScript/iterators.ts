let list = [4, 5, 6];
//i is key
/* for..in可以操作任何对象；它提供了查看对象属性的一种方法 */
for (let i in list) {
    console.log(i); // "0", "1", "2",
}
//i is vaule
for (let i of list) {
    console.log(i); // "4", "5", "6"
}