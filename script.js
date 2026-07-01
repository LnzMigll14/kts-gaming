document.querySelectorAll(".stab").forEach((tab) => {
  tab.addEventListener("click", () => {
    const targetContent = document.getElementById(tab.dataset.t);
    
    // If clicking the already active tab, do nothing
    if (tab.classList.contains("on")) return;

    // 1. Remove active line from current tab, add to new one
    document
      .querySelectorAll(".stab")
      .forEach((t) => t.classList.remove("on"));
    tab.classList.add("on");

    // 2. Clear old content states immediately
    document
      .querySelectorAll(".tcontent")
      .forEach((c) => {
        c.classList.remove("on");
        c.style.display = "none"; // Hard cut to hidden
      });

    // 3. Mount the new container, then trigger CSS layout transition frames
    targetContent.style.display = "block";
    
    // A micro-timeout forces the browser to paint display: block before animating properties
    setTimeout(() => {
      targetContent.classList.add("on");
    }, 30);
  });
});