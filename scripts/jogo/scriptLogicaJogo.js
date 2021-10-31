"use strict"

//VARIAVEL DA VEZ, DO TIPO E DO NIVEL DE DIFICULDADE
var jogador = 1

var jogada = 1

var tipoJogo = ""

var nivelDificuldade = ""


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
                    //jogador = 2 //inverte a cor que aparecerá no campo de jogo
                    // verificarVitoria()
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

        const fazerJogadaAleatoria = (arrayPossibilidades) => 
        {
            var arrayCampos = arrayPossibilidades;
            //["campo-A", "campo-B", "campo-C", "campo-D", "campo-E", "campo-F", "campo-G", "campo-H", "campo-I"]

            var encontrou = false

            while(!encontrou)
            {
                const idAleatorio = arrayCampos[Math.floor(Math.random() * arrayCampos.length)]
                var campoEscolhido = document.getElementById(idAleatorio)

                console.log(idAleatorio)

                if(campoEscolhido.classList.contains("white"))
                {
                    const novaImg = document.createElement("span")
                    novaImg.innerHTML = `radio_button_unchecked` // ícone o
                    novaImg.classList.add("material-icons-outlined")
                    campoEscolhido.appendChild(novaImg)
                    adicionaClasses(campoEscolhido, "o")
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

        const fazerJogadaMaquina = () =>
        {
            if(nivelDificuldade == "facil")
            {  
                fazerJogadaAleatoria()      
            }
            else if (nivelDificuldade == "medio")
            {
                //Possibilidades horizontais
                if (campoA.classList.contains("x") && campoB.classList.contains("x") && campoC.classList.contains("white")) 
                {
                    const novaImg = document.createElement("span")
                    novaImg.innerHTML = `radio_button_unchecked` // ícone o
                    novaImg.classList.add("material-icons-outlined")
                    campoC.appendChild(novaImg)
                    adicionaClasses(campoC, "o")
                }
                else if (campoA.classList.contains("x") && campoC.classList.contains("x") && campoB.classList.contains("white")) 
                {
                    const novaImg = document.createElement("span")
                    novaImg.innerHTML = `radio_button_unchecked` // ícone o
                    novaImg.classList.add("material-icons-outlined")
                    campoB.appendChild(novaImg)
                    adicionaClasses(campoB, "o")
                } 
                else if (campoB.classList.contains("x") && campoC.classList.contains("x") && campoA.classList.contains("white")) 
                {
                    const novaImg = document.createElement("span")
                    novaImg.innerHTML = `radio_button_unchecked` // ícone o
                    novaImg.classList.add("material-icons-outlined")
                    campoA.appendChild(novaImg)
                    adicionaClasses(campoA, "o")
                }
                else if (campoD.classList.contains("x") && campoE.classList.contains("x") && campoF.classList.contains("white")) 
                {
                    const novaImg = document.createElement("span")
                    novaImg.innerHTML = `radio_button_unchecked` // ícone o
                    novaImg.classList.add("material-icons-outlined")
                    campoF.appendChild(novaImg)
                    adicionaClasses(campoF, "o")
                }
                else if (campoD.classList.contains("x") && campoF.classList.contains("x") && campoE.classList.contains("white")) 
                {
                    const novaImg = document.createElement("span")
                    novaImg.innerHTML = `radio_button_unchecked` // ícone o
                    novaImg.classList.add("material-icons-outlined")
                    campoE.appendChild(novaImg)
                    adicionaClasses(campoE, "o")
                }
                else if (campoE.classList.contains("x") && campoF.classList.contains("x") && campoD.classList.contains("white")) 
                {
                    const novaImg = document.createElement("span")
                    novaImg.innerHTML = `radio_button_unchecked` // ícone o
                    novaImg.classList.add("material-icons-outlined")
                    campoD.appendChild(novaImg)
                    adicionaClasses(campoD, "o")
                }
                else if (campoG.classList.contains("x") && campoH.classList.contains("x") && campoI.classList.contains("white")) 
                {
                    const novaImg = document.createElement("span")
                    novaImg.innerHTML = `radio_button_unchecked` // ícone o
                    novaImg.classList.add("material-icons-outlined")
                    campoI.appendChild(novaImg)
                    adicionaClasses(campoI, "o")
                }
                else if (campoG.classList.contains("x") && campoI.classList.contains("x") && campoH.classList.contains("white")) 
                {
                    const novaImg = document.createElement("span")
                    novaImg.innerHTML = `radio_button_unchecked` // ícone o
                    novaImg.classList.add("material-icons-outlined")
                    campoH.appendChild(novaImg)
                    adicionaClasses(campoH, "o")
                }
                else if (campoH.classList.contains("x") && campoI.classList.contains("x") && campoG.classList.contains("white")) 
                {
                    const novaImg = document.createElement("span")
                    novaImg.innerHTML = `radio_button_unchecked` // ícone o
                    novaImg.classList.add("material-icons-outlined")
                    campoG.appendChild(novaImg)
                    adicionaClasses(campoG, "o")
                }
                //Possibilidades verticais
                else if (campoA.classList.contains("x") && campoD.classList.contains("x") && campoG.classList.contains("white")) 
                {
                    const novaImg = document.createElement("span")
                    novaImg.innerHTML = `radio_button_unchecked` // ícone o
                    novaImg.classList.add("material-icons-outlined")
                    campoG.appendChild(novaImg)
                    adicionaClasses(campoG, "o")
                }
                else if (campoA.classList.contains("x") && campoG.classList.contains("x") && campoD.classList.contains("white")) 
                {
                    const novaImg = document.createElement("span")
                    novaImg.innerHTML = `radio_button_unchecked` // ícone o
                    novaImg.classList.add("material-icons-outlined")
                    campoD.appendChild(novaImg)
                    adicionaClasses(campoD, "o")
                }
                else if (campoD.classList.contains("x") && campoG.classList.contains("x") && campoA.classList.contains("white")) 
                {
                    const novaImg = document.createElement("span")
                    novaImg.innerHTML = `radio_button_unchecked` // ícone o
                    novaImg.classList.add("material-icons-outlined")
                    campoA.appendChild(novaImg)
                    adicionaClasses(campoA, "o")
                }
                else if (campoB.classList.contains("x") && campoE.classList.contains("x") && campoH.classList.contains("white")) 
                {
                    const novaImg = document.createElement("span")
                    novaImg.innerHTML = `radio_button_unchecked` // ícone o
                    novaImg.classList.add("material-icons-outlined")
                    campoH.appendChild(novaImg)
                    adicionaClasses(campoH, "o")
                }
                else if (campoB.classList.contains("x") && campoH.classList.contains("x") && campoE.classList.contains("white")) 
                {
                    const novaImg = document.createElement("span")
                    novaImg.innerHTML = `radio_button_unchecked` // ícone o
                    novaImg.classList.add("material-icons-outlined")
                    campoE.appendChild(novaImg)
                    adicionaClasses(campoE, "o")
                }
                else if (campoE.classList.contains("x") && campoH.classList.contains("x") && campoB.classList.contains("white")) 
                {
                    const novaImg = document.createElement("span")
                    novaImg.innerHTML = `radio_button_unchecked` // ícone o
                    novaImg.classList.add("material-icons-outlined")
                    campoB.appendChild(novaImg)
                    adicionaClasses(campoB, "o")
                }
                else if (campoC.classList.contains("x") && campoF.classList.contains("x") && campoI.classList.contains("white")) 
                {
                    const novaImg = document.createElement("span")
                    novaImg.innerHTML = `radio_button_unchecked` // ícone o
                    novaImg.classList.add("material-icons-outlined")
                    campoI.appendChild(novaImg)
                    adicionaClasses(campoI, "o")
                }
                else if (campoC.classList.contains("x") && campoI.classList.contains("x") && campoF.classList.contains("white")) 
                {
                    const novaImg = document.createElement("span")
                    novaImg.innerHTML = `radio_button_unchecked` // ícone o
                    novaImg.classList.add("material-icons-outlined")
                    campoF.appendChild(novaImg)
                    adicionaClasses(campoF, "o")
                }
                else if (campoF.classList.contains("x") && campoI.classList.contains("x") && campoC.classList.contains("white")) 
                {
                    const novaImg = document.createElement("span")
                    novaImg.innerHTML = `radio_button_unchecked` // ícone o
                    novaImg.classList.add("material-icons-outlined")
                    campoC.appendChild(novaImg)
                    adicionaClasses(campoC, "o")
                }
                //Possibilidades diagonais
                else if (campoA.classList.contains("x") && campoE.classList.contains("x") && campoI.classList.contains("white")) 
                {
                    const novaImg = document.createElement("span")
                    novaImg.innerHTML = `radio_button_unchecked` // ícone o
                    novaImg.classList.add("material-icons-outlined")
                    campoI.appendChild(novaImg)
                    adicionaClasses(campoI, "o")
                }
                else if (campoA.classList.contains("x") && campoI.classList.contains("x") && campoE.classList.contains("white")) 
                {
                    const novaImg = document.createElement("span")
                    novaImg.innerHTML = `radio_button_unchecked` // ícone o
                    novaImg.classList.add("material-icons-outlined")
                    campoE.appendChild(novaImg)
                    adicionaClasses(campoE, "o")
                }
                else if (campoE.classList.contains("x") && campoI.classList.contains("x") && campoA.classList.contains("white")) 
                {
                    const novaImg = document.createElement("span")
                    novaImg.innerHTML = `radio_button_unchecked` // ícone o
                    novaImg.classList.add("material-icons-outlined")
                    campoA.appendChild(novaImg)
                    adicionaClasses(campoA, "o")
                }
                else if (campoC.classList.contains("x") && campoE.classList.contains("x") && campoG.classList.contains("white")) 
                {
                    const novaImg = document.createElement("span")
                    novaImg.innerHTML = `radio_button_unchecked` // ícone o
                    novaImg.classList.add("material-icons-outlined")
                    campoG.appendChild(novaImg)
                    adicionaClasses(campoG, "o")
                }
                else if (campoC.classList.contains("x") && campoG.classList.contains("x") && campoE.classList.contains("white")) 
                {
                    const novaImg = document.createElement("span")
                    novaImg.innerHTML = `radio_button_unchecked` // ícone o
                    novaImg.classList.add("material-icons-outlined")
                    campoE.appendChild(novaImg)
                    adicionaClasses(campoE, "o")
                }
                else if (campoE.classList.contains("x") && campoG.classList.contains("x") && campoC.classList.contains("white")) 
                {
                    const novaImg = document.createElement("span")
                    novaImg.innerHTML = `radio_button_unchecked` // ícone o
                    novaImg.classList.add("material-icons-outlined")
                    campoC.appendChild(novaImg)
                    adicionaClasses(campoC, "o")
                }
                else 
                {
                    fazerJogadaAleatoria()
                }
            }
            else if (nivelDificuldade == "dificil")
            {
                var possibilidadesJogadaMaquina = ["campo-A", "campo-B", "campo-C", "campo-D", "campo-E", "campo-F", "campo-G", "campo-H", "campo-I"];
                
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
                            possibilidadesJogadaMaquina = ["campo-A", "campo-C", "campo-E", "campo-G", "campo-H", "campo-I"]
                            fazerJogadaAleatoria(possibilidadesJogadaMaquina)
                        }
                        else if (campoD.classList.contains("x"))
                        {
                            possibilidadesJogadaMaquina = ["campo-A", "campo-C", "campo-E", "campo-F", "campo-G", "campo-I"]
                            fazerJogadaAleatoria(possibilidadesJogadaMaquina)
                        }
                        else if (campoF.classList.contains("x"))
                        {
                            possibilidadesJogadaMaquina = ["campo-A", "campo-C", "campo-D", "campo-E", "campo-G", "campo-I"]
                            fazerJogadaAleatoria(possibilidadesJogadaMaquina)
                        }
                        else if (campoH.classList.contains("x"))
                        {
                            possibilidadesJogadaMaquina = ["campo-A", "campo-B", "campo-C", "campo-E", "campo-G", "campo-I"]
                            fazerJogadaAleatoria(possibilidadesJogadaMaquina)
                        }
                    }

                }
                else
                {
                    //Possibilidades horizontais
                    if (campoA.classList.contains("x") && campoB.classList.contains("x") && campoC.classList.contains("white")) 
                    {
                        const novaImg = document.createElement("span")
                        novaImg.innerHTML = `radio_button_unchecked` // ícone o
                        novaImg.classList.add("material-icons-outlined")
                        campoC.appendChild(novaImg)
                        adicionaClasses(campoC, "o")
                    }
                    else if (campoA.classList.contains("x") && campoC.classList.contains("x") && campoB.classList.contains("white")) 
                    {
                        const novaImg = document.createElement("span")
                        novaImg.innerHTML = `radio_button_unchecked` // ícone o
                        novaImg.classList.add("material-icons-outlined")
                        campoB.appendChild(novaImg)
                        adicionaClasses(campoB, "o")
                    } 
                    else if (campoB.classList.contains("x") && campoC.classList.contains("x") && campoA.classList.contains("white")) 
                    {
                        const novaImg = document.createElement("span")
                        novaImg.innerHTML = `radio_button_unchecked` // ícone o
                        novaImg.classList.add("material-icons-outlined")
                        campoA.appendChild(novaImg)
                        adicionaClasses(campoA, "o")
                    }
                    else if (campoD.classList.contains("x") && campoE.classList.contains("x") && campoF.classList.contains("white")) 
                    {
                        const novaImg = document.createElement("span")
                        novaImg.innerHTML = `radio_button_unchecked` // ícone o
                        novaImg.classList.add("material-icons-outlined")
                        campoF.appendChild(novaImg)
                        adicionaClasses(campoF, "o")
                    }
                    else if (campoD.classList.contains("x") && campoF.classList.contains("x") && campoE.classList.contains("white")) 
                    {
                        const novaImg = document.createElement("span")
                        novaImg.innerHTML = `radio_button_unchecked` // ícone o
                        novaImg.classList.add("material-icons-outlined")
                        campoE.appendChild(novaImg)
                        adicionaClasses(campoE, "o")
                    }
                    else if (campoE.classList.contains("x") && campoF.classList.contains("x") && campoD.classList.contains("white")) 
                    {
                        const novaImg = document.createElement("span")
                        novaImg.innerHTML = `radio_button_unchecked` // ícone o
                        novaImg.classList.add("material-icons-outlined")
                        campoD.appendChild(novaImg)
                        adicionaClasses(campoD, "o")
                    }
                    else if (campoG.classList.contains("x") && campoH.classList.contains("x") && campoI.classList.contains("white")) 
                    {
                        const novaImg = document.createElement("span")
                        novaImg.innerHTML = `radio_button_unchecked` // ícone o
                        novaImg.classList.add("material-icons-outlined")
                        campoI.appendChild(novaImg)
                        adicionaClasses(campoI, "o")
                    }
                    else if (campoG.classList.contains("x") && campoI.classList.contains("x") && campoH.classList.contains("white")) 
                    {
                        const novaImg = document.createElement("span")
                        novaImg.innerHTML = `radio_button_unchecked` // ícone o
                        novaImg.classList.add("material-icons-outlined")
                        campoH.appendChild(novaImg)
                        adicionaClasses(campoH, "o")
                    }
                    else if (campoH.classList.contains("x") && campoI.classList.contains("x") && campoG.classList.contains("white")) 
                    {
                        const novaImg = document.createElement("span")
                        novaImg.innerHTML = `radio_button_unchecked` // ícone o
                        novaImg.classList.add("material-icons-outlined")
                        campoG.appendChild(novaImg)
                        adicionaClasses(campoG, "o")
                    }
                    //Possibilidades verticais
                    else if (campoA.classList.contains("x") && campoD.classList.contains("x") && campoG.classList.contains("white")) 
                    {
                        const novaImg = document.createElement("span")
                        novaImg.innerHTML = `radio_button_unchecked` // ícone o
                        novaImg.classList.add("material-icons-outlined")
                        campoG.appendChild(novaImg)
                        adicionaClasses(campoG, "o")
                    }
                    else if (campoA.classList.contains("x") && campoG.classList.contains("x") && campoD.classList.contains("white")) 
                    {
                        const novaImg = document.createElement("span")
                        novaImg.innerHTML = `radio_button_unchecked` // ícone o
                        novaImg.classList.add("material-icons-outlined")
                        campoD.appendChild(novaImg)
                        adicionaClasses(campoD, "o")
                    }
                    else if (campoD.classList.contains("x") && campoG.classList.contains("x") && campoA.classList.contains("white")) 
                    {
                        const novaImg = document.createElement("span")
                        novaImg.innerHTML = `radio_button_unchecked` // ícone o
                        novaImg.classList.add("material-icons-outlined")
                        campoA.appendChild(novaImg)
                        adicionaClasses(campoA, "o")
                    }
                    else if (campoB.classList.contains("x") && campoE.classList.contains("x") && campoH.classList.contains("white")) 
                    {
                        const novaImg = document.createElement("span")
                        novaImg.innerHTML = `radio_button_unchecked` // ícone o
                        novaImg.classList.add("material-icons-outlined")
                        campoH.appendChild(novaImg)
                        adicionaClasses(campoH, "o")
                    }
                    else if (campoB.classList.contains("x") && campoH.classList.contains("x") && campoE.classList.contains("white")) 
                    {
                        const novaImg = document.createElement("span")
                        novaImg.innerHTML = `radio_button_unchecked` // ícone o
                        novaImg.classList.add("material-icons-outlined")
                        campoE.appendChild(novaImg)
                        adicionaClasses(campoE, "o")
                    }
                    else if (campoE.classList.contains("x") && campoH.classList.contains("x") && campoB.classList.contains("white")) 
                    {
                        const novaImg = document.createElement("span")
                        novaImg.innerHTML = `radio_button_unchecked` // ícone o
                        novaImg.classList.add("material-icons-outlined")
                        campoB.appendChild(novaImg)
                        adicionaClasses(campoB, "o")
                    }
                    else if (campoC.classList.contains("x") && campoF.classList.contains("x") && campoI.classList.contains("white")) 
                    {
                        const novaImg = document.createElement("span")
                        novaImg.innerHTML = `radio_button_unchecked` // ícone o
                        novaImg.classList.add("material-icons-outlined")
                        campoI.appendChild(novaImg)
                        adicionaClasses(campoI, "o")
                    }
                    else if (campoC.classList.contains("x") && campoI.classList.contains("x") && campoF.classList.contains("white")) 
                    {
                        const novaImg = document.createElement("span")
                        novaImg.innerHTML = `radio_button_unchecked` // ícone o
                        novaImg.classList.add("material-icons-outlined")
                        campoF.appendChild(novaImg)
                        adicionaClasses(campoF, "o")
                    }
                    else if (campoF.classList.contains("x") && campoI.classList.contains("x") && campoC.classList.contains("white")) 
                    {
                        const novaImg = document.createElement("span")
                        novaImg.innerHTML = `radio_button_unchecked` // ícone o
                        novaImg.classList.add("material-icons-outlined")
                        campoC.appendChild(novaImg)
                        adicionaClasses(campoC, "o")
                    }
                    //Possibilidades diagonais
                    else if (campoA.classList.contains("x") && campoE.classList.contains("x") && campoI.classList.contains("white")) 
                    {
                        const novaImg = document.createElement("span")
                        novaImg.innerHTML = `radio_button_unchecked` // ícone o
                        novaImg.classList.add("material-icons-outlined")
                        campoI.appendChild(novaImg)
                        adicionaClasses(campoI, "o")
                    }
                    else if (campoA.classList.contains("x") && campoI.classList.contains("x") && campoE.classList.contains("white")) 
                    {
                        const novaImg = document.createElement("span")
                        novaImg.innerHTML = `radio_button_unchecked` // ícone o
                        novaImg.classList.add("material-icons-outlined")
                        campoE.appendChild(novaImg)
                        adicionaClasses(campoE, "o")
                    }
                    else if (campoE.classList.contains("x") && campoI.classList.contains("x") && campoA.classList.contains("white")) 
                    {
                        const novaImg = document.createElement("span")
                        novaImg.innerHTML = `radio_button_unchecked` // ícone o
                        novaImg.classList.add("material-icons-outlined")
                        campoA.appendChild(novaImg)
                        adicionaClasses(campoA, "o")
                    }
                    else if (campoC.classList.contains("x") && campoE.classList.contains("x") && campoG.classList.contains("white")) 
                    {
                        const novaImg = document.createElement("span")
                        novaImg.innerHTML = `radio_button_unchecked` // ícone o
                        novaImg.classList.add("material-icons-outlined")
                        campoG.appendChild(novaImg)
                        adicionaClasses(campoG, "o")
                    }
                    else if (campoC.classList.contains("x") && campoG.classList.contains("x") && campoE.classList.contains("white")) 
                    {
                        const novaImg = document.createElement("span")
                        novaImg.innerHTML = `radio_button_unchecked` // ícone o
                        novaImg.classList.add("material-icons-outlined")
                        campoE.appendChild(novaImg)
                        adicionaClasses(campoE, "o")
                    }
                    else if (campoE.classList.contains("x") && campoG.classList.contains("x") && campoC.classList.contains("white")) 
                    {
                        const novaImg = document.createElement("span")
                        novaImg.innerHTML = `radio_button_unchecked` // ícone o
                        novaImg.classList.add("material-icons-outlined")
                        campoC.appendChild(novaImg)
                        adicionaClasses(campoC, "o")
                    }
                    else 
                    {
                        console.log("oiuj")
                        fazerJogadaAleatoria(possibilidadesJogadaMaquina)      
                    }
                }
                
            }
            jogador = 1 //inverte a cor que aparecerá no campo de jogo
            jogada = jogada+1 
            destacaJogador()
            verificarVitoria()
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
                // fazerJogadaMaquina()
            }
        }

        const definirProximoJogador = () =>
        {
            if(tipoJogo == "player-maquina")
            {
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


    //verifica se alguem venceu com a jogada feita
        const verificarVitoria = () =>
        {
            //primeira coluna da esquerda pra direita AZUL -> vitoria do jogador 1
            if (campoA.classList.contains("x") && campoD.classList.contains("x") && campoG.classList.contains("x"))
            {
                alert("jogador 1 venceu!!!")
                jogador = 0
                return true
            }

            //primeira coluna da esquerda pra direita VEMELHA -> vitoria do jogador 2
            else if (campoA.classList.contains("o") && campoD.classList.contains("o") && campoG.classList.contains("o") )
            {
                alert("jogador 2 venceu!!!")
                jogador = 0
                return true
            }

            //segunda coluna da esquerda pra direita (meio) AZUL - > vitoria jogador 1
            else if(campoB.classList.contains("x") && campoE.classList.contains("x") && campoH.classList.contains("x"))
            {
                alert("jogador 1 venceu!!!")
                jogador = 0
                return true
            }
            
            //segunda coluna da esquerda pra direita (meio) VERMELHA - > vitoria jogador 2
            else if(campoB.classList.contains("o") && campoE.classList.contains("o") && campoH.classList.contains("o"))
            {
                alert("jogador 2 venceu!!!")
                jogador = 0
                return true
            }

            //terceira coluna da esquerda pra direita AZUL - > vitoria jogador 1
            else if(campoC.classList.contains("x") && campoF.classList.contains("x") && campoI.classList.contains("x"))
            {
                alert("jogador 1 venceu!!!")
                jogador = 0
                return true
            }

            //terceira coluna da esquerda pra direita VERMELHO - > vitoria jogador 2
            else if(campoC.classList.contains("o") && campoF.classList.contains("o") && campoI.classList.contains("o"))
            {
                alert("jogador 2 venceu!!!")
                jogador = 0
                return true
            }

            //primeira linha de cima para baixo AZUL - > vitoria jogador 1
            else if(campoA.classList.contains("x") && campoB.classList.contains("x") && campoC.classList.contains("x"))
            {
                alert("jogador 1 venceu!!!")
                jogador = 0
                return true
            }

            //primeira linha de cima para baixo VERMELHA - > vitoria jogador 2
            else if(campoA.classList.contains("o") && campoB.classList.contains("o") && campoC.classList.contains("o"))
            {
                alert("jogador 2 venceu!!!")
                jogador = 0
                return true
            }

            //segunda linha de cima para baixo AZUL - > vitoria jogador 1
            else if(campoD.classList.contains("x") && campoE.classList.contains("x") && campoF.classList.contains("x"))
            {
                alert("jogador 1 venceu!!!")
                jogador = 0
                return true
            }

            //segunda linha de cima para baixo VERMELHA - > vitoria jogador 2
            else if(campoD.classList.contains("o") && campoE.classList.contains("o") && campoF.classList.contains("o"))
            {
                alert("jogador 2 venceu!!!")
                jogador = 0
                return true
            }

            //terceira linha de cima para baixo AZUL - > vitoria jogador 1
            else if(campoG.classList.contains("x") && campoH.classList.contains("x") && campoI.classList.contains("x"))
            {
                alert("jogador 1 venceu!!!")
                jogador = 0
                return true
            }

            //terceira linha de cima para baixo VERMELHA - > vitoria jogador 2
            else if(campoG.classList.contains("o") && campoH.classList.contains("o") && campoI.classList.contains("o"))
            {
                alert("jogador 2 venceu!!!")
                jogador = 0
                return true
            }

            //diagonal esquerda pra direita AZUL - > vitoria jogador 1
            else if(campoA.classList.contains("x") && campoE.classList.contains("x") && campoI.classList.contains("x"))
            {
                alert("jogador 1 venceu!!!")
                jogador = 0
                return true
            }
            
            //diagonal esquerda pra direita VEMELHO - > vitoria jogador 2
            else if(campoA.classList.contains("o") && campoE.classList.contains("o") && campoI.classList.contains("o"))
            {
                alert("jogador 2 venceu!!!")
                jogador = 0
                return true
            }

            //diagonal direita pra esquerda AZUL - > vitoria jogador 1
            else if(campoC.classList.contains("x") && campoE.classList.contains("x") && campoG.classList.contains("x"))
            {
                alert("jogador 1 venceu!!!")
                jogador = 0
                return true
            }

            //diagonal direita pra esquerda VERMELHA - > vitoria jogador 1
            else if(campoC.classList.contains("o") && campoE.classList.contains("o") && campoG.classList.contains("o"))
            {
                alert("jogador 2 venceu!!!")
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

            // if (tipoJogo == "player-maquina" && nivelDificuldade == "dificil")
            // {
            //     jogador = 2
            //     destacaJogador()
            //     fazerJogadaMaquina()
            // }
            // else 
            // {
                jogador = 1
                jogada = 1
                destacaJogador()   
            // }
        }

        const definirTipoJogo = (modoJogo) =>
        {
            esconderModal()
            if(modoJogo == "player-maquina")
            {
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

    //Clique no select
    // const selectDificuldadeJogo = pegarElementoPeloId("dificuldade-jogo")
    // selectDificuldadeJogo.addEventListener("click", definirDificuldadeJogo)