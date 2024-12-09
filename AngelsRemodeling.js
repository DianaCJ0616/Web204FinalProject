function toggleMenu() {
    const myLinks = document.getElementById("myLinks");
    const logo = document.querySelector(".logo");

    if (myLinks.style.display === "block") {
        myLinks.style.display = "none";
        logo.style.display = "block"; 
    } else {
        myLinks.style.display = "block";
        logo.style.display = "none";
    }
}

    document.addEventListener("DOMContentLoaded", () => {
        const flipContainers = document.querySelectorAll(".flip-container");

        flipContainers.forEach(container => {
            container.addEventListener("click", () => {
                // Flip only the clicked container
                container.classList.toggle("flipped");

                // Optionally, unflip all others
                flipContainers.forEach(otherContainer => {
                    if (otherContainer !== container) {
                        otherContainer.classList.remove("flipped");
                    }
                });
            });
        });
    });
</script>
