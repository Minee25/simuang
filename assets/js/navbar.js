const toggleopen = document.querySelector(".toggleopen");
const toggleclose = document.querySelector(".toggleclose");

const dropdowncontent = document.querySelectorAll(".dropdown-content");

toggleopen.addEventListener("click", () => {
  toggleopen.classList.add("hidden");
  toggleopen.classList.remove("open");

  toggleclose.classList.remove("hidden");
  toggleclose.classList.add("open");

  dropdowncontent.forEach(dropdowncontent => {

    dropdowncontent.classList.add("open");
    dropdowncontent.classList.remove("hidden");
  });
});

toggleclose.addEventListener("click", () => {
  toggleclose.classList.add("hidden");
  toggleclose.classList.remove("open");


  toggleopen.classList.remove("hidden");
  toggleopen.classList.add("open");


  dropdowncontent.forEach(dropdowncontent => {

    dropdowncontent.classList.remove("open");
    dropdowncontent.classList.add("hidden");
  });
});