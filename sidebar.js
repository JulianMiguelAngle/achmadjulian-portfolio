let sidebar = document.querySelector('.sidebar')
let menubutton = document.querySelector('#menubutton')

menubutton.addEventListener('click', function(e) {
    sidebar.classList.toggle('open')
});

document.body.addEventListener('click', function (e) {
    if (e.target !== menubutton && !sidebar.contains(e.target)) {
        sidebar.classList.remove('open')
    }
})