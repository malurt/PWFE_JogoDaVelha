"use strict"

//VARIAVEL DA VEZ
var jogador = 1


//FUNCOES

    //esconder modal de modos de jogo
        const esconderModal = () => document.getElementById("conteiner-modal-modos-jogo").style.display = "none"
    
    //pegar elemento pelo ID
        const pegarElementoPeloId = (idElemento) => document.getElementById(idElemento)

    //destacando o jogador que pode jogar naquela rodada
        const destacaJogador = () => 
        {
            const nomeJogador1 =  document.getElementById("nome-usuario1")
            const nomeJogador2 =  document.getElementById("nome-usuario2")
            
            if(jogador == 1)
            {
               nomeJogador1.classList.add("destacado")

               if(nomeJogador2.classList.contains("destacado"))
               {
                   nomeJogador2.classList.remove("destacado")
               }
            }
            else if (jogador == 2)
            {
                nomeJogador2.classList.add("destacado")
               
               if(nomeJogador1.classList.contains("destacado"))
               {
                   nomeJogador1.classList.remove("destacado")
               }
            }

            else
            {
                if(nomeJogador2.classList.contains("destacado"))
               {
                   nomeJogador2.classList.remove("destacado")
               }
               else if(nomeJogador1.classList.contains("destacado"))
               {
                   nomeJogador1.classList.remove("destacado")
               }
            }
        }

    //selecionar um campo
        const selecionarCampo = (campo) => 
        {
            if (jogador == 1)
            {
                if(campo.classList.contains("white"))
                {
                    const novaImg = document.createElement("span")
                    novaImg.innerHTML = `close` // ícone x
                    // novaImg.src = "../src/imgs/x"
                    novaImg.classList.add("material-icons-outlined")
                    campo.appendChild(novaImg)
                    adicionaClasses(campo, "x")
                    jogador = 2 //inverte a cor que aparecerá no campo de jogo
                    destacaJogador()
                    verificarVitoria()
                }
                else
                {
                    alert("escolha um espaço vazio")
                }
            }
            
            else if (jogador == 2) 
            {
                if(campo.classList.contains("white"))
                {
                    const novaImg = document.createElement("span")
                    novaImg.innerHTML = `radio_button_unchecked` // ícone o
                    // novaImg.src = "../src/imgs/o"
                    novaImg.classList.add("material-icons-outlined")
                    campo.appendChild(novaImg)
                    adicionaClasses(campo, "o")
                    jogador = 1 //inverte a cor que aparecerá no campo de jogo
                    destacaJogador()
                    verificarVitoria()
                }
                else
                {
                    alert("escolha um espaço vazio")
                }
            }

            else
            {
                alert("comece um novo jogo! ;)")
            }
        }


    // adiciona classes às divs identificando a cor/jogador que a escolheu
        const adicionaClasses = (elemento, classe) =>
        {
            elemento.classList.remove("white")
            elemento.classList.add(classe)
        }


    //verifica se alguem venceu com a jogada feita
        const verificarVitoria = () =>
        {
            //primeira coluna da esquerda pra direita AZUL -> vitoria do jogador 1
            if (campoA.classList.contains("x") && campoD.classList.contains("x") && campoG.classList.contains("x"))
            {
                alert("jogador 1 venceu!!!")
                jogador = 0
            }

            //primeira coluna da esquerda pra direita VEMELHA -> vitoria do jogador 2
            else if (campoA.classList.contains("o") && campoD.classList.contains("o") && campoG.classList.contains("o") )
            {
                alert("jogador 2 venceu!!!")
                jogador = 0
            }

            //segunda coluna da esquerda pra direita (meio) AZUL - > vitoria jogador 1
            else if(campoB.classList.contains("x") && campoE.classList.contains("x") && campoH.classList.contains("x"))
            {
                alert("jogador 1 venceu!!!")
                jogador = 0
            }
            
            //segunda coluna da esquerda pra direita (meio) VERMELHA - > vitoria jogador 2
            else if(campoB.classList.contains("o") && campoE.classList.contains("o") && campoH.classList.contains("o"))
            {
                alert("jogador 2 venceu!!!")
                jogador = 0
            }

            //terceira coluna da esquerda pra direita AZUL - > vitoria jogador 1
            else if(campoC.classList.contains("x") && campoF.classList.contains("x") && campoI.classList.contains("x"))
            {
                alert("jogador 1 venceu!!!")
                jogador = 0
            }

            //terceira coluna da esquerda pra direita VERMELHO - > vitoria jogador 2
            else if(campoC.classList.contains("o") && campoF.classList.contains("o") && campoI.classList.contains("o"))
            {
                alert("jogador 2 venceu!!!")
                jogador = 0
            }

            //primeira linha de cima para baixo AZUL - > vitoria jogador 1
            else if(campoA.classList.contains("x") && campoB.classList.contains("x") && campoC.classList.contains("x"))
            {
                alert("jogador 1 venceu!!!")
                jogador = 0
            }

            //primeira linha de cima para baixo VERMELHA - > vitoria jogador 2
            else if(campoA.classList.contains("o") && campoB.classList.contains("o") && campoC.classList.contains("o"))
            {
                alert("jogador 2 venceu!!!")
                jogador = 0
            }

            //segunda linha de cima para baixo AZUL - > vitoria jogador 1
            else if(campoD.classList.contains("x") && campoE.classList.contains("x") && campoF.classList.contains("x"))
            {
                alert("jogador 1 venceu!!!")
                jogador = 0
            }

            //segunda linha de cima para baixo VERMELHA - > vitoria jogador 2
            else if(campoD.classList.contains("o") && campoE.classList.contains("o") && campoF.classList.contains("o"))
            {
                alert("jogador 2 venceu!!!")
                jogador = 0
            }

            //terceira linha de cima para baixo AZUL - > vitoria jogador 1
            else if(campoG.classList.contains("x") && campoH.classList.contains("x") && campoI.classList.contains("x"))
            {
                alert("jogador 1 venceu!!!")
                jogador = 0
            }

            //terceira linha de cima para baixo VERMELHA - > vitoria jogador 2
            else if(campoG.classList.contains("o") && campoH.classList.contains("o") && campoI.classList.contains("o"))
            {
                alert("jogador 2 venceu!!!")
                jogador = 0
            }

            //diagonal esquerda pra direita AZUL - > vitoria jogador 1
            else if(campoA.classList.contains("x") && campoE.classList.contains("x") && campoI.classList.contains("x"))
            {
                alert("jogador 1 venceu!!!")
                jogador = 0
            }
            
            //diagonal esquerda pra direita VEMELHO - > vitoria jogador 2
            else if(campoA.classList.contains("o") && campoE.classList.contains("o") && campoI.classList.contains("o"))
            {
                alert("jogador 2 venceu!!!")
                jogador = 0
            }

            //diagonal direita pra esquerda AZUL - > vitoria jogador 1
            else if(campoC.classList.contains("x") && campoE.classList.contains("x") && campoG.classList.contains("x"))
            {
                alert("jogador 1 venceu!!!")
                jogador = 0
            }

            //diagonal direita pra esquerda VERMELHA - > vitoria jogador 1
            else if(campoC.classList.contains("o") && campoE.classList.contains("o") && campoG.classList.contains("o"))
            {
                alert("jogador 2 venceu!!!")
                jogador = 0
            }

            // se nenhum campo for branco, mas nenhuma vitória for declarada
            else if (
                    !campoA.classList.contains("white") &&
                    !campoB.classList.contains("white") &&
                    !campoC.classList.contains("white") && 
                    !campoD.classList.contains("white") && 
                    !campoE.classList.contains("white") && 
                    !campoF.classList.contains("white") && 
                    !campoG.classList.contains("white") && 
                    !campoH.classList.contains("white") && 
                    !campoI.classList.contains("white"))
            {
                alert("Deu Velha!")
                jogador = 0
            }
        }
    
    //reinicia o jogo limpando as divs e determinando o jogador como 1
        const reiniciarJogo = () =>
        {
           const campos = document.getElementsByClassName("campo-hash")
           console.log(campos)

           const arrCampos = Array.from(campos)
           arrCampos.forEach(campo => 
            {
                while(campo.firstChild)
                {
                    campo.removeChild(campo.firstChild)
                }
                
               if (campo.classList.contains("x"))
               {
                    removeClasse(campo, "x")
                    
               }
               else if (campo.classList.contains("o"))
               {
                    removeClasse(campo, "o")
               }
            })

            jogador = 1
            destacaJogador()  
        }

    // adiciona classes às divs identificando a cor/jogador que a escolheu
    const removeClasse = (elemento, classe) =>
    {
        elemento.classList.remove(classe)
        elemento.classList.add("white")
    }


//EVENTOS 

    //Clique no campo A
        const campoA = pegarElementoPeloId("campo-A")
        campoA.addEventListener("click", function(){selecionarCampo(campoA)})

    //Clique no campo B
        const campoB = pegarElementoPeloId("campo-B")
        campoB.addEventListener("click", function(){selecionarCampo(campoB)})

    //Clique no campo C
        const campoC = pegarElementoPeloId("campo-C")
        campoC.addEventListener("click", function(){selecionarCampo(campoC)})

    //Clique no campo D
        const campoD = pegarElementoPeloId("campo-D")
        campoD.addEventListener("click", function(){selecionarCampo(campoD)})

    //Clique no campo E
        const campoE = pegarElementoPeloId("campo-E")
        campoE.addEventListener("click", function(){selecionarCampo(campoE)})

    //Clique no campo F
        const campoF = pegarElementoPeloId("campo-F")
        campoF.addEventListener("click", function(){selecionarCampo(campoF)})

    //Clique no campo G
        const campoG = pegarElementoPeloId("campo-G")
        campoG.addEventListener("click", function(){selecionarCampo(campoG)})

    //Clique no campo H
        const campoH = pegarElementoPeloId("campo-H")
        campoH.addEventListener("click", function(){selecionarCampo(campoH)})

    //Clique no campo I
        const campoI = pegarElementoPeloId("campo-I")
        campoI.addEventListener("click", function(){selecionarCampo(campoI)})

    //Clique no reiniciar
        const botaoReiniciar = pegarElementoPeloId("botao-reiniciar")
        botaoReiniciar.addEventListener("click", reiniciarJogo)
