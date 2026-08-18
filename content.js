function removeShorts() {

    // Remove vídeos com link /shorts/
    document.querySelectorAll(
        "ytd-rich-item-renderer, ytd-video-renderer, ytd-grid-video-renderer"
    ).forEach(video => {

        const link = video.querySelector("a[href*='/shorts/']");

        if (link) {
            video.remove();
        }
    });

    // Remove seções chamadas Shorts
    document.querySelectorAll("ytd-rich-section-renderer").forEach(section => {

        const text = section.innerText || "";

        if (text.includes("Shorts")) {
            section.remove();
        }
    });

    // Remove botão lateral Shorts
    document.querySelectorAll("a[href='/shorts'], a[href^='/shorts/']")
        .forEach(el => el.remove());
}

// Executa inicialmente
removeShorts();

// Observa mudanças na SPA do YouTube
const observer = new MutationObserver(() => {
    removeShorts();
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});

// Redireciona páginas /shorts/ para /watch?v=
if (location.pathname.startsWith("/shorts/")) {

    const id = location.pathname.split("/")[2];

    if (id) {
        window.location.replace(
            "https://www.youtube.com/watch?v=" + id
        );
    }
}