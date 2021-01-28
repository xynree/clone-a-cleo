
let collarinput = document.querySelector('#collarinput');
let furinput = document.querySelector('#furinput');
let accentinput = document.querySelector('#accentinput');
let eyeinput = document.querySelector('#eyeinput');
let noseinput = document.querySelector('#noseinput');
let irisinput = document.querySelector('#irisinput');
let wallinput = document.querySelector('#wallinput');
let carpetinput = document.querySelector('#carpetinput');
let titlecleo = document.querySelector('#titlecleo');
// const inputs = [collarinput, furinput, accentinput, eyesinput, noseinput, irisinput, wallinput, carpetinput];




function mouseListen(e){
  const className = e.target.classList.value

  console.log(className)

  switch(className){
    case "collar":
      document.querySelector('#clclr').style.fill = e.target.value;
      break;
    case "fur":
      document.querySelector('#clfur').style.fill = e.target.value;
      

      break;
    case "accent":
      document.querySelector('#claccent1').style.fill = e.target.value;
      document.querySelector('#claccent2').style.fill = e.target.value;
      break;
    case "eyes":
      document.querySelector('#cleyes1').style.fill = e.target.value;
      document.querySelector('#cleyes2').style.fill = e.target.value;
      break;
    case "nose":
      document.querySelector('#clnose').style.fill = e.target.value;
      break;
    case "iris":
      document.querySelector('#cliris1').style.fill = e.target.value;
      document.querySelector('#cliris2').style.fill = e.target.value;
      break;
    case "wall":
      document.querySelector('#clwall').style.fill = e.target.value;

      break;
    case "carpet":
      document.querySelector('#clcrpt').style.fill = e.target.value;

      break;

  }
  document.querySelector('#titlecleo').style.color = e.target.value;

}

// function mouseListen(e){

//   document.querySelector('#clfur').style.fill = e.target.value;

// }

// inputs.forEach(input => {
//   input.addEventListener('mousemove', mouseListen);
//   input.addEventListener('input', mouseListen);

// });
collarinput.addEventListener('input', mouseListen);


furinput.addEventListener('input', mouseListen);

accentinput.addEventListener('input', mouseListen);

irisinput.addEventListener('input', mouseListen);

eyeinput.addEventListener('input', mouseListen);

noseinput.addEventListener('input', mouseListen);

wallinput.addEventListener('input', mouseListen);

carpetinput.addEventListener('input', mouseListen);