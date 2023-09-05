//Modal
const incluirCarro = document.querySelector('#btn_incluirCarro')
const closeModalButton = document.querySelector('#close-modal')
const modal = document.querySelector('#modal')
const fade =  document.querySelector('#fade')

const toggleModal = ()=>{
    modal.classList.toggle('hide')
    fade.classList.toggle('hide')
}

[incluirCarro,closeModalButton,fade].forEach((el)=>{
    el.addEventListener('click',()=> toggleModal())
})

//Revenda de carros
const carros = document.querySelector('#carros')

//Carros no estoque

// const estoque = [
//  {
    
//     marca: 'fiat',
//     modelo: 'Brava',
//     ano: 1999,
//     valor: 7.000,
//     disponivel:false
// },
// {
    
//     marca: 'peugeot',
//     modelo: '206 soleil',
//     ano: 2003,
//     valor: 14.800,
//     disponivel: true
// },
// {
    
//     marca: 'chevrolet',
//     modelo: 'celta',
//     ano: 2004,
//     valor: 14.900,
//     disponivel:true
// }
// ]
//Botoes e funcionalidades


//Adicionando carros no estoque
// const adicionaCarros = (marca,modelo,ano,valor)=>{
//     estoque.push({ 
//         marca: marca,
//         modelo: modelo,
//         ano: ano,
//         valor: valor,
//         disponivel: true

//     })
// }
const btn_salvaVeiculo = document.querySelector('#salvarVeiculo')
btn_salvaVeiculo.addEventListener('click',(evt)=>{
    const estoque = []
    const montadora = document.querySelector('#montadora')
    const modelo = document.querySelector('#modelo')
    const ano = document.querySelector('#ano')
    const valor = document.querySelector('#valor')

    estoque.push({ 
        marca: montadora.value,
        modelo: modelo.value,
        ano: ano.value,
        valor: valor.value,
        disponivel: true
    })
    estoque.map((ele,chave)=>{

        const linha = document.createElement('tr')
        carros.appendChild(linha)
    
        const modelo = document.createElement('td')
        modelo.setAttribute('id',`carro${chave}`)
        modelo.innerHTML = ele.modelo
        linha.appendChild(modelo)
        const marca = document.createElement('td')
        marca.innerHTML = ele.marca
        linha.appendChild(marca)
    
        const ano = document.createElement('td')
        ano.innerHTML = ele.ano
        linha.appendChild(ano)
    
        const valor = document.createElement('td')
        valor.innerHTML = ele.valor
        linha.appendChild(valor)
    
    
        //Criando botao para excluir elemento(agora da tela)
        const excluir = document.createElement('img')
        excluir.setAttribute('src','./imagens/excluir.png')
        excluir.setAttribute('class','botoes')
        
        //Adicionando botao na div
        linha.appendChild(excluir)
    
        //criando botao para atulizar elemento
        const atualizar = document.createElement('img')
        atualizar.setAttribute('src','./imagens/atualizar.png')
        atualizar.setAttribute('class','botoes')
        
        //Adicionando botao na div
        linha.appendChild(atualizar)
    
        //Função que exclui o elemento
        excluir.addEventListener('click',(evt)=>{
            carros.removeChild(evt.target.parentNode)
            estoque.splice(estoque.indexOf(ele), 1)
            console.log(estoque)
        })
        
    })
})


//Atualiza disponibilidade do carro
const mudaDisponibilidadeDoCarro =(codCarro,disponibilidade)=>{
    estoque[codCarro].disponivel = disponibilidade
}

//escolha cliente
const carrinho = []
const opcaoDoCliente = 1

//Adiciona ao carrinho
const adcionaCarrinho = (opcaoDoCliente)=>{
    if(estoque[opcaoDoCliente].disponivel){
        carrinho.push(estoque[opcaoDoCliente])
        console.log('carro adicionado ao carrinho')
    }else{
        console.log('veiculo indisponivel')
    }
}

//Exclui veiculo do carrinho
const excluiDocarrinho = (opcaoDoCliente)=>{
    carrinho.splice(carrinho.indexOf(opcaoDoCliente), 1);
}

//Ao finalizar compra atualiza o estoque
const atualizandoEstoque = (carrinho)=>{
    for (const item of carrinho) {
        if(estoque[item] === carrinho[item]){
            estoque.splice(estoque.indexOf(item), 1);
        }
    }
}
//Cria elementos dinamicamente


// adcionaCarrinho(1)
// adcionaCarrinho(2)
// //excluiDocarrinho(2)
// atualizandoEstoque(carrinho)
// console.log('======================')
// console.log(estoque)
