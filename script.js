//Task 1
// let firstarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let secondarr = [3, 4, 3, 8, 0, 2, 1, 12, 11, 16];
// console.log();

// let firstcount = 0;
// let secondcount = 0;

// function Compare(arr1, arr2) {
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] > arr2[i]) {
//             firstcount++;
//         }else if(arr2[i] > arr1[i]){
//             secondcount++;
//         }else{
//             continue;
//         }
//     }
//     console.log(firstcount);
//     console.log(secondcount);
// }

// Compare(firstarr, secondarr);

//Task 2

// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let arrcount = 0;

// function DioganalSum(arr) {
//     for(let i = 0; i < arr.length; i++){
//        arrcount+=arr[i][i];
//     }
//     console.log(arrcount);
//     arrcount = arr[0][0] + arr[1][1] + arr[2][2];
// }

// DioganalSum(arr);


//Task 3

// let arr = [[1, 2, 3],
//             [4, 5, 6],
//             [7, 8, 9]];
// let arrcount = 0;
// let j = arr.length - 1;

// function DioganalSum(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         arrcount += arr[i][j];
//         j--;
//     }

//     console.log(arrcount);
// }

// DioganalSum(arr);


//Task 4

// let arr2 = ["a","a","b","b","c","c","c"];
// let numofa = 0;
// let numofb = 0;
// let numofc = 0;
// function NumOfChars(arr2) {
//     for (let index = 0; index < arr2.length; index++) {
//         if (arr2[index] == "a") {
//             numofa++;
//         } else if (arr2[index] == "b") {
//             numofb++;
//         } else if (arr2[index] == "c") {
//             numofc++;
//         }

//     }
//     console.log(numofa);
//     console.log(numofb);
//     console.log(numofc);
// }

// NumOfChars(arr2);


//Task 5
// let arr = [[1, 2, 3],
// [4, 5, 6],
// [0, 8, 0]];

// let leftToRight = 0;
// let rightToLeft = 0;
// let j = arr.length - 1;
// let module;

// function DioganalDifference(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         leftToRight+=arr[i][i];
//         rightToLeft+=arr[i][j];
//         j--;

        
//     }
//     module = Math.abs(leftToRight - rightToLeft);
//     console.log(module);
    
// }

// DioganalDifference(arr);

