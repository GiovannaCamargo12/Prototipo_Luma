document.getElementById('loginForm').addEventListener('submit', function(e){
  e.preventDefault(); // evita que a página recarregue

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const msg = document.getElementById('loginMsg');

  // Simulação de login com dados fixos
  if(email === "bruninho@fatec.com" && password === "123456"){
    msg.style.display = 'none';
    // Redireciona para a página dos dinossauros
    window.location.href = "dinos.html";
  } else {
    msg.textContent = 'Email ou senha incorretos!';
    msg.style.display = 'block';
  }
});

