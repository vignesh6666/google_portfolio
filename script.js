function goToPortfolio() {
    const homeContainer = document.querySelector(".home-container");
  
    if (homeContainer) {
      homeContainer.style.animation = "fadeOut 0.3s ease forwards";
      setTimeout(() => {
        window.location.href = "portfolio.html";
      }, 300);
    } else {
      window.location.href = "portfolio.html";
    }
  }
  
  function showSection(sectionId) {
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => {
      section.classList.add("hidden");
    });
  
    const target = document.getElementById(sectionId);
    if (!target) return;
  
    target.classList.remove("hidden");
    target.style.animation = "none";
    target.offsetHeight;
    target.style.animation = "fadeIn 0.4s ease-out";
  
    const tabs = document.querySelectorAll(".nav-tab");
    tabs.forEach(tab => {
      tab.classList.remove("active");
      if (tab.getAttribute("data-section") === sectionId) {
        tab.classList.add("active");
      }
    });
  
    const resultsInfo = document.querySelector(".results-info");
    if (resultsInfo) {
      const count = target.querySelectorAll(
        ".timeline-item, .cert-card, .project-card, .contact-card, .about-section"
      ).length || 1;
  
      const time = (Math.random() * 0.5 + 0.1).toFixed(2);
      resultsInfo.textContent = `About ${count} result${count > 1 ? "s" : ""} (${time} seconds)`;
    }
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const isPortfolio = window.location.pathname.includes("portfolio");
  
    document.addEventListener("keydown", function (e) {
      if (!isPortfolio && e.key === "Enter") {
        goToPortfolio();
      }
    });
  
    const homeSearchBox = document.getElementById("homeSearchBox");
    if (homeSearchBox) {
      homeSearchBox.addEventListener("click", function () {
        goToPortfolio();
      });
      homeSearchBox.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          goToPortfolio();
        }
      });
      homeSearchBox.style.cursor = "pointer";
    }
  
    const clearSearch = document.getElementById("clearSearch");
    if (clearSearch) {
      clearSearch.addEventListener("click", function () {
        window.location.href = "index.html";
      });
    }
  
    if (isPortfolio) {
      showSection("about");
    }
  });
  
  const style = document.createElement("style");
  style.textContent = `
    @keyframes fadeOut {
      from { opacity: 1; transform: translateY(0); }
      to   { opacity: 0; transform: translateY(-20px); }
    }
  `;
  document.head.appendChild(style);