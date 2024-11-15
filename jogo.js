const button = document.querySelector(".button-game");
const img = document.querySelector(".pokemon");
const input = document.querySelector("#pokemonName");

const comecar = async () => {
    button.textContent = "Desistir";
    input.value = "";
    const num = Math.floor(Math.random() * 151) + 1;
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + num);
    const results = await res.json();

    img.src = results.sprites.other.dream_world.front_default;

    input.addEventListener("input", (e) => {
        if (e.target.value.toLowerCase() === results.name.toLowerCase()) {
            alert("Você venceu!!!!");
            img.classList.add("reveal");
            button.textContent = "Jogar Novamente";
        }
    });
}

button.addEventListener("click", (e) => {
    if (img.classList.contains("reveal")) {
        img.src = ""
        img.classList.remove("reveal");
        comecar();
        return;
    }
    button.textContent = "Jogar Novamente";
    img.classList.add("reveal");
});

comecar();