function countLetters() {
    let text = document.getElementById("textInput").value.toLowerCase();
    let vowels = "aeiou";
    let vowelCount = 0;
    let consonantCount = 0;

    for (let i = 0; i < text.length; i++) {
        let char = text[i];

        if (char >= 'a' && char <= 'z') {
            if (vowels.includes(char)) {
                vowelCount++;
            } else {
                consonantCount++;
            }
        }
    }

    document.getElementById("result").innerHTML =
        "Vowels: " + vowelCount + "<br>Consonants: " + consonantCount;
}