// @license http://www.gnu.org/licenses/agpl-3.0.html AGPL-3.0
// would be better if all words were stored in an external file
function generateBasedAcronym() {
    const wordBank = {
        B: [
            "Based",


            // old B dictionary

            // "Bold",
            // "Brave",
            // "Blissful",
            // "Brilliant",
            // "Beneficient",
            // "Balanced",
            // "Benign",
            // "Blessed",
            // "Bustling",
        ],

        A: [
            "Amazing",
            "Astounding",
            "Astronomical",
            "Artistic",
            "Advanced",
            "Autistic",
            "Angelic",
            "Admirable",
            "astrotistic",
        ],

        S: [
            "Staircase",
            "Sandwich",
            "Scissors",
            "Sentence",
            "Settlement",
            "Shark",
            "Smoke",
            "Snow",
            "Society",
        ],

        E: ["Enlightened", "Ethereal", "Efficient", "Eager", "Epic"],

        D: [
            "Doors",
            "Diamonds",
            "Drums",
            "Directions",
            "Disks",
            "Drugs",
            "Deers",
            "Devices",
            "Doctors",
            "Dogs",
            "Diarrhoea",
        ],
    };

    const wordB =
        wordBank["B"][Math.floor(Math.random() * wordBank["B"].length)];
    const wordA =
        wordBank["A"][Math.floor(Math.random() * wordBank["A"].length)];
    const wordS =
        wordBank["S"][Math.floor(Math.random() * wordBank["S"].length)];
    const wordE =
        wordBank["E"][Math.floor(Math.random() * wordBank["E"].length)];
    const wordD =
        wordBank["D"][Math.floor(Math.random() * wordBank["D"].length)];

    document.getElementById("name1").textContent = wordB;
    document.getElementById("name2").textContent = wordA;
    document.getElementById("name3").textContent = wordS;
    document.getElementById("name4").textContent = wordE;
    document.getElementById("name5").textContent = wordD;

    // Return the full acronym
    return `${name1} ${name2} ${name3} ${name4} ${name5}`;
}

generateBasedAcronym();
// @license-end
