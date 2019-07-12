window.addEventListener('load', function () {
    document.getElementById('loading').style.display = "none"
    let menu = document.getElementById('openmenu');
    let othernav = document.getElementById('linksha')
    menu.addEventListener('click', function () {
        if (othernav.style.display === 'block') {
            othernav.style.display = 'none'
        } else {
            othernav.style.display = 'block'
        }
    })
    let submitted = false;
    let submitting = document.getElementById('contactform')
    submitting.addEventListener('submit', function () {
        submitted = true;
        document.getElementById('submitbutton').setAttribute('disabled', "")
        document.getElementById('sendingmsg').style.display = 'inline-block'
        let hiddenframe = document.getElementById('hidden_iframe')
        hiddenframe.addEventListener('load', function () {
            if (submitted) {
                document.getElementById('msg_success').style.display = 'block'
                document.getElementById('msg_success').classList.add('fadeIn')
                document.getElementById('contactform').reset();
                document.getElementById('submitbutton').removeAttribute('disabled')
                document.getElementById('sendingmsg').style.display = 'none'
            }
            setTimeout(function(){
                document.getElementById('msg_success').classList.add('fadeOut')
            }, 3000)
        })

    })
})