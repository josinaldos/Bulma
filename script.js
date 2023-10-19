const btn = document.querySelector('.modalBtn')
const btnFechar = document.querySelector('.btnFechar')

//fazendo evento de clique
btn.addEventListener('click',abrirModal)

btnFechar.addEventListener('click',abrirModal)


function abrirModal(){
    const modal = document.querySelector('.modal')
    const modalAtual = modal.style.display

    if(modalAtual == 'block'){
        modal.style.display = 'none'
    } else{
        modal.style.display = 'block'
    }
    

}



