const data_reports = []

function addReports() {
    const form = document.querySelector('#formReport')
    const input_data = form.querySelector('input[name="data"]').value
    const input_assunto = form.querySelector('select[name="assunto"]').value
    const input_agente = form.querySelector('select[name="agente"]').value
    const assunto = data_subjects.find(s => s.id == input_assunto)
    const agente = data_agents.find(a => a.id == input_agente)
    const report = {
        id: data_reports.length + 1,
        data: input_data,
        assunto: assunto.nome,
        agente: agente.nome
    }
    data_reports.push(report)
    addTableReport(report)
    form.reset()
}

function addTableReport(report) {
    const table = document.querySelector('#table_report tbody')
    const line = document.createElement('tr')
    const col_id = document.createElement('td')
    col_id.textContent = report.id
    const col_data = document.createElement('td')
    col_data.textContent = report.data
    const col_assunto = document.createElement('td')
    col_assunto.textContent = report.assunto
    const col_agente = document.createElement('td')
    col_agente.textContent = report.agente
    line.appendChild(col_id)
    line.appendChild(col_data)
    line.appendChild(col_assunto)
    line.appendChild(col_agente)
    table.appendChild(line)
}