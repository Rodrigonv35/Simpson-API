function getCharacters(done) {
    const results = fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=100");

    results
        .then(response => response.json())
        .then(data => {
            done(data);
        });
}

getCharacters(data => {
    const main = document.querySelector("main");
    const addedCharacters = new Set();

    data.forEach(personaje => {
        if (!addedCharacters.has(personaje.character)) {

            const article = document.createRange().createContextualFragment(`
                <article>
                    <div class="image-container">
                        <img src="${personaje.image}" alt="personaje">
                    </div>
                    <h2>${personaje.character}</h2>
                    <p>${personaje.quote}</p>
                </article>
            `);

            main.append(article);
            addedCharacters.add(personaje.character); 
        }
    });
});
