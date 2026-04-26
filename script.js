/**
 * CONFIGURAÇÕES DE LOGIN
 */
const CREDENCIAIS_VALIDAS = {
    usuario: "28161954810",
    senha: "131272"
};

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    if (usernameInput === CREDENCIAIS_VALIDAS.usuario && passwordInput === CREDENCIAIS_VALIDAS.senha) {
        showDashboard();
    } else {
        alert("Usuário ou senha incorretos.");
    }
});

function showDashboard() {
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('dashboardContainer').style.display = 'block';
    // Mantenha o CPF ou TIA conforme configurado no HTML pelo usuário
}

function logout() {
    document.getElementById('dashboardContainer').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'block';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}

/**
 * EXIBIÇÃO DE CONTEÚDO DAS SEÇÕES
 */
function showSectionContent(section) {
    const overlay = document.getElementById('systemOverlay');
    const loader = document.getElementById('loader');
    const contentArea = document.getElementById('sectionContentArea');
    const btnBack = document.getElementById('btnBack');

    overlay.style.display = 'flex';
    loader.style.display = 'block';
    contentArea.innerHTML = '';
    btnBack.style.display = 'none';

    // Simula um pequeno carregamento antes de mostrar o conteúdo
    setTimeout(() => {
        loader.style.display = 'none';
        btnBack.style.display = 'inline-block';
        
        switch(section) {
            case 'aulas':
                contentArea.innerHTML = `
                    <h2>Setor de Aulas</h2>
                    <div class="empty-message">
                        "Estamos preparando tudo pra você e em breve seus conteúdos serão exibidos aqui."
                    </div>
                `;
                break;
            case 'atendimento':
                contentArea.innerHTML = `
                    <h2>Canais de Atendimento</h2>
                    <ul class="content-list">
                        <li><strong>Telefone Geral</strong><p>(11) 2114-8000</p></li>
                        <li><strong>Atendimento Financeiro (AFA)</strong><p>(11) 2766-7000 (Opção 1)</p></li>
                        <li><strong>E-mail Acadêmico (CGA)</strong><p>cga@mackenzie.br</p></li>
                        <li><strong>E-mail Financeiro</strong><p>afa@mackenzie.br</p></li>
                        <li><strong>Horário de Funcionamento</strong><p>Segunda a Sexta: 08:00 às 20:00</p></li>
                        <li><strong>Suporte Técnico</strong><p>gerti.suporte@mackenzie.br</p></li>
                    </ul>
                `;
                break;
            case 'polo':
                contentArea.innerHTML = `
                    <h2>Polo Higienópolis</h2>
                    <ul class="content-list">
                        <li><strong>Endereço</strong><p>Rua da Consolação, 930 - Higienópolis, São Paulo - SP</p></li>
                        <li><strong>CEP</strong><p>01302-907</p></li>
                        <li><strong>Referência</strong><p>Próximo ao Metrô Higienópolis-Mackenzie (Linha 4-Amarela)</p></li>
                        <li><strong>Infraestrutura</strong><p>Laboratórios de informática, Biblioteca Central e Auditórios.</p></li>
                    </ul>
                `;
                break;
            case 'calendario':
                contentArea.innerHTML = `
                    <h2>Calendário Acadêmico 2026</h2>
                    <ul class="content-list">
                        <li><strong>15/02/2026</strong><p>Encontro de Boas-vindas (Auditório Ruy Barbosa)</p></li>
                        <li><strong>10/03/2026</strong><p>Dinâmica em Grupo: Inovação e Carreira</p></li>
                        <li><strong>22/04/2026</strong><p>Teste de Conhecimento I: Nivelamento de Área</p></li>
                        <li><strong>15/05/2026</strong><p>Mackenzie Day - Festividade e Integração</p></li>
                        <li><strong>05/06/2026</strong><p>Seminário Interdisciplinar de Ciência da Computação</p></li>
                        <li><strong>20/06/2026</strong><p>Encerramento do Semestre e Avaliações Finais</p></li>
                    </ul>
                `;
                break;
            case 'financeiro':
                contentArea.innerHTML = `
                    <h2>Extrato Financeiro</h2>
                    
                    <div class="finance-year-header">2026 <span>Ano Atual</span></div>
                    <div class="payment-item">
                        <div class="payment-info">
                            <span class="payment-month">Fevereiro</span>
                            <span class="payment-value">R$ 1.540,00</span>
                        </div>
                        <span class="status-paid">PAGO</span>
                    </div>
                    <div class="payment-item">
                        <div class="payment-info">
                            <span class="payment-month">Janeiro</span>
                            <span class="payment-value">R$ 1.540,00</span>
                        </div>
                        <span class="status-paid">PAGO</span>
                    </div>

                    <div class="finance-year-header">2025 <span>Histórico</span></div>
                    <div class="payment-item">
                        <div class="payment-info">
                            <span class="payment-month">Dezembro</span>
                            <span class="payment-value">R$ 1.480,00</span>
                        </div>
                        <span class="status-paid">PAGO</span>
                    </div>
                    <div class="payment-item">
                        <div class="payment-info">
                            <span class="payment-month">Novembro</span>
                            <span class="payment-value">R$ 1.480,00</span>
                        </div>
                        <span class="status-paid">PAGO</span>
                    </div>
                    <div class="payment-item">
                        <div class="payment-info">
                            <span class="payment-month">Outubro</span>
                            <span class="payment-value">R$ 1.480,00</span>
                        </div>
                        <span class="status-paid">PAGO</span>
                    </div>
                    <p style="text-align: center; font-size: 0.7rem; color: #999; margin-top: 10px;">Exibindo apenas os últimos lançamentos.</p>
                `;
                break;
        }
    }, 1500);
}

function closeSystemOverlay() {
    document.getElementById('systemOverlay').style.display = 'none';
}

/**
 * CARTEIRINHA
 */
function openCard() {
    const overlay = document.getElementById('idCardOverlay');
    overlay.style.display = 'flex';
}

function closeCard() {
    const overlay = document.getElementById('idCardOverlay');
    overlay.style.display = 'none';
    document.getElementById('extraDetails').style.display = 'none';
    document.getElementById('btnDetails').innerText = '▼ EXPANDIR DETALHES';
}

function toggleDetails() {
    const extra = document.getElementById('extraDetails');
    const btn = document.getElementById('btnDetails');
    
    if (extra.style.display === 'none') {
        extra.style.display = 'block';
        btn.innerText = '▲ RECOLHER DETALHES';
    } else {
        extra.style.display = 'none';
        btn.innerText = '▼ EXPANDIR DETALHES';
    }
}
