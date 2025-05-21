const data_agents = []

function addAgents() {
    const form = document.querySelector('#formAgent')
    const input_nome = form.querySelector('input[name="nome"]').value
    const input_regional = form.querySelector('select[name="regional"]').value
    const agent = {
        id: data_agents.length + 1,
        nome: input_nome,
        regional: input_regional
    }
    data_agents.push(agent);
    addTableagent(agent)
    addSelectagent(agent)
    form.reset();
}

function addTableagent(agent) {
    const table = document.querySelector('#table_agent tbody')
    const line = document.createElement('tr')
    const col_id = document.createElement('td')
    col_id.textContent = agent.id
    const col_nome = document.createElement('td')
    col_nome.textContent = agent.nome
    const col_regional = document.createElement('td')
    col_regional.textContent = agent.regional
    line.appendChild(col_id)
    line.appendChild(col_nome)
    line.appendChild(col_regional)
    table.appendChild(line)
}

function addSelectagent(agent) {
    const select = document.querySelector('#select_agent')
    const op = document.createElement("option")
    op.textContent = agent.nome
    op.value = agent.id
    select.appendChild(op)
}