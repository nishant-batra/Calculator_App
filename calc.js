 var btn = document.querySelectorAll("button");
console.log(btn);
function changebg()
{
    btn.style.backgroundColor = "black";
}
btn.addEventListener("click",changebg);
