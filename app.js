const textInput = document.getElementById(`textInput`)
const textOutput = document.getElementById(`textOutput`)
const vowels = [`a`, `e`, `i`, `o`, `u`];
const ending = `ay`

textInput.addEventListener(`keyup`, (y) => {
    const input = y.target.value;
    const words = input.split(` `);
    const output = words.map((word) => translator(word)).join(` `);
    textOutput.innerText = output;
});

const translator = (input) => {
    if(vowels.includes(input[0])) {
        output = input + ending;
    } else {
        let consonants = "";
        for(let i = 0; i < input.length; i++) {
            if(vowels.includes(input[i])) {
                break;
            }
            consonants += input[i];
        }
        output = input.substring(consonants.length) + consonants + ending;
    }
    return output;
};