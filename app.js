const amigos = [];

// ligar botões
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btnAdicionar').addEventListener('click', adicionarAmigo);
  document.getElementById('btnSortear').addEventListener('click', sortearAmigo);
  // permitir Enter no campo input
  document.getElementById('amigo').addEventListener('keyup', (e) => {
    if (e.key === 'Enter') adicionarAmigo();
  });
});

function adicionarAmigo() {
  const input = document.getElementById('amigo');
  const nome = input.value.trim();

  if (nome === '') {
    alert('Por favor, insira um nome.');
    return;
  }

  amigos.push(nome);
  input.value = '';
  atualizarLista();
}

function atualizarLista() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert('Adicione pelo menos um nome antes de sortear.');
    return;
  }

  const index = Math.floor(Math.random() * amigos.length);
  const sorteado = amigos[index];

  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `O amigo secreto sorteado foi: <strong>${sorteado}</strong>`;
}