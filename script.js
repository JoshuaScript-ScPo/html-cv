script.js

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

function toggleSection(id) {
    const section = document.getElementById(id);
    const icon = document.getElementById(`icon${id.slice(-1)}`);

    if (section.classList.contains("active")) {
        section.classList.remove("active");
        section.style.display = "none";
        icon.innerHTML = "▾"; 
        icon.classList.add("rotate-down");
        icon.classList.remove("rotate-up");
    } else {
        section.classList.add("active");
        section.style.display = "block";
        icon.innerHTML = "▴"; 
        icon.classList.add("rotate-up");
        icon.classList.remove("rotate-down");
    }
}

  
  
  
  





