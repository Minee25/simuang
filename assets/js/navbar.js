// Responsive

function toggleDropdown() {
    var dropdown = document.getElementById("link-box");
    var openIcon = document.getElementById("openIcon");
    var closeIcon = document.getElementById("closeIcon");
    
    if (dropdown.style.display === "none") {
      dropdown.style.display = "block";
      openIcon.style.display = "none";
      closeIcon.style.display = "inline";
    } else {
      dropdown.style.display = "none";
      openIcon.style.display = "inline";
      closeIcon.style.display = "none";
    }
  }