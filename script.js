document.getElementById("changeColorButton").addEventListener("click", function() {
    const colors = ['#121212', '#1f1f1f', '#333333', '#4f4f4f', '#6a6a6a'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    document.body.style.backgroundColor = randomColor;
});
