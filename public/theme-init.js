(() => {
  try {
    const saved = localStorage.getItem("theme");

    if (saved === "dark" || saved === "light") {
      document.documentElement.dataset.theme = saved;
      return;
    }

    if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      document.documentElement.dataset.theme = "light";
    }
  } catch {
    document.documentElement.dataset.theme = "dark";
  }
})();
