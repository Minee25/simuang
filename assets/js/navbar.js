// toggle responsive
var toggleButton = document.getElementById("toggle-button");
var icontoggleButton = document.getElementById("icon-toggle-button");
var boxlinkshow = document.getElementById("box-link-hidden");

toggleButton.addEventListener("click", function () {
    if (icontoggleButton.classList.contains("fa-bars")) {
        icontoggleButton.classList.remove("fa-bars");
        icontoggleButton.classList.add("fa-xmark");
        boxlinkshow.id = "box-link-show";
    }
    else if (icontoggleButton.classList.contains("fa-xmark")) {
        icontoggleButton.classList.remove("fa-xmark");
        icontoggleButton.classList.add("fa-bars");
        boxlinkshow.id = "box-link-hidden";
    }
});


// Dropdown

var linkmain = document.querySelectorAll(".link-main");
var linkdropdown = document.querySelectorAll(".link-dropdown");
var iconlinkmain = document.querySelectorAll(".icon-link-main");
var textlinkmain = document.querySelectorAll(".text-link-main");

linkmain.forEach(function (element) {
    element.addEventListener('click', function () {
        // Check if the clicked element's dropdown is already open
        const isAlreadyOpen = element.nextElementSibling.classList.contains('show');

        // Close all 'link-dropdown' elements
        linkdropdown.forEach(function (dropdown) {
            dropdown.classList.remove('show');
        });

        // Reset the icon for all 'icon-link-main' elements
        iconlinkmain.forEach(function (icon) {
            icon.classList.remove('fa-chevron-up');
            icon.classList.add("fa-chevron-down");
        });

        // Remove the highlight from all text-link-main elements
        textlinkmain.forEach(function (text) {
            text.classList.remove('text-highlight');
        });

        // Toggle the 'show' class for the clicked 'link-dropdown' element
        if (!isAlreadyOpen) {
            element.nextElementSibling.classList.add('show');
            // Highlight the text-link-main element in the clicked dropdown
            element.querySelector(".text-link-main").classList.add("text-highlight");

            // Change the icon in the clicked icon-link-main
            element.querySelector(".icon-link-main").classList.remove("fa-chevron-down");
            element.querySelector(".icon-link-main").classList.add("fa-chevron-up");
        }
    });
});
