const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const topFlap = document.querySelector(".top_flap");
const letter = document.querySelector(".letter");


openBtn.addEventListener("click", () => {
   
        topFlap.style.transform = "rotateX(0deg)";

        setTimeout(() => {
            topFlap.style.zIndex = "1"; // Đưa thư lên trên nắp
            letter.style.top = "-110%"; // Thư trượt lên
        }, 500);
});

closeBtn.addEventListener("click", () => {
    
        letter.style.top = "-45%"; // Thư trượt xuống vào lại phong bì

        setTimeout(() => {
            topFlap.style.zIndex = "4"; // Đưa thư xuống dưới nắp
            topFlap.style.transform = "rotateX(180deg)";
        }, 500);

        
});
