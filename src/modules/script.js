const a=1


(() => {
    //mobile-menu
    const openNavMenu = document.querySelector(".open-nav-menu"),
        navMenu = document.querySelector(".nav-menu"),
        header = document.querySelector(".header"),
        mediaSize = 991;

    openNavMenu.addEventListener("click", toggleNav);

    // close the navMenu by clicking outside

    function toggleNav() {
        openNavMenu.classList.toggle("opened")
        navMenu.classList.toggle("open");
        header.classList.toggle('active')
        document.body.classList.toggle("hidden-scrolling");
    }
    navMenu.addEventListener("click", (event) => {
        if (event.target.hasAttribute("data-toggle") && window.innerWidth <= mediaSize) {
            // prevent default anchor click behavior
            event.preventDefault();
            const menuItemHasChildren = event.target.parentElement;
            // if menuItemHasChildren is already expanded, collapse it
            if (menuItemHasChildren.classList.contains("active")) {
                collapseSubMenu();
            }
            else {
                // collapse existing expanded menuItemHasChildren
                if (navMenu.querySelector(".menu-item-has-children.active")) {
                    collapseSubMenu();
                }
                // expand new menuItemHasChildren
                menuItemHasChildren.classList.add("active");
                const subMenu = menuItemHasChildren.querySelector(".sub-menu");
                subMenu.style.maxHeight = subMenu.scrollHeight + "px";
            }
        }
    });
    function collapseSubMenu() {
        navMenu.querySelector(".menu-item-has-children.active .sub-menu")
            .removeAttribute("style");
        navMenu.querySelector(".menu-item-has-children.active")
            .classList.remove("active");
    }
    function resizeFix() {
        // if navMenu is open ,close it
        if (navMenu.classList.contains("open")) {
            toggleNav();
        }
        // if menuItemHasChildren is expanded , collapse it
        if (navMenu.querySelector(".menu-item-has-children.active")) {
            collapseSubMenu();
        }
    }

    window.addEventListener("resize", function () {
        if (this.innerWidth > mediaSize) {
            resizeFix();
        }
    });
})();


