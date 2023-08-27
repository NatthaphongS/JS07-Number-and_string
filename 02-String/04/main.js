// - จงเขียนฟังก์ชันเพื่อตรวจสอบข้อความ หากในข้อความนั้นมีคำว่า xxx, sex, porn ให้ return ค่าเป็น true แต่ถ้าไม่มีให้ return ค่าเป็น false
// - ให้ตรวจสอบแบบ case-insensitive เช่น XXX, pOrn, sEX ให้ถือว่าเป็นคำเดียวกับ
// 		xxx, porn, sex ตามลำดับ
const sentense = "the word is some pOrn xxxthing";
// console.log(sentense.includes(" porn "));
// const newArr = sentense.toUpperCase();
// console.log(sentense);
// console.log(newArr);
function checkWord(target) {
  const insentarget = target.toUpperCase();
  if (
    insentarget.includes(" PORN ") ||
    insentarget.includes(" XXX ") ||
    insentarget.includes(" SEX ")
  ) {
    return true;
  }
  return false;
}
console.log(checkWord(sentense));
