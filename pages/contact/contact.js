window.addEventListener('load', function () {
    document.getElementById('loading').style.display = "none"
    let menu = document.getElementById('openmenu');
    let othernav = document.getElementById('linksha')
    menu.addEventListener('click', function(){
        // alert("message")
        if(othernav.style.display === 'block'){
            othernav.style.display = 'none'
        }else{
            othernav.style.display = 'block'
        }
    })
})