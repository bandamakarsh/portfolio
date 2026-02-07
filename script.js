// typing effect
const text = "Cybersecurity Student";
let i = 0;
function type(){
    if(i < text.length){
        document.querySelector(".typing").textContent += text.charAt(i);
        i++;
        setTimeout(type,60);
    }
}
type();

// scroll animation
const faders = document.querySelectorAll('.fade');

const appear = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add('show');
}
});
});

faders.forEach(el=>appear.observe(el));
