window.onload = function () {
    let ang = document.getElementById('angular')
    let jS = document.getElementById('java')
    let css = document.getElementById('css')
    let git = document.getElementById('github')
    let bootst = document.getElementById('bootstrap')
    let html5 = document.getElementById('html')
    document.getElementById('angular').addEventListener('mouseenter', function () {
        ang.classList.remove('colored')
    })

    document.getElementById('angular').addEventListener('mouseleave', function () {
        ang.classList.add('colored')
    })

    document.getElementById('java').addEventListener('mouseenter', function () {
        jS.classList.remove('colored')
    })

    document.getElementById('java').addEventListener('mouseleave', function () {
        jS.classList.add('colored')
    })

    document.getElementById('css').addEventListener('mouseenter', function () {
        css.classList.remove('colored')
    })

    document.getElementById('css').addEventListener('mouseleave', function () {
        css.classList.add('colored')
    })

    document.getElementById('github').addEventListener('mouseenter', function () {
        git.classList.remove('colored')
    })

    document.getElementById('github').addEventListener('mouseleave', function () {
        git.classList.add('colored')
    })

    document.getElementById('bootstrap').addEventListener('mouseenter', function () {
        bootst.classList.remove('colored')
    })

    document.getElementById('bootstrap').addEventListener('mouseleave', function () {
        bootst.classList.add('colored')
    })

    document.getElementById('html').addEventListener('mouseenter', function () {
        html5.classList.remove('colored')
    })

    document.getElementById('html').addEventListener('mouseleave', function () {
        html5.classList.add('colored')
    })




}