async function visualizarinformacoesGlobais(){
    const res = await fetch (url)
const dados = await resizeTo.json()
const paragrafo = document.createElement('p')
paragrafo.classList.add('graficos-container texto')
paragrafo.innerHTML = 'Você sabia que o mundo tem 
${dados.total_pessoas_mundo} de pessoa e 
estão conctadas em algumas rede social e passam em média '
}
    
}