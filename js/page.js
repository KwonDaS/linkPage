//스크롤 버튼
const scrollBtn = document.getElementById("scrollToTopBtn");

// 스크롤 이벤트 감지
window.addEventListener("scroll", () => {
    if (window.scrollY > 200)   scrollBtn.style.display = "block";
    else                        scrollBtn.style.display = "none";
});

// 버튼 클릭 시 맨 위로 스크롤
scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});