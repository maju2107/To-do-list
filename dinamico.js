 // Função para adicionar uma nova tarefa à lista

  function adicionarTarefa() {
    // Obtém o nome da tarefa do input com id "fname"

    const tarefa = document.getElementById('fname').value;
    
    // Verifica se o nome da tarefa não está vazio

    if (tarefa.trim() !== "") {
        // Cria um elemento li com o nome da tarefa

        const li = document.createElement('li');
        li.className = 'todo-item';
        li.innerHTML = `
            <span class="tarefa-texto">${tarefa}</span>
            <div class="todo-buttons">
                <button aria-label="Botão de editar tarefa"   onclick="editarTarefa(this)" class= "editar">Editar</button>
                <button aria-label="Botão de favoritar tarefa" onclick="marcarFavorito(this)" class="botaofavorito">Favoritar</button>
                 <button aria-label="Botão de excluir tarefa"  onclick="excluirTarefa(this)" id="excluir">X</button>
            </div>
        `;
        
        // Adiciona o elemento li na lista

        document.getElementById('lista').appendChild(li);

        // Limpa o campo de input após adicionar a tarefa

        document.getElementById('fname').value = "";
    } else {
        // Alerta o usuário para digitar uma tarefa válida

        alert("Digite uma tarefa válida.");
    }
}

// Função para editar uma tarefa existente

function editarTarefa(button) {
    // Obtém o elemento li da tarefa

    const li = button.parentElement.parentElement;
    const tarefaTexto = li.querySelector('.tarefa-texto');

    // Solicita a nova tarefa ao usuário

    const novaTarefa = prompt("Edite a tarefa:", tarefaTexto.textContent);
    if (novaTarefa !== null && novaTarefa.trim() !== "") {
        // Atualiza o texto da tarefa

        tarefaTexto.textContent = novaTarefa;
    }
}

// Função para excluir uma tarefa da lista

function excluirTarefa(button) {
    // Remove o elemento li da tarefa

    const li = button.parentElement.parentElement;
    li.remove();
}

// Função para marcar/desmarcar uma tarefa como favorita

function marcarFavorito(button) {
    // Alterna a classe 'favorite' na tarefa

    const li = button.parentElement.parentElement;
    li.classList.toggle('favorita');
    // Reordena as tarefas para que as favoritas fiquem no topo

    atualizarOrdemDasTarefas();
}

// Função para reordenar as tarefas, colocando as favoritas no topo

function atualizarOrdemDasTarefas() {
    const lista = document.getElementById('lista');
    const tarefas = Array.from(lista.children);

    // Separa as tarefas em favoritas e não-favoritas

    const favoritas = tarefas.filter(tarefa => tarefa.classList.contains('favorita'));
    const naoFavoritas = tarefas.filter(tarefa => !tarefa.classList.contains('favorita'));
    
    // Limpa a lista e adiciona as tarefas na nova ordem

    lista.innerHTML = '';
    favoritas.forEach(tarefa => lista.appendChild(tarefa));
    naoFavoritas.forEach(tarefa => lista.appendChild(tarefa));
}

// Alterna Modo Claro e Modo Escuro
function ModoClaroEscuro() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
