const canvas = document.getElementById("canvas");
const props = document.getElementById("props");
let selected = null;
let z = 1;

/* DRAG FROM TOOLBAR */
document.querySelectorAll("[draggable]").forEach(btn=>{
  btn.addEventListener("dragstart",e=>{
    e.dataTransfer.setData("type",btn.dataset.type);
  });
});

canvas.addEventListener("dragover",e=>e.preventDefault());

canvas.addEventListener("drop",e=>{
  createElement(e.dataTransfer.getData("type"),e.offsetX,e.offsetY);
});

/* CREATE ELEMENT */
function createElement(type,x,y){
  const el = document.createElement("div");
  el.className = "element";
  el.style.left = x+"px";
  el.style.top = y+"px";
  el.style.zIndex = z++;
  el.dataset.type = type;

  if(type==="text"){
    el.contentEditable = true;
    el.innerText = "Editable Text";
  }else{
    el.innerHTML = "<strong>"+type.toUpperCase()+"</strong><br><small>Placeholder</small>";
  }

  enableDrag(el);
  select(el);
  canvas.appendChild(el);
}

/* MOVE ELEMENT */
function enableDrag(el){
  el.addEventListener("mousedown",e=>{
    select(el);
    let ox = e.offsetX, oy = e.offsetY;
    function move(ev){
      el.style.left = ev.pageX - canvas.offsetLeft - ox + "px";
      el.style.top = ev.pageY - canvas.offsetTop - oy + "px";
    }
    document.addEventListener("mousemove",move);
    document.addEventListener("mouseup",()=>{
      document.removeEventListener("mousemove",move);
    },{once:true});
  });
}

/* SELECT */
function select(el){
  document.querySelectorAll(".element").forEach(e=>e.classList.remove("selected"));
  selected = el;
  el.classList.add("selected");
  showProps(el);
}

/* PROPERTIES */
function showProps(el){
  props.innerHTML = `
    <label>Text</label>
    <input value="${el.innerText}">
    <label>Background</label>
    <input type="color">
    <label>Z Index</label>
    <input type="number" value="${el.style.zIndex}">
  `;
  const i = props.querySelectorAll("input");
  i[0].oninput = e => el.innerText = e.target.value;
  i[1].oninput = e => el.style.background = e.target.value;
  i[2].oninput = e => el.style.zIndex = e.target.value;
}

/* AI OPTIMIZE (CLIENT-SIDE) */
document.getElementById("aiSuggest").onclick = ()=>{
  document.querySelectorAll(".element").forEach((el,i)=>{
    el.style.left = 40 + i*150 + "px";
    el.style.top = 40 + i*100 + "px";
    el.style.background = `hsl(${i*60},70%,90%)`;
  });
  alert("Layout, spacing & colors optimized.");
};

/* EXPORT PNG */
document.getElementById("exportPNG").onclick = ()=>{
  const clone = canvas.cloneNode(true);
  clone.style.background="#fff";

  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="${canvas.clientWidth}" height="${canvas.clientHeight}">
    <foreignObject width="100%" height="100%">${new XMLSerializer().serializeToString(clone)}</foreignObject>
  </svg>`;

  const img = new Image();
  img.onload = ()=>{
    const c = document.createElement("canvas");
    c.width = img.width;
    c.height = img.height;
    c.getContext("2d").drawImage(img,0,0);
    const a = document.createElement("a");
    a.download = "infographic.png";
    a.href = c.toDataURL();
    a.click();
  };
  img.src = "data:image/svg+xml;charset=utf-8,"+encodeURIComponent(svg);
};

/* THEME */
document.getElementById("toggleTheme").onclick = ()=>{
  document.body.classList.toggle("dark");
};

/* CLEAR */
document.getElementById("clearCanvas").onclick = ()=>{
  canvas.innerHTML="";
  props.innerHTML="<p>Select an element</p>";
};