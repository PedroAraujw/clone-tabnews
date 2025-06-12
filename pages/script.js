document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;

  // Verificação simples de login, adapta conforme backend
  if (path.includes('fazer_ocorrencia.html') || path.includes('ver_ocorrencias.html')) {
    fetch('verifica_login.php')
      .then(res => res.json())
      .then(data => {
        if (!data.logado) {
          window.location.href = 'login.html';
        }
      })
      .catch(() => {
        window.location.href = 'login.html';
      });
  }

  // Validação de formulário de cadastro
  const formCadastro = document.getElementById('formCadastro');
  if (formCadastro) {
    formCadastro.addEventListener('submit', (e) => {
      const senha = document.getElementById('cadastroSenha').value;
      const confirmaSenha = document.getElementById('cadastroConfirmaSenha').value;

      if (senha !== confirmaSenha) {
        e.preventDefault();
        alert('As senhas não coincidem!');
      }
    });
  }

  // Logout
  window.logout = function() {
    fetch('logout.php')
      .then(() => window.location.href = 'login.html')
      .catch(() => window.location.href = 'login.html');
  };

  // Formulário de Ocorrência
  const formOcorrencia = document.getElementById('formOcorrencia');
  if (formOcorrencia) {
    formOcorrencia.addEventListener('submit', (e) => {
      e.preventDefault();
      const titulo = document.getElementById('tituloOcorrencia').value;
      const descricao = document.getElementById('descricaoOcorrencia').value;
      const imagemFile = document.getElementById('imagemOcorrencia').files[0];

      const ocorrencias = JSON.parse(localStorage.getItem('ocorrencias')) || [];

      const autor = 'Usuário Logado'; // adaptar para pegar do backend

      let imagemUrl = null;
      if (imagemFile) {
        imagemUrl = URL.createObjectURL(imagemFile);
      }

      ocorrencias.push({
        titulo,
        descricao,
        autor,
        imagemUrl,   // padronizei esse nome
        status: 'pendente'  // tudo em minúsculo
      });

      localStorage.setItem('ocorrencias', JSON.stringify(ocorrencias));

      alert('Ocorrência registrada com sucesso!');
      window.location.href = 'ver_ocorrencias.html';
    });
  }

  // Exibir ocorrências com botões de aprovação
  const listaOcorrencias = document.getElementById('listaOcorrencias');
  if (listaOcorrencias) {
    const ocorrencias = JSON.parse(localStorage.getItem('ocorrencias')) || [];

    listaOcorrencias.innerHTML = ''; // limpa lista antes de renderizar

    ocorrencias.forEach((ocorrencia, index) => {
      const li = document.createElement('li');
      li.classList.add('ocorrencia-item');

      li.innerHTML = `
        <strong>${ocorrencia.titulo}</strong> (${ocorrencia.status || 'pendente'})<br>
        ${ocorrencia.descricao}<br>
        <em>Enviado por: ${ocorrencia.autor}</em><br>
      `;

      if (ocorrencia.imagemUrl) {
        li.innerHTML += `<br><img src="${ocorrencia.imagemUrl}" alt="Imagem da ocorrência" class="imagem-ocorrencia" style="max-width: 300px; margin-top: 8px;">`;
      }

      // Botões só aparecem se status for pendente
      if (ocorrencia.status === 'pendente') {
        li.innerHTML += `
          <br><br>
          <button class="btn-approve" onclick="aprovarOcorrencia(${index})" style="margin-right: 10px;">Aprovar</button>
          <button class="btn-reject" onclick="rejeitarOcorrencia(${index})">Desaprovar</button>
        `;
      } else if (ocorrencia.status === 'aprovada') {
        li.innerHTML += `<br><strong style="color: green;">Ocorrência aprovada</strong>`;
      } else if (ocorrencia.status === 'rejeitada') {
        li.innerHTML += `<br><strong style="color: red;">Ocorrência rejeitada</strong>`;
      }

      listaOcorrencias.appendChild(li);
    });
  }
});

// Funções para aprovar e rejeitar ocorrências por índice no array
function aprovarOcorrencia(index) {
  const ocorrencias = JSON.parse(localStorage.getItem('ocorrencias')) || [];
  if (ocorrencias[index]) {
    ocorrencias[index].status = 'aprovada';
    localStorage.setItem('ocorrencias', JSON.stringify(ocorrencias));
    alert('Ocorrência aprovada!');
    location.reload();
  }
}

function rejeitarOcorrencia(index) {
  const ocorrencias = JSON.parse(localStorage.getItem('ocorrencias')) || [];
  if (ocorrencias[index]) {
    ocorrencias[index].status = 'rejeitada';
    localStorage.setItem('ocorrencias', JSON.stringify(ocorrencias));
    alert('Ocorrência rejeitada!');
    location.reload();
  }
}
