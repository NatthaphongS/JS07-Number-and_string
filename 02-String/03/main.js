// จงเขียนฟังก์ชัน ucFirst(str) เพื่อแปลงตัวอักษรตัวแรกของ str ให้เป็นตัวพิมพ์ใหญ่ ส่วนตัวอักษรที่เหลือให้มีขนาดเหมือนเดิม
str = "natthaphong";
function firstUpperChar(input) {
  return input[0].toUpperCase() + input.slice(1);
}
newStr = firstUpperChar(str);
console.log(newStr);
