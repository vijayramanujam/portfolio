


animateName();  // Start the animation

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function animateName() {
    const name = "Vijay Ramanujam";
    const nameElement = document.getElementById('name');
    const messageElement = document.getElementById('role');

    for (let i = 0; i < name.length; i++) {
        nameElement.textContent += name[i];
        await sleep(100);
    }
    messageElement.style.visibility = 'visible';
}


function blurName() {

    const image = document.getElementById('blurred-image');

    if (image.complete) {
        image.style.filter = 'blur(0)';
    } else {
        image.onload = function () {
            image.style.filter = 'blur(0)';
        };
    }

}
blurName();