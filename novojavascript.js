// Função para adicionar uma nova tarefa à lista
function adicionarTarefa() {
    var tarefa = document.getElementById('fname').value;

    if (tarefa.trim() !== "") {
        var li = document.createElement('li');
        li.className = 'todo-item';
        li.innerHTML = `
            <span class="tarefa-texto">${tarefa}</span>
            <div class="todo-buttons">
                <button aria-label="Botão de editar tarefa" onclick="editarTarefa(this)" class="editar">Editar</button>
                <button aria-label="Botão de favoritar tarefa" onclick="marcarFavorito(this)" class="botaofavorito">Favoritar</button>
                <input type="checkbox" onclick="concluir(this)"> Concluir
                <button aria-label="Botão de excluir tarefa" onclick="excluirTarefa(this)" id="excluir">X</button>
            </div>
        `;
        
        document.getElementById('lista').appendChild(li);
        document.getElementById('fname').value = "";
    } else {
        alert("Digite uma tarefa válida.");
    }
}

// Função para editar uma tarefa existente
function editarTarefa(button) {
    const li = button.parentElement.parentElement;
    const tarefaTexto = li.querySelector('.tarefa-texto');
    const novaTarefa = prompt("Edite a tarefa:", tarefaTexto.textContent);
    
    if (novaTarefa !== null && novaTarefa.trim() !== "") {
        tarefaTexto.textContent = novaTarefa;
    }
}

// Função para excluir uma tarefa da lista
function excluirTarefa(button) {
    const li = button.parentElement.parentElement;
    li.remove();
}

// Função para marcar/desmarcar uma tarefa como favorita
function marcarFavorito(button) {
    const li = button.parentElement.parentElement;
    li.classList.toggle('favorita');
    atualizarOrdemDasTarefas();
}

// Função para reordenar as tarefas, colocando as favoritas no topo
function atualizarOrdemDasTarefas() {
    const lista = document.getElementById('lista');
    const tarefas = Array.from(lista.children);

    const favoritas = tarefas.filter(tarefa => tarefa.classList.contains('favorita'));
    const naoFavoritas = tarefas.filter(tarefa => !tarefa.classList.contains('favorita'));
    
    lista.innerHTML = '';
    favoritas.forEach(tarefa => lista.appendChild(tarefa));
    naoFavoritas.forEach(tarefa => lista.appendChild(tarefa));
}

// Função para alternar Modo Claro e Modo Escuro
function ModoClaroEscuro() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

// Função para marcar a tarefa como concluída
function concluir(checkbox) {
    const li = checkbox.parentElement.parentElement;
    
    if (checkbox.checked) {
        li.classList.add('concluida');
    } else {
        li.classList.remove('concluida');
    }
}

// Função para mostrar todas as tarefas
function mostrarTodasTarefas() {
    const tarefas = document.querySelectorAll('.todo-item');
    tarefas.forEach(tarefa => tarefa.style.display = 'block'); // Exibe todas as tarefas
}

// Função para mostrar apenas as tarefas concluídas
function mostrarTarefasConcluidas() {
    const tarefas = document.querySelectorAll('.todo-item');
    tarefas.forEach(tarefa => {
        if (tarefa.classList.contains('concluida')) {
            tarefa.style.display = 'block'; // Exibe tarefas concluídas
        } else {
            tarefa.style.display = 'none'; // Esconde tarefas não concluídas
        }
    });
}

// Função para mostrar apenas as tarefas não concluídas
function mostrarTarefasNaoConcluidas() {
    const tarefas = document.querySelectorAll('.todo-item');
    tarefas.forEach(tarefa => {
        if (!tarefa.classList.contains('concluida')) {
            tarefa.style.display = 'block'; // Exibe tarefas não concluídas
        } else {
            tarefa.style.display = 'none'; // Esconde tarefas concluídas
        }
    });
}