window.addEventListener('DOMContentLoaded', () => {
    let cartCounter = 10,
        bookmarkCounter = 0;
    let popup = document.querySelector(".modal");
    popup.querySelector(".icon-close").addEventListener("click", () => {
        popup.style.display = "none";
    })
    let buyButtons = document.querySelectorAll(".button-buy");
    buyButtons.forEach((button) => {
        button.addEventListener("click", (args) => {
            popup.style.display = "block";
            cartCounter++;
            let cartSpan = document.querySelector(".cart-item span");
            cartSpan.innerHTML = `Корзина: ${cartCounter}`;
            let cartItem = document.querySelector(".cart-item");
            if (cartCounter > 1 && cartItem && !cartItem.classList.contains("item-active"))
                cartItem.classList.add("item-active");
        })
    })
    let bookmarkButtons = document.querySelectorAll(".button-bookmark");
    bookmarkButtons.forEach((button) => {
        button.addEventListener("click", (args) => {
            bookmarkCounter++;
            let bookmarkSpan = document.querySelector(".bookmark-item span");
            bookmarkSpan.innerHTML = `Закладки: ${bookmarkCounter}`;
            let bookmarkItem = document.querySelector(".bookmark-item");
            if (bookmarkCounter > 1 && bookmarkItem && !bookmarkItem.classList.contains("item-active"))
                bookmarkItem.classList.add("item-active");
        })
    })
});