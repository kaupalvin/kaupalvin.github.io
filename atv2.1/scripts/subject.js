const data_subjects = []

function addSubjects() {
    const form = document.querySelector('#formSubject')
    const input_nome = form.querySelector('input[name="nome"]').value
    const subject = {
        id: data_subjects.length + 1,
        nome: input_nome,
    }
    data_subjects.push(subject);
    addTableSubject(subject)
    addSelectSubject(subject)
    form.reset();
}

function addTableSubject(subject) {
    const table = document.querySelector('#table_subject tbody')
    const line = document.createElement('tr')
    const col_id = document.createElement('td')
    col_id.textContent = subject.id
    const col_nome = document.createElement('td')
    col_nome.textContent = subject.nome
    line.appendChild(col_id)
    line.appendChild(col_nome)
    table.appendChild(line)
}

function addSelectSubject(subject) {
    const select = document.querySelector('#select_subject')
    const op = document.createElement("option")
    op.textContent = subject.nome
    op.value = subject.id
    select.appendChild(op)
}