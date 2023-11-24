let images = ["img1.png", "img2.png", "img3.png", "img4.png", "img5.png", "img6.png", "img7.png", "img8.png"];
let userName = prompt("Введіть своє ім'я");
let gameCount = 0;

function spin() {
    gameCount++;
    document.getElementById("gameCount").innerText = "Ігор: " + gameCount;
    if (gameCount > 3) {
        document.getElementById("spinButton").disabled = true;
        return;
    }

    let results = [];
    for (let i = 1; i <= 9; i++) {
        let randomImage = images[Math.floor(Math.random() * images.length)];
        results.push(randomImage);
    }

    setTimeout(function() {
        for (let i = 1; i <= 9; i++) {
            document.getElementById("img" + i).src = results[i-1];
        }

        if (results[3] === results[4] && results[4] === results[5]) {
            setTimeout(function() {
                alert(userName + ", ви виграли!");
            }, 100);
        }
    }, 100);
}
