function toggleMenu(){
document.getElementById("menu").classList.toggle("active");
}
document.querySelectorAll(".menu a").forEach(link=>{
link.addEventListener("click",()=>{
document.getElementById("menu").classList.remove("active");
});
});



function toggleSection(id){
let section = document.getElementById(id);
if(section.style.display === "block")
    {
        section.style.display = "none";
    }
else
    {
section.style.display = "block";
window.scrollTo({
top: section.offsetTop - 60,
behavior: "smooth"
});
}}



let gallery = document.getElementById("itsmeGallery");
for(let i=1; i<=21; i++){
let img = document.createElement("img");
img.src = `image/itsMe/Amar-${i}.jpg`;
gallery.appendChild(img);
}



let video = document.getElementById("video");
for(let i=1; i<=6; i++){
let vid = document.createElement("video");
vid.src = `image/Video/Video-${i}.mp4`;
vid.controls = true;
video.appendChild(vid);
}



let Love = document.getElementById("Love");
for(let i=1; i<=6; i++){
let card2 = document.createElement("div");
card2.className = "card2";
let img = document.createElement("img");
img.src = `image/Family/Love-${i}.jpeg`;
let text2 = document.createElement("div");
text2.className = "text2";
text2.innerHTML = `
            <h4>Name</h4>
            <h3>Love Goswami.</h3>
            <h4>Relation</h4>
            <h3>He is my Nephew.</h3>
`
card2.appendChild(img);
card2.appendChild(text2);
Love.appendChild(card2);
}