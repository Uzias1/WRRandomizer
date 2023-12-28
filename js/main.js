const numCampeones = 109;
const numObjetos = 68; //AD = 27 + AP = 20 + DEFENSA = 21
const numRoles = 5;
const numRunasClave = 11;
const numRunas = 4; //Grupos de runas
const numEleccionesRunas = 3; //Elecciones por cada fila de runas en un grupo
const numeroFilasRunas = 3;
const numeroTotalRunas = 36;
const numHechizos = 7;
const numBotas = 7;
const numMejoras = 13;
//Arreglo con las imagenes de campeones
const campeones = ['Aatrox.jpg', 'Ahri.jpg', 'Akali.jpg', 'Akshan.jpg', 'Alistar.jpg', 'Amumu.jpg', 'Annie.jpg', 'Ashe.jpg', 'Aurelionsol.jpg', 'Blitzcrank.jpg', 'Brand.jpg', 'Braum.jpg', 'Caitlyn.jpg', 'Camille.jpg', 'Corki.jpg', 'Darius.jpg', 'Diana.jpg', 'Draven.jpg', 'DrMundo.jpg', 'Ekko.jpg', 'Evelynn.jpg', 'Ezreal.jpg', 'Fiddlesticks.jpg', 'Fiora.jpg', 'Fizz.jpg', 'Galio.jpg', 'Garen.jpg', 'Gragas.jpg', 'Graves.jpg', 'Gwen.jpg', 'Hecarim.jpg', 'Irelia.jpg', 'Janna.jpg', 'Jarvaniv.jpg', 'Jax.jpg', 'Jayce.jpg', 'Jhin.jpg', 'Jinx.jpg', 'Kaisa.jpg', 'Karma.jpg', 'Kassadin.jpg', 'Katarina.jpg', 'Kayle.jpg', 'Kayn.jpg', 'Kennen.jpg', 'KhaZix.jpg', 'Leesin.jpg', 'Leona.jpg', 'Lillia.jpg', 'Lucian.jpg', 'Lulu.jpg', 'Lux.jpg', 'Malphite.jpg', 'Masteryi.jpg', 'Missfortune.jpg', 'Morgana.jpg', 'Nami.jpg', 'nasus.jpg', 'Nautilus.jpg', 'Nilah.jpg', 'Nunu.jpg', 'olaf.jpg', 'orianna.jpg', 'Ornn.jpg', 'Pantheon.jpg', 'Pyke.jpg', 'Rakan.jpg', 'Rammus.jpg', 'Renekton.jpg', 'Rengar.jpg', 'Riven.jpg', 'Samira.jpg', 'Senna.jpg', 'seraphine.jpg', 'Sett.jpg', 'Shen.jpg', 'Shyvana.jpg', 'singed.jpg', 'Sion.jpg', 'Sivir.jpg', 'sona.jpg', 'soraka.jpg', 'Swain.jpg', 'Teemo.jpg', 'Thresh.jpg', 'Tristana.jpg', 'tryndamere.jpg', 'twistedfate.jpg', 'Twitch.jpg', 'Urgot.jpg', 'varus.jpg', 'vayne.jpg', 'Veigar.jpg', 'Vex.jpg', 'vi.jpg', 'Vladimir.jpg', 'Volibear.jpg', 'Warwick.jpg', 'Wukong.jpg', 'Xayah.jpg', 'xinzhao.jpg', 'yasuo.jpg', 'Yone.jpg', 'Yuumi.jpg', 'zed.jpg', 'Zeri.jpg', 'ziggs.jpg', 'Zoe.jpg', 'Zyra.jpg'];
//Arreglo con los roles del juego
const roles = ['Bot.png','Jungle.png','Mid.png','Support.png','Top.png'];
//Arreglo con los hechizos del juego
const hechizos = ['Barrera.webp','Curacion.webp','Destello.webp','Extenuar.webp','Fantasma.webp','Ignicion.webp','Smite.webp'];
//Arreglo con las botas del juego
const botas = ['Botas_Dinamismo.webp', 'Botas_Jonias_Lucidez.webp', 'Botas_Mana.webp', 'Botas_Mercurio.webp', 'Grebas_Berserker.webp', 'Grebas_Codiciosas.webp', 'Punteras_Acero_Revestidas.webp'];
//Arreglo con las mejoras de las botas
const mejoras = ['Armadura_Petrea.webp', 'Estasis.webp', 'Fajin_Mercurio.webp', 'Gloria.webp', 'Magnetron.webp', 'Meteorito.webp', 'Protocinturon.webp', 'Redencion.webp', 'Relicario.webp', 'Renacimiento.webp', 'Repulsor.webp', 'Teleport.webp','Velo.webp'];
//Arreglo con runas clave
const runasclave = ['Aery.webp', 'Agarre_Perpetuo.webp', 'Aumento_Glacial.webp', 'Cadencia_Letal.webp', 'Conquistador.webp', 'Electrocutar.webp', 'Fase_Veloz.webp', 'Matakrakens.webp', 'Primer_Golpe.webp', 'Replica.webp', 'Sobre_Marcha.webp'];
//Arreglo con objetos
const objetosJuntos = ['Angel_Guardian.webp', 'Apariencia_Espiritual.webp', 'Arcoescudo_Inmortal.webp', 'Armadura_Warmog.webp', 'Bailarin_Espectral.webp', 'Baile_Muerte.webp', 'Baston_Aguas_Fluidas.webp', 'Baston_Arcangel.webp', 'Blaster_Magnetico.webp', 'Cercenador_Divino.webp', 'Cetro_Cristal_Rylai.webp', 'Coleccionista.webp', 'Colmillo_Serpiente.webp', 'Convergencia_Zeke.webp', 'Coraza_Dual_Amaranto.webp', 'Corazon_Helado.webp', 'Corona_Abrasadora.webp', 'Corona_Reina_Fragmentada.webp', 'Cota_Espinas.webp', 'Creagrietas.webp', 'Cuchillas_Raudas_Navori.webp', 'Cuchilla_Oscura.webp', 'Despertar_Robaalmas.webp', 'Diente_Nashor.webp', 'Eco_Armonico.webp', 'Eco_Luden.webp', 'Egida_Fuego_Solar.webp', 'Enfoque_Horizonte.webp', 'Espada_Carga_Solari.webp', 'Espada_Fantasmal_Youmuu.webp', 'Fauses_Malmortius.webp', 'Filo_Cordura.webp', 'Filo_Infinito.webp', 'Filo_Noche.webp', 'Filo_Tormenta.webp', 'Fuerza_Naturaleza.webp', 'Fuerza_Trinidad.webp', 'Guantelete_Hijo_Hielo.webp', 'Guantelete_Sterak.webp', 'Hoja_Crepuscular_Draktharr.webp', 'Hoja_Rey_Arruinado.webp', 'Huracan_Runaan.webp', 'Impulso_Cosmico.webp', 'Juramento_Protector.webp', 'Llegada_Invierno.webp', 'Maldicion_Liche.webp', 'Manamune.webp', 'Mandato_Imperial.webp', 'Manto_Medianoche.webp', 'Mascara_Abisal.webp', 'Morellonomicon.webp', 'Orbe_Infinito.webp', 'Pebetero_Ardiente.webp', 'Placa_Hombre_Muerto.webp', 'Presagio_Randuin.webp', 'Recordatorio_Mortal.webp', 'Reflector_Cristalino.webp', 'Rencor_Serylda.webp', 'Rompecascos.webp', 'Sanguinaria.webp', 'Saqueador_Escencias.webp', 'Sierraespada_Quimopunk.webp', 'Sombrero_Mortifero_Rabbadon.webp', 'Tormento_Liandry.webp', 'Tridente_Oceanido.webp', 'Vara_Edades.webp', 'Vasija_Ixtali.webp', 'Velo_Amanecer.webp'];
//Arreglo runas juntas
const runasJuntas = ['1_Brutal.webp', '1_Creacion_Objetos.webp', '1_Dulces_Frutos.webp', '1_Fuente_Vida.webp', '1_Golpe_Escudo.webp', '1_Hextello.webp', '1_Impacto_Subito.webp', '1_Orbe_Anulacion.webp', '1_Quemadura.webp', '1_Tormenta_Creciente.webp', '1_Triunfo.webp', '1_Valor_Coloso.webp', '2_Ataque_Potenciado.webp', '2_Coraza_Osea.webp', '2_Golpe_Bajo.webp', '2_Golpe_Gracia.webp', '2_Lealtad.webp', '2_Marca_Debiles.webp', '2_Mercado_Futuro.webp', '2_Pionero.webp', '2_Segundo_Aire.webp', '2_Trascendencia.webp', '2_Ultimo_Bastion.webp', '2_Verdugo_Gigantes.webp', '3_Anillo_Flujo_Mana.webp', '3_Capa_Nimbo.webp', '3_Cazador_Ingenioso.webp', '3_Centinela_Zombi.webp', '3_Coleccionista_Ojos.webp', '3_Crecimiento_Excesivo.webp', '3_Demolicion.webp', '3_Leyenda_Celeridad.webp', '3_Leyenda_Linaje.webp', '3_Leyenda_Tenacidad.webp', '3_Perseverancia.webp', '3_Revitalizar.webp'];
//Arreglos para grupos de runas
const dominacion = ['1_Golpe_Escudo.webp', '1_Impacto_Subito.webp', '1_Quemadura.webp', '2_Ataque_Potenciado.webp', '2_Golpe_Bajo.webp', '2_Marca_Debiles.webp', '3_Cazador_Ingenioso.webp', '3_Centinela_Zombi.webp', '3_Coleccionista_Ojos.webp'];
const dominacion1 = ['1_Golpe_Escudo.webp', '1_Impacto_Subito.webp', '1_Quemadura.webp'];
const dominacion2 = ['2_Ataque_Potenciado.webp', '2_Golpe_Bajo.webp', '2_Marca_Debiles.webp'];
const dominacion3 = [ '3_Cazador_Ingenioso.webp', '3_Centinela_Zombi.webp', '3_Coleccionista_Ojos.webp'];

const inspiracion = ['1_Creacion_Objetos.webp', '1_Dulces_Frutos.webp', '1_Hextello.webp', '2_Mercado_Futuro.webp', '2_Pionero.webp', '2_Trascendencia.webp', '3_Anillo_Flujo_Mana.webp', '3_Capa_Nimbo.webp','3_Demolicion.webp'];
const inspiracion1 = ['1_Creacion_Objetos.webp', '1_Dulces_Frutos.webp', '1_Hextello.webp'];
const inspiracion2 = ['2_Mercado_Futuro.webp', '2_Pionero.webp', '2_Trascendencia.webp'];
const inspiracion3 = ['3_Anillo_Flujo_Mana.webp', '3_Capa_Nimbo.webp','3_Demolicion.webp'];

const precision = ['1_Brutal.webp', '1_Tormenta_Creciente.webp', '1_Triunfo.webp', '2_Golpe_Gracia.webp', '2_Ultimo_Bastion.webp', '2_Verdugo_Gigantes.webp', '3_Leyenda_Celeridad.webp', '3_Leyenda_Linaje.webp','3_Leyenda_Tenacidad.webp'];
const precision1 = ['1_Brutal.webp', '1_Tormenta_Creciente.webp', '1_Triunfo.webp'];
const precision2 = ['2_Golpe_Gracia.webp', '2_Ultimo_Bastion.webp', '2_Verdugo_Gigantes.webp'];
const precision3 = ['3_Leyenda_Celeridad.webp', '3_Leyenda_Linaje.webp','3_Leyenda_Tenacidad.webp'];

const valor = ['1_Fuente_Vida.webp', '1_Orbe_Anulacion.webp', '1_Valor_Coloso.webp', '2_Coraza_Osea.webp', '2_Lealtad.webp', '2_Segundo_Aire.webp', '3_Crecimiento_Excesivo.webp', '3_Perseverancia.webp', '3_Revitalizar.webp'];
const valor1 = ['1_Fuente_Vida.webp', '1_Orbe_Anulacion.webp', '1_Valor_Coloso.webp'];
const valor2 = ['2_Coraza_Osea.webp', '2_Lealtad.webp', '2_Segundo_Aire.webp'];
const valor3 = ['3_Crecimiento_Excesivo.webp', '3_Perseverancia.webp', '3_Revitalizar.webp'];


function funcGenerar(){
    // console.log("Hola mundo");
    //****************** Variables de cosas a cambiar ******************
    //Obtener el elemento de la imagen del campeon
    const imgCamp = document.getElementById('champ');
    const imgRol = document.getElementById('rolfin');
    const imgHec1 = document.getElementById('hechizo1');
    const imgHec2 = document.getElementById('hechizo2');
    const imgBotas = document.getElementById('boots');
    const imgMejoras = document.getElementById('mejoras');
    const imgRunaClave = document.getElementById('runaClave');
    const imgObj1 = document.getElementById('obj1');
    const imgObj2 = document.getElementById('obj2');
    const imgObj3 = document.getElementById('obj3');
    const imgObj4 = document.getElementById('obj4');
    const imgObj5 = document.getElementById('obj5');
    const imgR1 = document.getElementById('runa1');
    const imgR2 = document.getElementById('runa2');
    const imgR3 = document.getElementById('runa3');
    const imgR4 = document.getElementById('runa4');

    //***************** Cambio de campeones *****************
    //For para que parezca animacion
    for (let index = 0; index < numCampeones; index++) {
        setTimeout(() => {
            let campTemp = campeones[index];
            imgCamp.src = "./img/Campeon/" + campTemp;
        }, index * 20);
    }
    //***************** Cambio de roles *****************
    //For para que parezca animacion
    for (let index = 0; index < numRoles; index++) {
        setTimeout(() => {
            let rolTemp = roles[index];
            imgRol.src = "./img/Rol/" + rolTemp;
        }, index * 436);
    }
    //***************** Cambio de hechizos *****************
    //For para que parezca animacion
    let index2 = numHechizos;
    for (let index = 0; index < numHechizos; index++) {
        setTimeout(() => {
            let rolTemp = hechizos[index];
            let rolTemp2 = hechizos[index2-1];
            imgHec1.src = "./img/Build/Hechizos/" + rolTemp;
            imgHec2.src = "./img/Build/Hechizos/" + rolTemp2;
            index2--;
        }, index * 311);
    }
    //***************** Cambio de botas *****************
    //For para que parezca animacion
    for (let index = 0; index < numBotas; index++) {
        setTimeout(() => {
            let rolTemp = botas[index];
            imgBotas.src = "./img/Build/Objetos/Botas/" + rolTemp;
        }, index * 311);
    }
    //***************** Cambio de encantamiento *****************
    //For para que parezca animacion
    for (let index = 0; index < numMejoras; index++) {
        setTimeout(() => {
            let rolTemp = mejoras[index];
            imgMejoras.src = "./img/Build/Objetos/Botas/Mejoras/" + rolTemp;
        }, index * 167);
    }
    //***************** Cambio de runa clave *****************
    //For para que parezca animacion
    for (let index = 0; index < numRunasClave; index++) {
        setTimeout(() => {
            let rolTemp = runasclave[index];
            imgRunaClave.src = "./img/Build/Runas/Runa_clave/" + rolTemp;
        }, index * 198);
    }
    //***************** Cambio de objetos *****************
    //For para que parezca animacion
    let index3 = numObjetos;
    for (let index = 0; index < numObjetos; index++) {
        setTimeout(() => {
            let campTemp = objetosJuntos[index];
            let rolTemp2 = objetosJuntos[index3-1];
            imgObj1.src = "./img/Build/Objetos/Todos/" + campTemp;
            imgObj2.src = "./img/Build/Objetos/Todos/" + rolTemp2;
            imgObj3.src = "./img/Build/Objetos/Todos/" + campTemp;
            imgObj4.src = "./img/Build/Objetos/Todos/" + rolTemp2;
            imgObj5.src = "./img/Build/Objetos/Todos/" + campTemp;
            index3--;
        }, index * 32);
    }
    //***************** Cambio de runas *****************
    //For para que parezca animacion
    let index4 = numeroTotalRunas;
    for (let index = 0; index < numeroTotalRunas; index++) {
        setTimeout(() => {
            let campTemp = runasJuntas[index];
            let rolTemp2 = runasJuntas[index4 - 1];
            imgR1.src = "./img/Build/Runas/Todas/" + campTemp;
            imgR2.src = "./img/Build/Runas/Todas/" + rolTemp2;
            imgR3.src = "./img/Build/Runas/Todas/" + campTemp;
            imgR4.src = "./img/Build/Runas/Todas/" + rolTemp2;
            index4--;
        }, index * 60);
    }
    

    //setFinales
    setCampeon(imgCamp);
    let jungler = setRol(imgRol);
    let summoner = setHechizo(imgHec1, 0, numHechizos+1);
    setHechizo(imgHec2, jungler, summoner);
    setBotas(imgBotas);
    setMejoras(imgMejoras);
    setRunaClave(imgRunaClave);
    let o1 = setObjeto(imgObj1, numObjetos + 1, numObjetos + 1, numObjetos + 1, numObjetos + 1);
    let o2 = setObjeto(imgObj2, o1, numObjetos + 1, numObjetos + 1, numObjetos + 1);
    let o3 = setObjeto(imgObj3, o1, o2, numObjetos + 1, numObjetos + 1);
    let o4 = setObjeto(imgObj4, o1, o2, o3, numObjetos + 1);
    let o5 = setObjeto(imgObj5, o1, o2, o3, o4);

    let s1 = setRunas(imgR1, numRunas+1, numRunas+1, 1);
    let s2 = setRunas(imgR2, numRunas+1, s1, 2);
    let s3 = setRunas(imgR3, numRunas+1, s1, 3);
    let s4 = setRunas(imgR4, s1, numRunas+1, 4);
}

//Numero random
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//Seleccion final
function setCampeon(imgCamp){
    //Numero aleatorio para campeones
    let campSelNum = getRandomInt(numCampeones);
    let campSel = campeones[campSelNum];
    console.log("El campeon fue: " + campSel);
    //Cambiar imagen del campeon
    setTimeout(() => {
        imgCamp.src = "./img/Campeon/" + campSel;
    }, numCampeones * 20);
}

//Rol final
function setRol(imgRol){
    //Numero aleatorio para roles
    let rolSelNum = getRandomInt(numRoles);
    let rolSel = roles[rolSelNum];
    console.log("El rol fue: " + rolSel);
    //Cambiar imagen del campeon
    setTimeout(() => {
        imgRol.src = "./img/Rol/" + rolSel;
    }, numRoles * 436);

    //Comprobar si es jungla
    //console.log("El rol es " + imgRol.src);
    if (rolSel == "Jungle.png") {
        //console.log("Es jungla");
        return 1;
    } else {
        //console.log("No es jungla");
        return 0;
    }
}

//Hechizo final
function setHechizo(imgHechizo, jungla, nuHechi) {
    //Numero aleatorio para hechizos
    let hecSelNum = getRandomInt(numHechizos);
    let hecSel = hechizos[hecSelNum];
    console.log("El hechizo fue: " + hecSel);
    //Comprobaciones
    if(jungla && nuHechi!=6){
        console.log("Es jungla");
        hecSel = "Smite.webp";
    } else {
        if (nuHechi == hecSelNum) {
            if (hecSelNum + 1 >= numHechizos) {
                hecSel = hechizos[hecSelNum - 1];
            } else {
                hecSel = hechizos[hecSelNum + 1];
            }
        }
    }
    //Cambiar imagen del hechizo
    setTimeout(() => {
        imgHechizo.src = "./img/Build/Hechizos/" + hecSel;
    }, numHechizos * 311);

    return hecSelNum;
}

//Botas finales
function setBotas(imgBotas) {
    //Numero aleatorio para campeones
    let campSelNum = getRandomInt(numBotas);
    let campSel = botas[campSelNum];
    console.log("Las botas fueron: " + campSel);
    //Cambiar imagen de las botas
    setTimeout(() => {
        imgBotas.src = "./img/Build/Objetos/Botas/" + campSel;
    }, numBotas * 311);
}

//Mejoras finales
function setMejoras(imgMejoras) {
    //Numero aleatorio para campeones
    let campSelNum = getRandomInt(numMejoras);
    let campSel = mejoras[campSelNum];
    console.log("Las mejoras fueron: " + campSel);
    //Cambiar imagen de la mejora
    setTimeout(() => {
        imgMejoras.src = "./img/Build/Objetos/Botas/Mejoras/" + campSel;
    }, numMejoras * 167);
}

//Runa clave final
function setRunaClave(imgMejoras) {
    //Numero aleatorio para campeones
    let campSelNum = getRandomInt(numRunasClave);
    let campSel = runasclave[campSelNum];
    console.log("La runa clave fue: " + campSel);
    //Cambiar imagen de la mejora
    setTimeout(() => {
        imgMejoras.src = "./img/Build/Runas/Runa_clave/" + campSel;
    }, numRunasClave * 198);
}

//Objetos finales
function setObjeto(imgObjeto, objEvitar1, objEvitar2, objEvitar3, objEvitar4){
    //Generar numero aleatorio de objeto
    let objNum = getRandomInt(numObjetos);
    if (objNum == objEvitar1 || objNum == objEvitar2 || objNum == objEvitar3 || objNum == objEvitar4){
        //Recursividad para evitar los ifs (esperando que no explote) ACTUALIZACION: No explotó c:
        setObjeto(imgObjeto, objEvitar1, objEvitar2, objEvitar3, objEvitar4);
    } else {
        //Seleccionar el nombre del archivo
        let objSel = objetosJuntos[objNum];
        console.log("El objeto es "+objSel);
        //Cambiar la imagen del objeto
        setTimeout(() => {
            imgObjeto.src = "./img/Build/Objetos/Todos/" + objSel;
        }, numObjetos * 32);
    }
    return objNum;
}

//Generar las runas
function setRunas(imgRuna, grupoEvitar, grupoForzar, slot){
    //Seleccionar un grupo al azar
    let grupoRuna = getRandomInt(numRunas);
    //Para la ultima runa
    if(grupoRuna == grupoEvitar){
        //Evitar duplicados en grupos de runas
        console.log("Ocurrencia detectada entre el grupo "+grupoRuna+" y "+grupoEvitar+ " el slot es "+slot+ " la imgRuna es "+imgRuna);
        setRunas(imgRuna, grupoEvitar, grupoForzar, slot);
    } else {
        //Para seleccionar grupo de runas iguales
        if (grupoForzar <= numRunas) {
            //Si entra significa que ya hay un grupo de runas
            console.log("Estoy forzando porque grupoForzar es " + grupoForzar + " y " + numRunas);
            grupoRuna = grupoForzar;
        }

        //Verificar slot de runa
        if (slot == 4) {
            //Runa aislada por lo tanto,  grupoEvitar ya fue evitado en la recursividad
            //Generar una runa
            //Generar un numero aleatorio para elegir la runa
            let numRunaAislada = getRandomInt(numEleccionesRunas * numeroFilasRunas);

            if (grupoRuna == 0) {
                //Dominacion
                let runaSel = dominacion[numRunaAislada];
                console.log("La runa es " + runaSel);
                //Cambiar la imagen de la runa
                setTimeout(() => {
                    imgRuna.src = "./img/Build/Runas/Dominacion/" + runaSel;
                }, numeroTotalRunas * 60);
            } else if (grupoRuna == 1) {
                //Inspiracion
                let runaSel = inspiracion[numRunaAislada];
                console.log("La runa es " + runaSel);
                //Cambiar la imagen de la runa
                setTimeout(() => {
                    imgRuna.src = "./img/Build/Runas/Inspiracion/" + runaSel;
                }, numeroTotalRunas * 60);
            } else if (grupoRuna == 2) {
                //Precision
                let runaSel = precision[numRunaAislada];
                console.log("La runa es " + runaSel);
                //Cambiar la imagen de la runa
                setTimeout(() => {
                    imgRuna.src = "./img/Build/Runas/Precision/" + runaSel;
                }, numeroTotalRunas * 60);
            } else {
                //Valor
                let runaSel = valor[numRunaAislada];
                console.log("La runa es " + runaSel);
                //Cambiar la imagen de la runa
                setTimeout(() => {
                    imgRuna.src = "./img/Build/Runas/Valor/" + runaSel;
                }, numeroTotalRunas * 60);
            }
        } else {
            //Grupos de runas, usar cualquier grupo
            //Generar un grupo de runas
            if (grupoRuna == 0) {
                //Dominacion
                if (slot == 1) {
                    //Una runa entre la fila elegida
                    let runaGruporng = getRandomInt(numEleccionesRunas);
                    let runaFinal = dominacion1[runaGruporng];
                    console.log("La runa en grupo es " + runaFinal);
                    //Cambiar la imagen de la runa
                    setTimeout(() => {
                        imgRuna.src = "./img/Build/Runas/Dominacion/" + runaFinal;
                    }, numeroTotalRunas * 60);
                } else if (slot == 2) {
                    //Una runa entre la fila elegida
                    let runaGruporng = getRandomInt(numEleccionesRunas);
                    let runaFinal = dominacion2[runaGruporng];
                    console.log("La runa en grupo es " + runaFinal);
                    //Cambiar la imagen de la runa
                    setTimeout(() => {
                        imgRuna.src = "./img/Build/Runas/Dominacion/" + runaFinal;
                    }, numeroTotalRunas * 60);
                } else {
                    //Una runa entre la fila elegida
                    let runaGruporng = getRandomInt(numEleccionesRunas);
                    let runaFinal = dominacion3[runaGruporng];
                    console.log("La runa en grupo es " + runaFinal);
                    //Cambiar la imagen de la runa
                    setTimeout(() => {
                        imgRuna.src = "./img/Build/Runas/Dominacion/" + runaFinal;
                    }, numeroTotalRunas * 60);
                }
            } else if (grupoRuna == 1) {
                //Inspiracion
                if (slot == 1) {
                    //Una runa entre la fila elegida
                    let runaGruporng = getRandomInt(numEleccionesRunas);
                    let runaFinal = inspiracion1[runaGruporng];
                    console.log("La runa en grupo es " + runaFinal);
                    //Cambiar la imagen de la runa
                    setTimeout(() => {
                        imgRuna.src = "./img/Build/Runas/Inspiracion/" + runaFinal;
                    }, numeroTotalRunas * 60);
                } else if (slot == 2) {
                    //Una runa entre la fila elegida
                    let runaGruporng = getRandomInt(numEleccionesRunas);
                    let runaFinal = inspiracion2[runaGruporng];
                    console.log("La runa en grupo es " + runaFinal);
                    //Cambiar la imagen de la runa
                    setTimeout(() => {
                        imgRuna.src = "./img/Build/Runas/Inspiracion/" + runaFinal;
                    }, numeroTotalRunas * 60);
                } else {
                    //Una runa entre la fila elegida
                    let runaGruporng = getRandomInt(numEleccionesRunas);
                    let runaFinal = inspiracion3[runaGruporng];
                    console.log("La runa en grupo es " + runaFinal);
                    //Cambiar la imagen de la runa
                    setTimeout(() => {
                        imgRuna.src = "./img/Build/Runas/Inspiracion/" + runaFinal;
                    }, numeroTotalRunas * 60);
                }
            } else if (grupoRuna == 2) {
                //Precision
                if (slot == 1) {
                    //Una runa entre la fila elegida
                    let runaGruporng = getRandomInt(numEleccionesRunas);
                    let runaFinal = precision1[runaGruporng];
                    console.log("La runa en grupo es " + runaFinal);
                    //Cambiar la imagen de la runa
                    setTimeout(() => {
                        imgRuna.src = "./img/Build/Runas/Precision/" + runaFinal;
                    }, numeroTotalRunas * 60);
                } else if (slot == 2) {
                    //Una runa entre la fila elegida
                    let runaGruporng = getRandomInt(numEleccionesRunas);
                    let runaFinal = precision2[runaGruporng];
                    console.log("La runa en grupo es " + runaFinal);
                    //Cambiar la imagen de la runa
                    setTimeout(() => {
                        imgRuna.src = "./img/Build/Runas/Precision/" + runaFinal;
                    }, numeroTotalRunas * 60);
                } else {
                    //Una runa entre la fila elegida
                    let runaGruporng = getRandomInt(numEleccionesRunas);
                    let runaFinal = precision3[runaGruporng];
                    console.log("La runa en grupo es " + runaFinal);
                    //Cambiar la imagen de la runa
                    setTimeout(() => {
                        imgRuna.src = "./img/Build/Runas/Precision/" + runaFinal;
                    }, numeroTotalRunas * 60);
                }
            } else {
                //Valor
                if (slot == 1) {
                    //Una runa entre la fila elegida
                    let runaGruporng = getRandomInt(numEleccionesRunas);
                    let runaFinal = valor1[runaGruporng];
                    console.log("La runa en grupo es " + runaFinal);
                    //Cambiar la imagen de la runa
                    setTimeout(() => {
                        imgRuna.src = "./img/Build/Runas/Valor/" + runaFinal;
                    }, numeroTotalRunas * 60);
                } else if (slot == 2) {
                    //Una runa entre la fila elegida
                    let runaGruporng = getRandomInt(numEleccionesRunas);
                    let runaFinal = valor2[runaGruporng];
                    console.log("La runa en grupo es " + runaFinal);
                    //Cambiar la imagen de la runa
                    setTimeout(() => {
                        imgRuna.src = "./img/Build/Runas/Valor/" + runaFinal;
                    }, numeroTotalRunas * 60);
                } else {
                    //Una runa entre la fila elegida
                    let runaGruporng = getRandomInt(numEleccionesRunas);
                    let runaFinal = valor3[runaGruporng];
                    console.log("La runa en grupo es " + runaFinal);
                    //Cambiar la imagen de la runa
                    setTimeout(() => {
                        imgRuna.src = "./img/Build/Runas/Valor/" + runaFinal;
                    }, numeroTotalRunas * 60);
                }
            }
        }
    }
    return grupoRuna;
}