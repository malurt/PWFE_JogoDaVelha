"use strict"

//VARIAVEL DA VEZ, DO TIPO E DO NIVEL DE DIFICULDADE
var jogador = 1

var jogada = 1

var tipoJogo = ""

var nivelDificuldade = ""

//FUNCOES

    //esconder modal de modos de jogo
        const esconderModal = (modal) => document.querySelector(`.${modal}`).style.display = "none"
    
    //pegar elemento pelo ID
        const pegarElementoPeloId = (idElemento) => document.getElementById(idElemento)

    //destacando o jogador que pode jogar naquela rodada
        const destacaJogador = () => 
        {
            const nomeJogador1 =  document.getElementById("nome-usuario1")
            const nomeJogador2 =  document.getElementById("nome-usuario2")
            const nomeMaquina =  document.getElementById("nome-maquina")
            
            if(jogador == 1)
            {
               nomeJogador1.classList.add("destacado")

               if(nomeJogador2.classList.contains("destacado"))
               {
                   nomeJogador2.classList.remove("destacado")
               }
               if(nomeMaquina.classList.contains("destacado"))
               {
                    nomeMaquina.classList.remove("destacado")
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
            // else if (jogador == 2 && tipoJogo == "player-player")
            // {
            //     nomeJogador2.classList.add("destacado")
               
            //    if(nomeJogador1.classList.contains("destacado"))
            //    {
            //        nomeJogador1.classList.remove("destacado")
            //    }
            // }
            // else if (jogador == 2 && tipoJogo == "player-maquina")
            // {
            //     nomeMaquina.classList.add("destacado")
               
            //    if(nomeJogador1.classList.contains("destacado"))
            //    {
            //        nomeJogador1.classList.remove("destacado")
            //    }
            // }

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
                    implementaIconeJogadaNoCampo(campo, "x")
                    
                    if(!verificarVitoria())
                    {
                        jogada = jogada+1
                        definirProximoJogador()
                        destacaJogador()
                    }
                    
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
                    implementaIconeJogadaNoCampo(campo, "o")
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

        const fazerJogadaAleatoria = (arrayPossibilidades) => 
        {
            var arrayCampos = arrayPossibilidades;
            
            var encontrou = false

            while(!encontrou)
            {
                const idAleatorio = arrayCampos[Math.floor(Math.random() * arrayCampos.length)]
                var campoEscolhido = document.getElementById(idAleatorio)

                console.log(idAleatorio)

                if(campoEscolhido.classList.contains("white"))
                {
                    implementaIconeJogadaNoCampo(campoEscolhido, "o")
                    jogador = 1 //inverte a cor que aparecerá no campo de jogo
                    destacaJogador()
                    verificarVitoria()
                    
                    console.log("encontrou campo vazio. bolinha vai aparecer")
                    encontrou = true
                }
                else
                {
                    verificarVitoria()
                    console.log("não encontrou campo vazio. bolinha não vai aparecer")
                }
            }    
        }
        const implementaIconeJogadaNoCampo = (campoReceptor, icone) =>
        {
            const novaImg = document.createElement("span")
            if(icone == "o")
            {
                novaImg.innerHTML = `radio_button_unchecked` // ícone o
            }
            else
            {
                novaImg.innerHTML =  `close` // ícone x
            }
            novaImg.classList.add("material-icons-outlined")
            campoReceptor.appendChild(novaImg)

            //chamando função que configura a div colocando nela a classe
            adicionaClasses(campoReceptor, icone)
        }

        const fazerJogadaMaquina = () =>
        {
            var possibilidadesJogadaMaquina = ["campo-A", "campo-B", "campo-C", "campo-D", "campo-E", "campo-F", "campo-G", "campo-H", "campo-I"];

            if(nivelDificuldade == "facil")
            {  
                fazerJogadaAleatoria(possibilidadesJogadaMaquina) 
            }
            else if (nivelDificuldade == "medio")
            {
                //Possibilidades horizontais
                if(verificaCampos(campoA,campoB,campoC, "x"))
                {
                }
                else if(verificaCampos(campoD,campoE,campoF, "x"))
                {
                }
                else if(verificaCampos(campoG,campoH,campoI, "x"))
                {   
                }
                else if(verificaCampos(campoA,campoD,campoG, "x"))
                {   
                }
                else if(verificaCampos(campoB,campoE,campoH, "x"))
                {   // console.log("Oi, vc entrou aqui")
                    
                }
                else if(verificaCampos(campoC,campoF,campoI, "x"))
                {   
                }
                else if(verificaCampos(campoA,campoE,campoI, "x"))
                {   
                }
                else if(verificaCampos(campoC,campoE,campoG, "x"))
                {   
                }
                else 
                {  
                    fazerJogadaAleatoria(possibilidadesJogadaMaquina)
                }

            }
            else if (nivelDificuldade == "dificil")
            {                
                //primeira jogada - máquina
                if (jogada == 2) 
                {                    
                    //VERIFICANDO SE A PRIMEIRA JOGADA DO JOGADOR FOI NO MEIO
                    if(campoE.classList.contains("x"))
                    {
                        possibilidadesJogadaMaquina = ["campo-A", "campo-C", "campo-G", "campo-I"]
                        fazerJogadaAleatoria(possibilidadesJogadaMaquina)
                    }
                    
                    //VERIFICANDO SE A PRIMEIRA JOGADA DO JOGADOR FOI NAS QUINAS
                    else if(campoA.classList.contains("x") || campoC.classList.contains("x") || campoG.classList.contains("x") ||campoI.classList.contains("x"))
                    {
                        possibilidadesJogadaMaquina = ["campo-E"]
                        fazerJogadaAleatoria(possibilidadesJogadaMaquina)
                    }

                    //VERIFICANDO SE A PRIMEIRA JOGADA DO JOGADOR FOI NOS ESPAÇOS CENTRAIS AO REDOR DO CENTRO
                    else
                    {
                        //VERIFICANDO SE O CAMPO CENTRAL FOI O B
                        if (campoB.classList.contains("x"))
                        {
                            possibilidadesJogadaMaquina = ["campo-C"]
                            fazerJogadaAleatoria(possibilidadesJogadaMaquina)
                        }
                        else if (campoD.classList.contains("x"))
                        {
                            possibilidadesJogadaMaquina = ["campo-G"]
                            fazerJogadaAleatoria(possibilidadesJogadaMaquina)
                        }
                        else if (campoF.classList.contains("x"))
                        {
                            possibilidadesJogadaMaquina = ["campo-I"]
                            fazerJogadaAleatoria(possibilidadesJogadaMaquina)
                        }
                        else if (campoH.classList.contains("x"))
                        {
                            possibilidadesJogadaMaquina = ["campo-I"]
                            fazerJogadaAleatoria(possibilidadesJogadaMaquina)
                        }
                    }

                }
                else
                {
                    var jogou = false

                    if(jogada == 4)
                    {
                        if(verificaCentros(campoF, campoB, campoG))
                        {
                            jogou = true
                        }
                        else if (verificaCentros(campoB, campoD, campoI))
                        {
                            // console.log("Entrou verifica centro 1")
                            jogou = true
                        }
                        else if (verificaCentros(campoH, campoF, campoD))
                        {   
                            // console.log("Entrou verifica centro 2")
                            jogou = true
                        }
                        else if (verificaCentros(campoD, campoH, campoF))
                        {
                            // console.log("Entrou verifica centro 3")
                            jogou = true
                        }
                    }

                    if(jogou == false)
                    {   
                        if(verificaCampos(campoA,campoB,campoC, "o"))
                        {
                        }
                        else if(verificaCampos(campoD,campoE,campoF, "o"))
                        {                       
                        }
                        else if(verificaCampos(campoG,campoH,campoI, "o"))
                        {                            
                        }
                        else if(verificaCampos(campoA,campoD,campoG, "o"))
                        {                            
                        }
                        else if(verificaCampos(campoB,campoE,campoH, "o"))
                        {                            
                        }
                        else if(verificaCampos(campoC,campoF,campoI, "o"))
                        {                            
                        }
                        else if(verificaCampos(campoA,campoE,campoI, "o"))
                        {                            
                        }
                        else if(verificaCampos(campoC,campoE,campoG, "o"))
                        {                            
                        }


                        else if(verificaCampos(campoA,campoB,campoC, "x"))
                        {
                        }
                        else if(verificaCampos(campoD,campoE,campoF, "x"))
                        {
                        }
                        else if(verificaCampos(campoG,campoH,campoI, "x"))
                        {                            
                        }
                        else if(verificaCampos(campoA,campoD,campoG, "x"))
                        {                            
                        }
                        else if(verificaCampos(campoB,campoE,campoH, "x"))
                        {
                            console.log("Oi, vc entrou aqui")
                            
                        }
                        else if(verificaCampos(campoC,campoF,campoI, "x"))
                        {
                            
                        }
                        else if(verificaCampos(campoA,campoE,campoI, "x"))
                        {
                        }
                        else if(verificaCampos(campoC,campoE,campoG, "x"))
                        {
                        }
                        else 
                        {
                            console.log("oiuj")
                            fazerJogadaAleatoria(possibilidadesJogadaMaquina)      
                        }

                    }
                    
                }

            }
            jogador = 1 //inverte a cor que aparecerá no campo de jogo
            jogada = jogada+1 
            destacaJogador()
            verificarVitoria()
        }

        const verificaCampos = (campo1, campo2, campo3, iconeVerificacao) =>
        {
            var campoRecebeIcone = ""
            var jogou = false

            if (campo1.classList.contains(`${iconeVerificacao}`) && campo2.classList.contains(`${iconeVerificacao}`) && campo3.classList.contains("white"))
            {
                campoRecebeIcone = campo3
                jogou = true
            }
            else if (campo1.classList.contains(`${iconeVerificacao}`) && campo3.classList.contains(`${iconeVerificacao}`) && campo2.classList.contains("white"))
            {
                campoRecebeIcone = campo2
                jogou = true
                // console.log("Oi, vc entrou aqui")
            } 
            else if (campo2.classList.contains(`${iconeVerificacao}`) && campo3.classList.contains(`${iconeVerificacao}`) && campo1.classList.contains("white"))
            {
                campoRecebeIcone = campo1
                jogou = true
            }

            if(jogou == true)
            {
                implementaIconeJogadaNoCampo(campoRecebeIcone, "o")
                return jogou
            }
            else
            {
                return jogou
            }
            
        }

        const verificaCentros = (campoCentral1, campoCentral2, campoReceptorIcone) =>
        {
            var jogou = false

            if (campoCentral1.classList.contains("x") && campoCentral2.classList.contains("x") && campoReceptorIcone.classList.contains("white"))
            {
                implementaIconeJogadaNoCampo(campoReceptorIcone, "o")

                
                jogou = true
                return jogou

            }
            else
            {
                return jogou
            }
        }

        const definirDificuldadeJogo = (idSelect) =>  
        {
            const selectDificuldadeJogo = pegarElementoPeloId(idSelect)
            const opcaoSelecionada = selectDificuldadeJogo.options[selectDificuldadeJogo.selectedIndex].value
            if (opcaoSelecionada == 'facil')
            {
                nivelDificuldade = "facil"
            }
            else if (opcaoSelecionada == 'medio')
            {
                nivelDificuldade = "medio"
            }
            else 
            {
                nivelDificuldade = "dificil"
            }
        }

        const definirProximoJogador = () =>
        {
            if(tipoJogo == "player-maquina")
            {
                console.log("Chamando a jogada da máquina no definir proximo jogador")
                setTimeout(fazerJogadaMaquina, 1000)
                jogador = 1;
            }
            else
            {
                jogador = 2;
            }
        }

    // adiciona classes às divs identificando a cor/jogador que a escolheu
        const adicionaClasses = (elemento, classe) =>
        {
            elemento.classList.remove("white")
            elemento.classList.add(classe)
        }

    //exibir modal de vitória
        const exibirModal = () => document.getElementById("conteiner-vitoria").style.display = "flex"

    //verifica se alguem venceu com a jogada feita
        const verificarVitoria = () =>
        {
            const divVitoria = pegarElementoPeloId("vitoria")
            //primeira coluna da esquerda pra direita AZUL -> vitoria do jogador 1
            if (campoA.classList.contains("x") && campoD.classList.contains("x") && campoG.classList.contains("x"))
            {
                exibirModal()
                implementaIconeJogadaNoCampo(divVitoria, "x")
                jogador = 0
                return true
            }

            //primeira coluna da esquerda pra direita VEMELHA -> vitoria do jogador 2
            else if (campoA.classList.contains("o") && campoD.classList.contains("o") && campoG.classList.contains("o") )
            {
                exibirModal()
                implementaIconeJogadaNoCampo(divVitoria, "o")
                jogador = 0
                return true
            }

            //segunda coluna da esquerda pra direita (meio) AZUL - > vitoria jogador 1
            else if(campoB.classList.contains("x") && campoE.classList.contains("x") && campoH.classList.contains("x"))
            {
                exibirModal()
                implementaIconeJogadaNoCampo(divVitoria, "x")
                jogador = 0
                return true
            }
            
            //segunda coluna da esquerda pra direita (meio) VERMELHA - > vitoria jogador 2
            else if(campoB.classList.contains("o") && campoE.classList.contains("o") && campoH.classList.contains("o"))
            {
                exibirModal()
                implementaIconeJogadaNoCampo(divVitoria, "o")
                jogador = 0
                return true
            }

            //terceira coluna da esquerda pra direita AZUL - > vitoria jogador 1
            else if(campoC.classList.contains("x") && campoF.classList.contains("x") && campoI.classList.contains("x"))
            {
                exibirModal()
                implementaIconeJogadaNoCampo(divVitoria, "x")
                jogador = 0
                return true
            }

            //terceira coluna da esquerda pra direita VERMELHO - > vitoria jogador 2
            else if(campoC.classList.contains("o") && campoF.classList.contains("o") && campoI.classList.contains("o"))
            {
                exibirModal()
                implementaIconeJogadaNoCampo(divVitoria, "o")
                jogador = 0
                return true
            }

            //primeira linha de cima para baixo AZUL - > vitoria jogador 1
            else if(campoA.classList.contains("x") && campoB.classList.contains("x") && campoC.classList.contains("x"))
            {
                exibirModal()
                implementaIconeJogadaNoCampo(divVitoria, "x")
                jogador = 0
                return true
            }

            //primeira linha de cima para baixo VERMELHA - > vitoria jogador 2
            else if(campoA.classList.contains("o") && campoB.classList.contains("o") && campoC.classList.contains("o"))
            {
                exibirModal()
                implementaIconeJogadaNoCampo(divVitoria, "o")
                jogador = 0
                return true
            }

            //segunda linha de cima para baixo AZUL - > vitoria jogador 1
            else if(campoD.classList.contains("x") && campoE.classList.contains("x") && campoF.classList.contains("x"))
            {
                exibirModal()
                implementaIconeJogadaNoCampo(divVitoria, "x")
                jogador = 0
                return true
            }

            //segunda linha de cima para baixo VERMELHA - > vitoria jogador 2
            else if(campoD.classList.contains("o") && campoE.classList.contains("o") && campoF.classList.contains("o"))
            {
                exibirModal()
                implementaIconeJogadaNoCampo(divVitoria, "o")
                jogador = 0
                return true
            }

            //terceira linha de cima para baixo AZUL - > vitoria jogador 1
            else if(campoG.classList.contains("x") && campoH.classList.contains("x") && campoI.classList.contains("x"))
            {
                exibirModal()
                implementaIconeJogadaNoCampo(divVitoria, "x")
                jogador = 0
                return true
            }

            //terceira linha de cima para baixo VERMELHA - > vitoria jogador 2
            else if(campoG.classList.contains("o") && campoH.classList.contains("o") && campoI.classList.contains("o"))
            {
                exibirModal()
                implementaIconeJogadaNoCampo(divVitoria, "o")
                jogador = 0
                return true
            }

            //diagonal esquerda pra direita AZUL - > vitoria jogador 1
            else if(campoA.classList.contains("x") && campoE.classList.contains("x") && campoI.classList.contains("x"))
            {
                exibirModal()
                implementaIconeJogadaNoCampo(divVitoria, "x")
                jogador = 0
                return true
            }
            
            //diagonal esquerda pra direita VEMELHO - > vitoria jogador 2
            else if(campoA.classList.contains("o") && campoE.classList.contains("o") && campoI.classList.contains("o"))
            {
                exibirModal()
                implementaIconeJogadaNoCampo(divVitoria, "o")
                jogador = 0
                return true
            }

            //diagonal direita pra esquerda AZUL - > vitoria jogador 1
            else if(campoC.classList.contains("x") && campoE.classList.contains("x") && campoG.classList.contains("x"))
            {
                exibirModal()
                implementaIconeJogadaNoCampo(divVitoria, "x")
                jogador = 0
                return true
            }

            //diagonal direita pra esquerda VERMELHA - > vitoria jogador 1
            else if(campoC.classList.contains("o") && campoE.classList.contains("o") && campoG.classList.contains("o"))
            {
                exibirModal()
                implementaIconeJogadaNoCampo(divVitoria, "o")
                jogador = 0
                return true
                return true
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
                return true
            }

            return false
            
        }
    
    //reinicia o jogo limpando as divs e determinando o jogador como 1
        const reiniciarJogo = () =>
        {
           const campos = document.getElementsByClassName("campo-hash")
           console.log(campos)
           
           const iconeModalVitoria = document.getElementById("vitoria")

           if(iconeModalVitoria.firstChild)
           {
               iconeModalVitoria.removeChild(iconeModalVitoria.firstChild)
           }

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
            jogada = 1
            destacaJogador()
             
        }

        const definirTipoJogo = (modoJogo) =>
        {
            esconderModal("modalModos")
            if(modoJogo == "player-maquina")
            {
                console.log("oi")
                mudarOponente()
                tipoJogo = "player-maquina"
                definirDificuldadeJogo("dificuldade-jogo")
            }
            else
            {
                tipoJogo = "player-player"
            }
        }

        const mudarOponente = () =>
        {
           const divJogador2 = pegarElementoPeloId("jogador2")
           console.log(divJogador2);
           divJogador2.style.display = "none"

           const divJogadorMaquina = pegarElementoPeloId("maquina")
           console.log(divJogadorMaquina)
           divJogadorMaquina.classList.remove("maquina")
           divJogadorMaquina.classList.add("conteiner-jogador")
        }

    // adiciona classes às divs identificando a cor/jogador que a escolheu
        const removeClasse = (elemento, classe) =>
        {
            elemento.classList.remove(classe)
            elemento.classList.add("white")
        }

    //Anuncia vencedor
        //necessita de finalização
        const anunciaVencedor = () => true
    
    //Mostra avisos para jogador (selecionar campo vazio)
        //necessita de finalização
        const avisarJogadores = () => true

        const redirecionarJogador = () => window.location.href = "paginaJogo.html";
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

    //Clique no botão de jogar contra maquina
        const botaoJogarContraMaquina = pegarElementoPeloId("botaoJogarMaquina")
        botaoJogarContraMaquina.addEventListener("click", function(){definirTipoJogo("player-maquina")})
        
    //Clique no botão de jogar contra player
        const botaoJogarContraPlayer = pegarElementoPeloId("botaoJogarPlayer")
        botaoJogarContraPlayer.addEventListener("click", function(){definirTipoJogo("player-player")})

    //Clique no botão para jogar novamente
        const botaoJogarNovamente = pegarElementoPeloId("botaoJogarNovamente")
        botaoJogarNovamente.addEventListener("click", reiniciarJogo)  

    //Clique no botão para mudar modo jogo
        const botaoMudarModoJogo= pegarElementoPeloId("botaoMudarModoJogo")
        botaoMudarModoJogo.addEventListener("click", redirecionarJogador)  


