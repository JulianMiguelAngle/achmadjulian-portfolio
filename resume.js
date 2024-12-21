let resume = document.querySelector('.resume')
let resumebutton = document.querySelector('#resumebutton')

resumebutton.addEventListener('click', function(e) {
    resume.classList.toggle('resume-open')
});

document.body.addEventListener('click', function (e) {
    if (e.target !== resumebutton && !resume.contains(e.target)) {
        resume.classList.remove('resume-open')
    }
})