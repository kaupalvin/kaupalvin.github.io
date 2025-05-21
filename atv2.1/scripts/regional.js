const data_regionals = []

function addRegionals() {
    const form = document.querySelector('#formRegional')
    const input_sigla = form.querySelector('input[name="sigla"]').value
    const input_cidade = form.querySelector('input[name="cidade"]').value
    const regional = {
        id: data_regionals.length + 1,
        sigla: input_sigla,
        cidade: input_cidade
    }
    data_regionals.push(regional);
    addTableregional(regional)
    addSelectregional(regional)
    form.reset();
}

function addTableregional(regional) {
    const table = document.querySelector('#table_regional tbody')
    const line = document.createElement('tr')
    const col_id = document.createElement('td')
    col_id.textContent = regional.id
    const col_sigla = document.createElement('td')
    col_sigla.textContent = regional.sigla
    const col_cidade = document.createElement('td')
    col_cidade.textContent = regional.cidade
    line.appendChild(col_id)
    line.appendChild(col_sigla)
    line.appendChild(col_cidade)
    table.appendChild(line)
}

function addSelectregional(regional) {
    const select = document.querySelector('#select_regional')
    const op = document.createElement("option")
    op.textContent = regional.sigla
    op.value = regional.id
    select.appendChild(op)
}