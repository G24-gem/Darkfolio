document.addEventListener("DOMContentLoaded", () => {
  const terminal = document.getElementById("terminal-intro");
  const mainContent = document.getElementById("main-content");
  const lines = [
    "Booting Darkfolio v1.0...",
    "Decrypting identity: Akinbo Gem...",
    "Injecting back-end logic...",
    "Launching AI Avatar...",
    "System status: [STABLE]",
    ">> Access granted."
  ];

  let i = 0;
  terminal.style.background = "#000";
  terminal.style.color = "#0f0";
  terminal.style.fontFamily = "monospace";
  terminal.style.padding = "30px";
  terminal.style.height = "100vh";
  terminal.style.overflow = "hidden";
  terminal.innerHTML = "<pre id='terminal-text'></pre>";

  const output = document.getElementById("terminal-text");

  const typeLine = () => {
    if (i < lines.length) {
      output.innerHTML += lines[i] + "\n";
      i++;
      setTimeout(typeLine, 900);
    } else {
      setTimeout(() => {
        terminal.style.display = "none";
        mainContent.classList.remove("hidden");
        document.querySelector(".nav-bar").style.display = "block"
      }, 1000);
    }
  };

  typeLine();
});
