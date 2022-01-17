const keyboard = document.querySelector("#keyboard");

// addKeys();
function addKeys() {
    for (let i = 0; i < 87; i++) {
        let num = "";
        num = i;
        let nuDiv = document.createElement("div");
        nuDiv.classList.add("key");
        nuDiv.id = "key" + i;
        if (num === 1 || 4 || 6 || 9 || 11 || 13 || 16 || 18 || 21 || 23 || 25 || 28 || 30 || 33 || 35 || 37 || 40 || 42 || 45 || 47 || 49 || 52 || 54 || 57 || 59 || 61 || 64 || 66 || 69 || 71 || 73 || 76 || 78 || 81 || 83 || 85) {
            nuDiv.classList.add("black");
            console.log(i + " is a minor key");
        }
        keyboard.append(nuDiv);
    }
}
function play(num) {
    function zeroPad(number, places) {
        var zero = places - number.toString().length + 1;
        return Array(+(zero > 0 && zero)).join("0") + number;
    }
    let fullNum = zeroPad(num, 2);
    let path = './soundfiles/' + fullNum + '.mp3';
    console.log(path);
    let thisAudio = new Audio(path);
    thisAudio.play();
}