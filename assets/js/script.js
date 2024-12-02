'use strict';

// Element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// Sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// Testimonials variables
const testimonialsItems = document.querySelectorAll("[data-testimonials-item]");
const modalContainers = document.querySelectorAll("[data-modal-container]"); // Select all modal containers
const modalCloseBtns = document.querySelectorAll("[data-modal-close-btn]");
const overlays = document.querySelectorAll("[data-overlay]");

// Modal toggle function
const toggleModal = function (index) {
  modalContainers[index].classList.toggle("active");
  overlays[index].classList.toggle("active");
};

// Add click event to all modal items
testimonialsItems.forEach((item, index) => {
  item.addEventListener("click", () => toggleModal(index));
});

// Add click event to modal close buttons
modalCloseBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => toggleModal(index));
});

// Add click event to overlays
overlays.forEach((overlay, index) => {
  overlay.addEventListener("click", () => toggleModal(index));
});

// Custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtns = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

// Filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  filterItems.forEach(item => {
    if (selectedValue === "all" || item.dataset.category === selectedValue) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};

// Add event to all select items
selectItems.forEach(item => {
  item.addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
});

// Add event to all filter button items for large screen
let lastClickedBtn = filterBtns[0];

filterBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
});
