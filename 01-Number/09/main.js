// จงเขียนฟังก์ชันในการหาความยาวเส้นทแยงมุมของสี่เหลี่ยมผืนผ้า
function findPythagorean(width, length) {
  return Math.sqrt(width ** 2 + length ** 2);
}

const result = findPythagorean(3, 4);
console.log(result);
