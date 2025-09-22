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