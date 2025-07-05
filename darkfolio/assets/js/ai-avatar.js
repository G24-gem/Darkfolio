document.addEventListener("DOMContentLoaded", () => {
  const avatar = document.createElement("div");
  avatar.id = "ai-bot";
  avatar.innerHTML = `
    <div class="ai-message">👋 Hello, I’m G24-Bot. Welcome to Darkfolio.</div>
  `;
  document.body.appendChild(avatar);

  const messages = {
    home: "You're at the Mainframe",
    about: "Scanning bio...",
    projects: "Analyzing creations...",
    blog: "Decoding thoughts...",
    skills: "Measuring intellect...",
    services: "Offering services...",
    contact: "Preparing comms...",
    market: "Warning: Entering Black Market"
  };

  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    let activeId = "home";

    sections.forEach(sec => {
      const top = window.scrollY;
      const offset = sec.offsetTop - 150;
      const height = sec.offsetHeight;
      if (top >= offset && top < offset + height) {
        activeId = sec.id;
      }
    });

    avatar.querySelector(".ai-message").innerText = messages[activeId] || "Monitoring...";
  });
});
