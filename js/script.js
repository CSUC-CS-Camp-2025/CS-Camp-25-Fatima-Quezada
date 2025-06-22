const spans = document.querySelectorAll('.word span');

spans.forEach((span, idx) => {
    span.addEventListener('click', (e) => {
            e.target.classList.add('active');
    });
    span.addEventListener('animationed', (e) => {
        e.target.classList.remove('active');
});

//Inital animation
setTimeout(() => {
    span.classList.add('acive');
    }, 750 * (idx+1))
});


const canvas = document.getElementById('drawCanvas');
const ctx = canvas.getContext('2d');
const colorPicker = document.getElementById('colorPicker');

let painting = false;

canvas.addEventListener('mousedown', () => painting = true);
canvas.addEventListener('mouseup', () => false);
canvas.addEventListener('mouseleave', () => painting = false);

canvas.addEventListener('mousemove,' draw);

function draw(e) {
    if (!painting) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.fillStyle = colorPicker.ariaValueMax;
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fill();
}