var iconsShareBlock = document.querySelector('.icon-share'),
    networks = document.querySelector('.networks'),
    iShare = document.querySelector('.i-share');



iconsShareBlock.addEventListener('click', function(){
    // alert('button is clicked');
    // alert(networks.style.visibility);
    
    if (networks.style.visibility === '' || networks.style.visibility==="hidden") {
        networks.style.visibility = 'visible';
        this.style.background = 'var(--desaturated-dark-blue)';
        iShare.style.fill = 'var(--light-grayish-blue)';
        return
    }

    networks.style.visibility = 'hidden';
        this.style.background = '';
        iShare.style.fill = '';

    
})