//parallel effect for hero background
document.addEventListener("mousemove", (e)=>{
  const heroBackground=document.querySelector(".hero-background");
  const moveX=(e.clientX / window.innerWidth)*20;
  const moveY=(e.clientX / window.innerHeight)*20;

  heroBackground.computedStyleMap.transform= 'translate(-${moveX}px, -${moveY}px)';
});

//optional: floating effect for text element

document.addEventListener("mousemove", (e)=>{
    const title=document.querySelector(".hero-title");
    const subtitle=document.querySelector(".hero-subtitle");

    const offsetX = (e.clientX / window.innerWidth) * 10;
  const offsetY = (e.clientY / window.innerHeight) * 10;

  title.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  subtitle.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
});
