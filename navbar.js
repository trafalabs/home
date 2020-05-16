const navbar=document.getElementById('navbar');
let scrolled = false;

window.onscroll=function()
{
    if(window.pageYOffset > 100)
    {
        this.navbar.classList.remove('top');
        if(!scrolled)
        {
            navbar.style.transform='translateY(-70px)';
        }
        this.setTimeout(function()
        {
            navbar.style.transform='translateY(0)';
            scrolled=true;
        },200);
    }
    else
    {
        this.navbar.classList.add('top');
        this.scrolled=false;
    }
}