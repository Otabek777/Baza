document.querySelector('.header__navbar .btn').addEventListener('click', function() {
    this.classList.toggle('active');
});

document.querySelector('.header__burgir').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.navbar__block').classList.toggle('active');
});