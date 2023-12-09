//Exercise 1: Add Strings
// - ให้เขียน Function ที่ชื่อว่า `addStrings` เพื่อบวกเลขสองตัวที่มี Value Type เป็น String
// - Function `addStrings` รับ Parameter ทั้งหมด 2 อัน
//     - คือ  `num1` และ  `num2`
//     - Parameter ทั้งสองตัวนี้จะรับ ตัวเลขที่มี Value Type เป็น String
// - Function `addStrings` จะ Return ตัว Value เป็น ผลบวกของ `num1` และ  `num2` ที่มี Value Type เป็น String

//ระบุปัญหา
//ต้องการบวกเลขที่รับค่า แต่ค่าที่รับมามี Value Type เป็น String >>> ต้องตรวจสอบชนิดของค่าที่รับมาก่อนทำการบวกเลข
// 1/ let numcheck = "2" ลองใช้ console.log(typeof numcheck ) ได้ 'string'
//2/ สร้างเงื่อนไขตรวจสอบก่อนทำการแปลง

const addStrings = function (num1, num2) {
  if (typeof num1 === "string" || typeof num2 === "string") {
    let sumConvertToNum = Number(num1) + Number(num2);
    return sumConvertToNum;
  }
  return num1 + num2;
};

const result1 = addStrings("11", "123");
const result2 = addStrings("456", "77");
const result3 = addStrings("0", "0");

console.log(result1); // "134"
console.log(result2); // "533"
console.log(result3); // "0"
