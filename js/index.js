var banners = document.querySelectorAll('.banner');
var dots = document.querySelectorAll('.dot');
var currentIndex = 0;

function showBanner(index) {
  for (var i = 0; i < banners.length; i++) {
    banners[i].classList.remove('active');
    dots[i].classList.remove('active');
  }

  banners[index].classList.add('active');
  dots[index].classList.add('active');
}

function nextBanner() {
  currentIndex++;
  if (currentIndex === banners.length) {
    currentIndex = 0;
  }
  showBanner(currentIndex);
}

setInterval(nextBanner, 3000);

function toggleContent(contentId) {
  var content = document.getElementById(contentId);
  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}

const employeeInfos = document.querySelectorAll(".employee-info");

employeeInfos.forEach(function (employeeInfo) {
  const employeeImage = employeeInfo.querySelector("img");
  const employeePosition = employeeInfo.querySelector(".employee-role");
  const employeeSpecialty = employeeInfo.querySelector(".employee-specialty");

  employeeImage.addEventListener("mouseover", function () {
    employeePosition.style.display = "block";
    employeeSpecialty.style.display = "block";
  });

  employeeImage.addEventListener("mouseout", function () {
    employeePosition.style.display = "none";
    employeeSpecialty.style.display = "none";
  });
});

document
  .getElementById("curriculum-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var nome = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var cidade = document.getElementById("cidade").value;
    var formacao = document.getElementById("form").value;
    var cpf = document.getElementById("cpf").value;
    var curriculo = document.getElementById("curric").value;

    if (
      nome !== "" &&
      email !== "" &&
      telefone !== "" &&
      cidade !== "" &&
      formacao !== "" &&
      cpf !== "" &&
      curriculo !== ""
    ) {
      alert("Curriculum enviado com Sucesso!");

      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("telefone").value = "";
      document.getElementById("cidade").value = "";
      document.getElementById("form").value = "";
      document.getElementById("cpf").value = "";
      document.getElementById("curric").value = "";
    } else {
      alert("Por favor, preencha todos os campos do formulário.");
    }
  });

var campoCpf = document.getElementById("cpf");

campoCpf.addEventListener("input", function() {
  var valorCpf = campoCpf.value;

  var numerosCpf = valorCpf.replace(/\D/g, "");

  var mascaraCpf = "000.000.000-00";

  var cpfFormatado = "";

  var j = 0;
  for (var i = 0; i < mascaraCpf.length; i++) {
    if (mascaraCpf.charAt(i) === "0") {
      cpfFormatado += numerosCpf.charAt(j);
      j++;
    } else {
      cpfFormatado += mascaraCpf.charAt(i);
    }
  }

  campoCpf.value = cpfFormatado;
});


var campoTelefone = document.getElementById("telefone");

campoTelefone.addEventListener("input", function() {
  var valorTelefone = campoTelefone.value;

  var numerosTelefone = valorTelefone.replace(/\D/g, "");

  var mascaraTelefone = "(00) 00000-0000";

  var telefoneFormatado = "";

  var j = 0;
  for (var i = 0; i < mascaraTelefone.length; i++) {
    if (mascaraTelefone.charAt(i) === "0") {
      telefoneFormatado += numerosTelefone.charAt(j);
      j++;
    } else {
      telefoneFormatado += mascaraTelefone.charAt(i);
    }
  }

  campoTelefone.value = telefoneFormatado;
});















  


