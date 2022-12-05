const name = document.querySelector("#name");
const email = document.querySelector("#email");
const msg = document.querySelector("#message");
const phone = document.querySelector("#phone");
const btnSend = document.querySelector(".btn-send");

function sendEmail() {
  const params = {
    from_name: name.value,
    to_name: email.value,
    message: `Mensagem:
        
        ${msg.value}
        
        Telefone: ${phone.value}`,
  };

  emailjs.send("service_m7cnnhw", "template_e27lg7u", params).then(
    function (res) {
      console.log("SUCCESS!", res.status, res.text);
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );
}

function returnMsg(btn) {
  setTimeout(() => {
    btn.innerText = "Enviar contato";
  }, 3000);
}

document.querySelector(".btn-send").addEventListener("click", (ev) => {
  ev.preventDefault();
  if (
    name.value != "" &&
    email.value != "" &&
    msg.value != "" &&
    phone.value != ""
  ) {
    sendEmail();
    btnSend.innerText = "Mensagem enviada";
    returnMsg(btnSend);
  } else {
    btnSend.innerText = "Preencha todos os campos";
    returnMsg(btnSend);
  }
});
