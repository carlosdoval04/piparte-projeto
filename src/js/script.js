function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');
  if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
      document.querySelector('.icon').src = "src/assets/img/menu_white_36dp.svg";
  } else {
      menuMobile.classList.add('open');
      document.querySelector('.icon').src = "src/assets/img/close_white_36dp.svg";
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const registrationForm = document.getElementById("registration-form");
  const registrationDetails = document.getElementById("registration-details");

  registrationForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const nome = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("phone").value;
    const interesse = document.getElementById("interest").value;

    // Verifique se todos os campos obrigatórios foram preenchidos
    if (!nome || !email || !telefone || !interesse) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    let valorReais;

    switch (interesse) {
      case "1":
        valorReais = 100; // Pipa
        break;
      case "2":
        valorReais = 200; // Carretilha
        break;
      case "3":
        valorReais = 50; // Outros
        break;
      // Adicione casos para outros interesses, se necessário
      default:
        valorReais = 0; // Valor padrão se a opção não for selecionada
    }

    const resultado = `Prazer, ${nome}. 
                        Te enviaremos novidades por esse e-mail: ${email}, 
                        Caso ocorra algum imprevisto entraremos em contato pelo telefone cadastrado: ${telefone}, 
                        Ficamos muito felizes com seu interesse em: ${interesse}, 
                        Sua participação ficou: R$ ${valorReais.toFixed(2)}`;
    
    // Exibe o elemento registration-details
    registrationDetails.style.display = "block";
    // Define o conteúdo do elemento registration-details
    registrationDetails.querySelector(".text-registration").innerText = resultado;
  });
});