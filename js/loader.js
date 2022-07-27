function playloader()
{
    setTimeout(loader,2000);
}
function loader(){
    document.querySelector(".container").style.display ="none";
    document.querySelector(".container2").style.display = "block";
}