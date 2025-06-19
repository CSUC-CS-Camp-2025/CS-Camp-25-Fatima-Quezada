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


