const buttons = document.querySelectorAll(".buttons button");
const images = document.querySelectorAll(".gallery .image");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const close = document.querySelector(".close");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

let currentIndex = 0;

// Filter functionality
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".buttons .active").classList.remove("active");
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    images.forEach(img => {
      if (filter === "all" || img.dataset.category === filter) {
        img.style.display = "block";
      } else {
        img.style.display = "none";
      }
    });
  });
});

// Lightbox functionality
images.forEach((imgDiv, index) => {
  imgDiv.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = imgDiv.querySelector("img").src;
    currentIndex = index;
  });
});

close.addEventListener("click", () => {
  lightbox.style.display = "none";
});

next.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex].querySelector("img").src;
});

prev.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex].querySelector("img").src;
});

