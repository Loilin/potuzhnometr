document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("calculButton");
    button.addEventListener("click", calculatePower);
});

function calculatePower() {
    const nameInput = document.getElementById("nameInput");
    const result = document.getElementById("result");
    const name = nameInput.value.trim();

    if (name === "") {
        result.innerText = "Введіть ім'я";
        return;
    }

    const normalized = name.toLowerCase();

    const president = [
        "зеленський володимир олександрович",
        "xnj,s dslfdfkj", // английская раскладка
        "zelensky", "zelenskyy", "volodymyr zelenskyy"
      ];

      if (president.some(v => normalized.includes(v))) {
        result.innerText = `${name}, Рівень потужності зашкалює!!!🚀🚀🚀💙💛`;
        return;
      }

      const putinVariants = [
        "путин", "путин в.в", "путин владимир", "путин владимир владимирович",
        "gexby", "gexby d.d", "gexby dkflbvbh", "gexby dkflbvbh dkflbvbhjdbx",
        "Путин", "Путин В.В", "Путин Владимир", "Путин Владимир Владимирович"
    ];

    if (putinVariants.some(v => normalized.includes(v))) {
        result.innerText = `${name}, за тобою вже їде СБУ, хлопче! 🚔🚨`;
        return;
    }

    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash += name.charCodeAt(i) * (i + 1);
    }

    const hasUkrainian = /[іїєґІЇЄҐ]/.test(name);
    const hasRussian = /[ёэыъщжЁЭЫЪЩЖ]/.test(name);
    const hasLatin = /[a-zA-Z]/.test(name);

    let layoutModifier = 0;
    
    if (hasUkrainian) {
        layoutModifier = 10;
    } else if (hasRussian) {
        layoutModifier = -10;
    } else if (hasLatin) {
        layoutModifier = 0;
    }

    const layers = (name.length * new Date().getSeconds()) % 11;
    const basePower = (hash + layers +layoutModifier) % 101;

    const power = Math.min(100, Math.max(0, basePower));

    let message = "";

    if (power < 25) {
        message = "Не потужненько 😐";
    } else if (power < 50) {
        message = "Потужність є🔥"
    } else if (power < 75) {
        message = "Хлопче, та ти в нас потуженький! 💪"
    } else {
        message = "Максимальна потужність!💪💙💛";
    }
    
    result.innerText = `${name}, твоя потужність: ${power}%, ${message}`;
}