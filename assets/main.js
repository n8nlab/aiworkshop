// Animacija pojavljivanja sekcija pri skrolovanju
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add("in");
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// Pretraga pojmovnika
const search = document.getElementById("glossary-search");
if (search) {
  const terms = [...document.querySelectorAll(".term")];
  const empty = document.getElementById("glossary-empty");
  search.addEventListener("input", () => {
    const q = search.value.trim().toLowerCase();
    let shown = 0;
    terms.forEach((t) => {
      const match = t.textContent.toLowerCase().includes(q);
      t.style.display = match ? "" : "none";
      if (match) shown++;
    });
    empty.style.display = shown ? "none" : "block";
  });
}

// Dugme "Kopiraj prompt"
document.querySelectorAll(".copy").forEach((btn) => {
  btn.addEventListener("click", async () => {
    const text = document.getElementById(btn.dataset.target).textContent.trim();
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    const label = btn.textContent;
    btn.textContent = "Kopirano ✓";
    btn.classList.add("done");
    setTimeout(() => { btn.textContent = label; btn.classList.remove("done"); }, 1800);
  });
});
