// Mobile Menu

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", function () {

        mobileMenu.classList.toggle("active");

    });

}


// Event Search and Filter

const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const eventCards = document.querySelectorAll(".event-card");


if (searchInput && categoryFilter) {

    function filterEvents() {

        const searchText = searchInput.value.toLowerCase();

        const selectedCategory = categoryFilter.value;


        eventCards.forEach(function (card) {

            const title =
                card.querySelector("h3").textContent.toLowerCase();

            const category =
                card.getAttribute("data-category");


            const matchesSearch =
                title.includes(searchText);

            const matchesCategory =
                selectedCategory === "all" ||
                category === selectedCategory;


            if (matchesSearch && matchesCategory) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    }


    searchInput.addEventListener(
        "input",
        filterEvents
    );


    categoryFilter.addEventListener(
        "change",
        filterEvents
    );

}
