// let a = true + false  //1 + 0
// console.log(a) 
// let b = 12 / "6" // 12/6(преобразовано в число т.к. все кроме "+" преобразовывает в число)
// console.log(b)
// let c = "number" + 15 + 3 // "number" - преобразовал все вырожение после себя в string = "number" + "15" + "3" 
// console.log(c) 
// let d = 15 + 3 + "number" // порядок действий обратный предыдущему, по этому сначала 15 + 3 = 18 а потом + "number" = '18number'
// console.log(d)
// let e = [1] > null // null - преобразуется в 0, по этому [1] > null (вроде логично)
// console.log(e)
// let f ="foo" + + "bar" // тут не совсем понял почему (+ 'bar' = NaN) но очень интересно, '+' + "string"  дает NaN? ^_^
// console.log(f)
// let g ='true' == true // string не равен boolean
// console.log(g)
// let h = false == 'false' // то же,что и выше
// console.log(h)
// let i = null == '' // null = 0 , '' = 1 
// console.log(i)
// let j = !!"false" == !!"true" // 1  1
// console.log(j)
// let k = ['x'] == 'x' 
// console.log(k)
// let l = [] + null + 1 
// console.log(l)
// let m = 0 || "0" && {}
// console.log(m)
// let n = [1,2,3] == [1,2,3] 
// console.log(n)

// let iv1 = 20;

// while (iv1) {
//     console.log(iv1--); // 1 - последнее значение, так как этот скрипт зацикливает отсчет от 20(i1) до 0 
// }


// let i1 = 40

// while (i1 < 91) {
//     console.log(i1)
//     i1++
// }


// let i2 = 12

// while (i2 < 341){
//     console.log(i2)
//     i2 += 4
// }

// for (let i3 = 100; i3 > -5; i3--) {
//     console.log(i3)
    
// }

// let str = ""
// for (let i4 = 0; i4 < 15; i4++) {
//     str += "y"
//     console.log(str)
    
// }

// for (let i5 = 0; i5 < 101; i5 += 2) {
//     console.log(i5)
    
// }

// let str1 = ""
// for (let i6 = 1; i6 < 12; i6 += 2) {
//     str1 = str1 + i6 + " "
// }
// console.log(str1)

// let str2 = ""
// for (let i7 = 123; i7 > 117; i7--) {
//     str2 = str2 + "-" + i7
// }
// console.log(str2)

// let str3 = "-"
// for (let i8 = 1; i8 < 10; i8++) {
//     str3 = str3 + i8 + "-"
    
// }
// console.log(str3)

let a = 1
let b = 2
if (a === b ) {
    console.log("Все хорошо") 
}
else {
    console.log ("Числа не равны")
}

