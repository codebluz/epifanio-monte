function sendEmail() {
  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const msg = document.querySelector("#message");
  const phone = document.querySelector("#phone");

  const params = {
    from_name: name.value,
    to_name: email.value,
    message: `Mensagem:
        
        ${msg.value}
        
        Telefone: ${phone.value}`,
  };

  const btnSend = document.querySelector(".btn-send");

  emailjs.send("service_m7cnnhw", "template_e27lg7u", params).then(
    function (res) {
      console.log("SUCCESS!", res.status, res.text);
      btnSend.innerText = "Email enviado";
      returnMsg(btnSend);
    },
    function (error) {
      console.log("FAILED...", error);
      btnSend.innerText = "Tente novamente";
      returnMsg(btnSend);
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
  sendEmail();
});
