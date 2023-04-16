const encriptar = document.getElementById("encriptar");
const desencriptar = document.getElementById("desencriptar");
const copiar = document.getElementById("copiar");

const textDefault = document.querySelector(".container-text-default");
const textResult = document.querySelector(".container-context-resultado");
const text = document.querySelector(".text-message-resultado");

encriptar.addEventListener("click", () => {
  let input = document.getElementById("inputEncriptar").value;

  const validacion = /([A-ZáéíóúÁÉÍÓÚñ\d$@$!%*?&])/gm.test(input);
  if (!validacion && input.length > 0) {
    const mapObj = {
      e: "enter",
      i: "imes",
      a: "ai",
      o: "ober",
      u: "ufat",
    };
    input = input.replace(/e|i|a|o|u/gm, (matched) => {
      return mapObj[matched];
    });

    quitarAlerta();
    mostrarResultado();

    text.textContent = input;
  } else {
    mostrarAlerta();
  }
});

desencriptar.addEventListener("click", () => {
  let input = document.getElementById("inputEncriptar").value;

  const validacion = /([A-ZáéíóúÁÉÍÓÚñ\d$@$!%*?&])/gm.test(input);
  if (!validacion && input.length > 0) {
    const mapObj = {
      enter: "e",
      imes: "i",
      ai: "a",
      ober: "o",
      ufat: "u",
    };
    input = input.replace(/enter|imes|ai|ober|ufat/gm, (matched) => {
      return mapObj[matched];
    });

    quitarAlerta();
    mostrarResultado();

    text.textContent = input;
  } else {
    mostrarAlerta();
  }
});

copiar.addEventListener("click", () => {
  let copiado = text.textContent;

  navigator.clipboard.writeText(copiado).then(() => {
    copiar.textContent = "Copiado";
    copiar.classList.add("btn-copiado");

    window.setTimeout(() => {
      copiar.textContent = "Copiar";
      copiar.classList.remove("btn-copiado");
    }, 1000);
  });
});

const mostrarResultado = () => {
  textDefault.style.display = "none";
  textResult.style.display = "flex";
};
const quitarAlerta = () => {
  const alert = document.querySelector(".alert-disabled");
  const alertText = document.querySelector(".text-desencriptar");
  alertText.classList.remove("text-desencriptar-alert");
  alert.classList.remove("alert-actived");
};
const mostrarAlerta = () => {
  const alertText = document.querySelector(".text-desencriptar");
  const alert = document.querySelector(".alert-disabled");
  alert.classList.add("alert-actived");
  alertText.classList.add("text-desencriptar-alert");
};



// Título------------------

$(document).ready(function(){
  
  var $randomnbr = $('.nbr');
  var $timer= 10;
  var $it;
  var $data = 0;
  var index;
  var change;
  var letters = ["D", "E", "S", "E", "N", "C", "R", "I", "P", "T", "A", "D", "O", "R", "&nbsp", "D", "E", "&nbsp", "T", "E", "X", "T", "O"];
  
  $randomnbr.each(function(){
      
    change = Math.round(Math.random()*100);
    $(this).attr('data-change', change);
    
  });
  
  function random(){
    return Math.round(Math.random()*9);
  };
  
  function select(){
    return Math.round(Math.random()*$randomnbr.length+1);
  };
  
  function value(){
    $('.nbr:nth-child('+select()+')').html(''+random()+'');
    $('.nbr:nth-child('+select()+')').attr('data-number', $data);
    $data++;
    
    $randomnbr.each(function(){
        if(parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))){
          index = $('.ltr').index(this);
          $(this).html(letters[index]);
          $(this).removeClass('nbr');
        }
    });
    
  };
  
  $it = setInterval(value, $timer);
    
});
