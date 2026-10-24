const themeBtn = document.getElementById('themeBtn');

themeBtn.addEventListener('click', () => {
    const html = document.documentElement;
    const next = html.dataset.theme === 'light' ? 'dark' : 'light';

    html.dataset.theme = next;
    localStorage.setItem('theme', next);
});
const box = document.getElementById('lightbox');
const boxImg = box.querySelector('img');
const boxName = box.querySelector('p');

document.querySelectorAll('.mate').forEach(mate => {
    mate.addEventListener('click', () => {
        const img = mate.querySelector('img');
        boxImg.src = img.src;
        boxImg.alt = img.alt;
        boxName.textContent = mate.querySelector('h4').textContent;
        box.classList.add('show');
    });
});

box.addEventListener('click', () => box.classList.remove('show'));

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') box.classList.remove('show');
});