// main-program.js
function startProgram() {
    alert('Welcome to Program!'); // เปลี่ยนข้อความ Alert ตามที่คุณต้องการ

    // สร้างกระพิบสีม่วง
    setInterval(function() {
        document.body.style.backgroundColor = getRandomColor();
    }, 1000);

    // เพิ่มปุ่มกดเข้าให้งาน
    createEnterButton();
}

// สุ่มสี
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// สร้างปุ่มเข้า
function createEnterButton() {

    // เพิ่ม Event Listener เมื่อคลิกปุ่ม
    enterButton.addEventListener('click', function() {
        alert('Entering the Dimension!'); // เปลี่ยนข้อความ Alert ตามที่คุณต้องการ
    });

    // เพิ่มปุ่มลงใน body
    document.body.appendChild(enterButton);
}

// เรียกฟังก์ชัน startProgram เมื่อหน้าเว็บโหลด
window.onload = startProgram;
