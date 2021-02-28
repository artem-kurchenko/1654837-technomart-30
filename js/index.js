window.addEventListener('DOMContentLoaded', () => { 

    let contactLink = document.querySelector(".contacts a.button-red");
    contactLink.addEventListener("click", ()=>{
        let popup = document.querySelector(".feedback-window");
        popup.style.display = "block";
        popup.querySelector(".icon-close").addEventListener("click", () => {
            popup.style.display = "none";
        })
    })
    let mapImage = document.querySelector(".map-image");
    mapImage.addEventListener("click", ()=>{
        let popup = document.querySelector(".map-window"); 
        popup.style.display = "block";
        popup.querySelector(".icon-close").addEventListener("click", () => {
            popup.style.display = "none";
        })
    })
})