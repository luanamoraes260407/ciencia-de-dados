async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/guilhermeomrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const res = await fetch(url)
  const dados = await res.json()

  vonsole.log(dados)
  }

  quantidadeUsuarios()