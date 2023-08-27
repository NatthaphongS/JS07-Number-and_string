// จงเขียนฟังก์ชันในการสุ่มตัวเลข random(min, max) โดยให้ผลลัพธ์มีค่าเป็นจำนวนจริงตั้งแต่ min ถึง max (ไม่รวม max)

//ไม่รวม Max
function random(min,max){
    
    let multi = Math.random()
    let lenght= max-min;
    return min+Math.floor(lenght*multi)
}
for(let i = 0; i<20; i++){
    console.log(random(1,6))
}

// รวม Max
// function random(min,max){
    
//     let multi = Math.random()
//     let lenght= max-min+1; // ต่างกันตรงบรรทัดนี้นะค๊าบ
//     return min+Math.floor(lenght*multi)
// }
// for(let i = 0; i<20; i++){
//     console.log(random(1,6))
// }
