window.addEventListener('DOMContentLoaded', () => {

    let contactLink = document.querySelector(".contacts a.button-red");
    contactLink.addEventListener("click", () => {
        let popup = document.querySelector(".feedback-window");
        popup.style.display = "block";
        popup.querySelector(".icon-close").addEventListener("click", () => {
            popup.style.display = "none";
        })
    })
    let mapImage = document.querySelector(".map-image");
    mapImage.addEventListener("click", () => {
        let popup = document.querySelector(".map-window");
        popup.style.display = "block";
        popup.querySelector(".icon-close").addEventListener("click", () => {
            popup.style.display = "none";
        })
    })
    let items = document.querySelectorAll(".services-item");
    let activeIndex = 0;
    items.forEach((item, index) => {
        item.addEventListener("click", (args) => {
            var descItems = document.querySelectorAll(".services-desc-item");

            //remove styles for the prev item 
            items[activeIndex].classList.remove("services-item-active");
            descItems[activeIndex].classList.remove("services-desc-item-active");
            //assign to the next item
            item.classList.add("services-item-active");
            var descItem = descItems[index];
            descItem.classList.add("services-desc-item-active");
            activeIndex = index;
        })
    })
})