// จงเขียนฟังก์ชันในการสุ่มตัวเลขลูกเต๋า โดยผลลัพธ์ต้องเป็นตัวเลขจำนวนเต็มตั้งแต่ 1 ถึง 6

// รวม Max
function random(min,max){
    
    let multi = Math.random()
    let lenght= max-min+1; // ต่างกันตรงบรรทัดนี้นะค๊าบ
    return min+Math.floor(lenght*multi)
}
for(let i = 0; i<20; i++){
    console.log(random(1,6))
}
