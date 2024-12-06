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
