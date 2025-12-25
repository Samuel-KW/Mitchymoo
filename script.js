const timeEl = document.getElementById("localTime");
function updateTime() {
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, "0");
    const mm = String(now.getMinutes()).padStart(2, "0");
    timeEl.textContent = `${hh}:${mm}`;
}
updateTime();
setInterval(updateTime, 1000 * 10);

const links = {
    l: "https://www.linkedin.com/in/mitchell-shapiro-155a65236/",
    g: "https://github.com/MitchellShapiro",
    e: "mailto:mzshap@gmail.com",
    r: "/resume.pdf"
};

document.addEventListener("keydown", async (ev) => {
    const key = ev.key.toLowerCase();
    if (key in links) {
        window.open(links[key], "_blank", "noopener,noreferrer");
    }
    if (key === "c") {
        try {
            await navigator.clipboard.writeText(links.l);
            const hint = document.getElementById("copyHint");
            hint.textContent = "Copied: ";
            setTimeout(() => (hint.textContent = "Press "), 1200);
        } catch {
            // fail silently
        }
    }
});