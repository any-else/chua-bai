// Mang hai chiều thì hiểu đơn giản là sử dụng một mảng mà
//bên trong nó những phần tử là kiểu dữ liệu mảng

const numberList = [];

//sô hàng mà người dùng nhập vào
let inputRowUser = +prompt("Nhập vào số hàng:");
for (let i = 0; i < inputRowUser; i++) {
  let inputColumnUser = prompt("Nhập vào một dãy số");
  // thực hiện việc biến chuỗi thành mảng
  let result = inputColumnUser.split(",");
  //thực hiện push vào mảng cha để trở thành mảng hai chiều
  numberList.push(result);
}

//2 truong hop la co duong bien ==> hinh chu nhat or hinh vuong

// những thằng mảng con mà nó độ dài không bằng nhau
// [
//
//   [5, 6, 7],
//   [5, 6, 7],
//   [5, 6, 7],

// ];
//phan C

//buoc 1: kiem tra no co phai hinh vuong khong or la hinh chu nhat ==> neu la hinh vuong cho result thanh true
let result = false;
let isSquare = false;
for (let i = 0; i < numberList.length - 1; i++) {
  if (numberList[i].length != numberList[i + 1].length) {
    console.log("khong duong bien");
    break;
  } else {
    result = true;
  }
  if (
    numberList.length == numberList[i].length &&
    numberList[i].length == numberList[i + 1].length
  ) {
    isSquare = true;
  }
}

//in ra ket qua cuoi cung

//buoc thu 2:
if (result) {
  //lap mang cha
  for (let i = 0; i < numberList.length; i++) {
    //lap qua phan tu con
    for (let j = 0; j < numberList[i].length; j++) {
      if (i == 0 || i == numberList.length - 1) {
        //in ra luon mang con tai vi tri dau tien cung nhu la cuoi cung
        console.log(numberList[i][j]);
      } else {
        console.log(numberList[i][0], numberList[i][numberList[j].length - 1]);
      }
    }
  }
}

//phan D: inra phan cheo

//in ra duong cheo chinh
if (isSquare) {
  for (let i = 0; i < numberList.length; i++) {
    for (let j = 0; j < numberList[i].length; j++) {
      if (i == j) {
        console.log("chinh", numberList[i][j]);
      }
    }
  }
}
// //in ra duong cheo nguoc
if (isSquare) {
  for (let i = 0; i < numberList.length; i++) {
    console.log(numberList[i][numberList.length - i - 1]);
  }
}

// Sap xep

let temp;
for (let i = 0; i < numberList.length; i++) {
  for (let j = 0; j < numberList[i].length; j++) {
    for (let k = j + 1; k < numberList[i].length; k++) {
      if (numberList[i][j] > numberList[i][k]) {
        temp = numberList[i][j];
        numberList[i][j] = numberList[i][k];
        numberList[i][k] = temp;
      }
    }
  }
}
// console.log(numberList);
// // [
// temp = 7;
//   [2,7 , 4, 8], j => 7 k=> 2
//   [6, 7, 8, 0],
//   [3, 4, 5, 9],
//   [6, 7, 8, 0],
// ];

// //i = j ==> xuoi
// 0 = [1, 2, 4, 8] || j == 0(1) ==> lay ra thang nay

// 1 = [6,7,8,0] || j == 1(7) ==> lay thang nay

// 2 = [3, 4, 5, 9] || j == 2(5) ==> lay ra

// //duong cheo nguoc
// i = numberList[j].length - 1 - i ==> lay ra
