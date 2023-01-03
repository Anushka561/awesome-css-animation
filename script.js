
        const container = document.querySelector(".menu-container");
        const toggle = document.querySelector(".menu-toggle");
        var menuExpanded = false;
        toggle.addEventListener("click", () => {
            if (!menuExpanded) {
                container.classList.add('active')
                menuExpanded=true;
            } else {
                container.classList.remove('active')
                menuExpanded=false;

            }
        })
