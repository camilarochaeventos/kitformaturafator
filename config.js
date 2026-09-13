// ============================================
// CONFIGURAÇÕES DO SITE - EDITAR AQUI!
// ============================================

const CONFIG = {
    // INFORMAÇÕES DA ESCOLA
    escola: {
        nome: 'Colégio e Curso Fator',
        mensagemBoasVindas: `Olá, equipe do Colégio e Curso Fator!<br />
        É com imensa satisfação que apresentamos as propostas de artes para o 
        <strong>Kit Formatura 2026</strong>.<br /><br />
        Nossas ideias foram desenvolvidas com carinho e criatividade para tornar 
        a formatura dos seus alunos ainda mais especial. Você poderá sugerir 
        estilos de fontes, cores e ajustes para que tudo fique do jeito que a 
        escola sonhou.<br /><br />
        Vamos juntos construir um momento inesquecível!`
    },

    // TEMPO DE EXPERIÊNCIA
    experiencia: {
        anos: '10',
        texto: 'Há <strong>mais de 10 anos</strong> transformando sonhos em momentos inesquecíveis.'
    },

    // CONTATOS - LINKS CORRETOS!
    contatos: {
        whatsapp: 'https://wa.me/5521988666854', // WhatsApp da Camila
        instagram: 'https://instagram.com/camilarochacerimonial', // Instagram
        site: 'https://camilarochaeventos.com.br/' // Site da Camila
    },

    // ARQUIVO PDF
    pdf: {
        arquivo: 'proposta.pdf' // Substitua pelo nome do seu PDF, se for diferente
    },

    // TÍTULO DO SITE
    tituloPagina: 'Camila Rocha Eventos - Kit Formatura 2026'
};

// ============================================
// NÃO ALTERE DAQUI PARA BAIXO
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    document.title = CONFIG.tituloPagina;
    document.getElementById('nomeEscola').textContent = CONFIG.escola.nome;
    document.getElementById('mensagemBoasVindas').innerHTML = CONFIG.escola.mensagemBoasVindas;
    document.getElementById('mensagemAnos').innerHTML = CONFIG.experiencia.texto;
    document.getElementById('linkWhatsapp').href = CONFIG.contatos.whatsapp;
    document.getElementById('linkInstagram').href = CONFIG.contatos.instagram;
    document.getElementById('linkSite').href = CONFIG.contatos.site;
    window.CONFIG_PDF = CONFIG.pdf.arquivo;
});