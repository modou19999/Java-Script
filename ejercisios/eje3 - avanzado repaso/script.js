const mainImage = document.getElementById("mainImage");
const thumbnails = document.querySelectorAll(".thumbnails img");
const colors = document.querySelectorAll(".color");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const count = document.getElementById("count");
const ratingStars = document.querySelectorAll(".rating span");
const addToCart = document.getElementById("addToCart");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

let quantity = 1;
let rating = 0;

// Galería dinámica
thumbnails.forEach((img) => {
    img.addEventListener("click", () => {
        mainImage.src = img.src;
    });
});

// Selector de color
colors.forEach((color) => {
    color.addEventListener("click", () => {
        document.querySelector(".color.active").classList.remove("active");
        color.classList.add("active");
    });
});

// Cantidad
plus.addEventListener("click", () => {
    quantity++;
    count.textContent = quantity;
});

minus.addEventListener("click", () => {
    if (quantity > 1) {
        quantity--;
        count.textContent = quantity;
    }
});

// Rating
ratingStars.forEach((star) => {
    star.addEventListener("click", () => {
        rating = star.dataset.rate;
        ratingStars.forEach((s) => {
            s.classList.toggle("active", s.dataset.rate <= rating);
        });
        localStorage.setItem("rating", rating);
    });
});

// Recuperar rating guardado
window.onload = () => {
    const savedRating = localStorage.getItem("rating");
    if (savedRating) {
        ratingStars.forEach((s) => {
            s.classList.toggle("active", s.dataset.rate <= savedRating);
        });
    }
};

// Modal
addToCart.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});
