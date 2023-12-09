//Exercise 2: Valid Palindrome
// **Exercise 2: Valid Palindrome**

// - ให้เขียน Function ที่ชื่อว่า `isPalindrome` เพื่อตรวจสอบข้อความที่เป็น Palindrome
//     - Palindrome คือข้อความที่ไม่ว่าเราจะอ่านจากตัวแรกไปตัวสุดท้ายหรือตัวอักษรตัวสุดท้ายมาตัวแรกก็จะอ่านได้เหมือนเดิม (เมื่อเปลี่ยนให้ตัวอักษรทุกตัว เป็น Lowercase (ตัวพิมพ์เล็ก) )
//     - เช่นคำว่า `TENET` ถ้าอ่านจากตัวอักษรแรกเป็นตัวสุดท้ายก็จะได้คำว่า TEN กลับกันถ้าอ่านจากตัวอักษรตัวสุดท้ายมาตัวแรก ก็จะอ่านได้ว่า TEN เหมือนกัน ดังนั้น TENET จะเป็น Palindrome
// - Function `isPalindrome` รับ Parameter 1 อันที่มี Value Type เป็น String
//     - Function `isPalindrome` จะ Return ตัว Value ออกมามี Type เป็น Boolean กล่าวคือ
//         - Function จะ Return เป็น `true` ถ้า Argument ที่รับเข้ามาเป็น Palindrome
//         - Function จะ Return เป็น `false` ถ้า Argument ที่รับเข้ามาเป็น Palindrome

//1.ระบุปัญหา ต้องการตรวจสอบ String ว่าเป็น Palindrome หรือไม่ (Palindrome => can read the same backward as forward)
// จากตัวอย่างที่จะทำการตรวจสอบ ต้องทำการตัดอักขระพิเศษเช่น , : ออกก่อน **ระวัง Capital letter

const isPalindrome = function (s) {
  const cutSpecialChar = s.toLowerCase().replace(/[^a-z0-9]/g, ""); //ปรับตัวอักษรให้เป็นพิมพ์เล็กทั้งหมด และตัดอักขระพิเศษออกด้วย .replace (ใช้ egular expression /[^a-z0-9]/g ตัดนอกเหนือ lowercase และตัวเลข0-9)
  const reverseToStr = cutSpecialChar.split("").reverse().join(""); //เอาตัวอักษรที่ปรับ มากลับด้านด้วย .reverse และนำมาต่อกัน

  return cutSpecialChar === reverseToStr ? true : false; // ถ้าอ่านจากขวาไปซ้าย และซ้ายไปขวา
};

const result1 = isPalindrome("A man, a plan, a canal: Panama");
const result2 = isPalindrome("race a car");
const result3 = isPalindrome(" ");

console.log(result1); // true
console.log(result2); // false
console.log(result3); // true

//ทดสอบโค้ด
let ex = "A man, a plan, a canal: Panama";

console.log(ex.toLowerCase().replace(/[^a-z0-9]/g, ""));
//ผลลัพธ์จากการเปลี่ยนอักษรเป็น lower case และตัดอักขระพิเศษ 'amanaplanacanalpanama'
console.log(ex.split("").reverse().join(""));
//ผลลัพธ์จากการreverse >>'amanaP :lanac a ,nalp a ,nam A'
let checkReverse = ex.toLowerCase().replace(/[^a-z0-9]/g, "");
console.log(checkReverse.split("").reverse().join(""));
//ผลลัพธ์จากการreverse หลังจากปรับแต่งอักษรแล้ว(to lowercase and without special character) amanaplanacanalpanama
