const faq = document.getElementById("faq");

faq.addEventListener("click", (e) => {
    if (e.target.classList.contains("question")) {
        const answer = e.target.nextElementSibling;
        answer.style.display = answer.style.display === "block" ? "none" : "block";
    }
});
