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