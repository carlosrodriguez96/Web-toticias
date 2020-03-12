/**
 * Este archivo contiene todas las funcionalidades para visualizar las noticias de deportes
 * Desarrollado por: Carlos Rodriguez Ortega 
 * TGO. Análisis y desarrollo de sistemas de información
 * 
 */
// varaible que contiene el hatml
var card="";
/**
 * array qeu contiene los enacabezados de las noticias de deportes 
 */
var noticias = [
    {
        'id': 0, 'titulo': 'Radiografía de una máquina llamada Liverpool', 'cuerpo':'El mejor equipo del mundo en el momento, de la mano de Jürgen Klopp, patentó una manera de jugar. ','medio': '../imagenes/deportes/1.jpeg'
    },
    { 'id': 1, 'titulo': '¿Es feo el nuevo balón de la Champions?',  'cuerpo':'La pelota oficial será estrenada en la serie de octavos de final, desde este martes.','medio': '../imagenes/deportes/2.jpeg' },
    { 'id': 2, 'titulo': 'Real Madrid presenta a su nueva figura',  'cuerpo':'Apuesta para el futuro del club merengue. Empezará en el Castilla.','medio': '../imagenes/deportes/3.jpeg' },
    { 'id': 3, 'titulo': 'La liga que ahora seduce a Juan Carlos Osorio',  'cuerpo':'Lo contó el propio entrenador de Atlético Nacional, antes de enfrentar a Huracán.','medio': '../imagenes/deportes/4.jpeg' }
];
// array que contiene el cuerpo de las noticias de deportes
var cuerpo = [{
    'idNoticia': 0, 'id': 0,'titulo':'Radiografía de una máquina llamada Liverpool', 'texto': '<small>El mejor equipo del mundo en el momento, de la mano de Jürgen Klopp, patentó una manera de jugar. </small><br></br>Liverpool puede ser hoy el mejor equipo del planeta. Después de muchos años en los que los ojos del mundo del fútbol se volcaron a alabar el juego del Barcelona o la contundencia del Real Madrid, ahora una máquina diseñada, armada y puesta a rodar por el alemán Jürgen Klopp se ha vuelto el punto de referencia del juego en la actualidad.<br>Sin tener a una gran figura como eje del equipo, como pasó con Lionel Messi o Andrés Iniesta en el Barcelona o con Cristiano Ronaldo en el Real Madrid, el DT alemán ha construido una base sólida desde hace cinco años, con conceptos que traía de los equipos en los que fue desarrollando su carrera (Mainz 05 y Borussia Dortmund).<br>Mal no le ha ido a Klopp. Con el Dortmund fue dos veces campeón de la Bundesliga, por encima del poderoso Bayern, y llegó a la final de la Liga de Campeones en 2013, goleando al Real Madrid de José Mourinho en semifinales.<br>Con Liverpool ganó la Champions el año pasado, está a punto de romper una racha de casi 30 años sin títulos locales y este martes comenzará la recta final hacia un nuevo título europeo, cuando enfrente en octavos de final al Atlético de Madrid (3 p. m., hora de Colombia, con transmisión de ESPN 2).<br>Sin embargo, Klopp no se considera favorito para ganar la Champions. “La Juventus es la favorita de la Liga de Campeones. No veo fútbol italiano lo suficiente, pero no entiendo cómo se las arregla para no estar a la cabeza de la Serie A con diez puntos de ventaja sobre los demás. La Juventus de Maurizio Sarri tiene el mejor equipo que he visto en toda mi vida, con jugadores de calidad. Es una locura, el mejor para ganar la Champions”, dijo.<br>“La plantilla del Bayern de Múnich también es enorme, el PSG es increíble cuando está en forma, nunca se puede descartar al Barça, y no olvidemos al Manchester City, porque la Champions será uno de sus grandes objetivos”, agregó.', 'imagen': '../imagenes/deportes/1.jpeg'
}, {
    'idNoticia': 0, 'id': 1,'titulo':'Idea en funcionamiento', 'texto': 'A partir de allí, Klopp maneja unos conceptos muy mecanizados: el primero, siempre juega con una línea de cuatro defensores, pero tanto los zagueros centrales como los laterales tienen tareas específicas para mantener el equilibrio.<br>La defensa siempre juega muy adelantada para afianzar la idea de la presión en punta. Y los dos centrales, Virgil van Dijk y Joe Gómez, hacen parte activa del juego de posesión del equipo. Además, Klopp ha trabajado para aprovechar su estatura del holandés en el juego aéreo. Ya ha marcado cuatro goles en la Premier.<br>Los laterales, Trent Alexander-Arnold y Andrew Robertson, son parte integral del ataque del equipo. Tienen libertad para atacar, en más de una ocasión han lanzado pelotas cruzadas que aprovechan muy bien los delanteros e incluso tienen la posibilidad, si encuentran la opción, de rematar al arco.', 'imagen': '../imagenes/deportes/5e4b609931cca.jpeg'
}, {
    'idNoticia': 1, 'id': 2, 'titulo':'¿Es feo el nuevo balón de la Champions?','texto': '<small>La pelota oficial será estrenada en la serie de octavos de final, desde este martes.</small><br></br>La Liga de Campeones de Europa, que se reanuda este martes, tendrá nuevo balón oficial, que fue presentado por la marca deportiva Adidas.<br>El diseño está inspirándose en la ciudad anfitriona, Estambul, con el dibujo a mano de un mapa de la ciudad, que une los continentes de Europa y Asia.<br>El balón, llamado ‘Istanbul 20’, pretende destacar la cultura turca. El Bósforo, un canal que fluye a través de la ciudad, está en el centro de la pelota y el color púrpura está inspirado en la puesta de sol. ', 'imagen': '../imagenes/deportes/2.jpeg'
},{
    'idNoticia': 1, 'id': 3, 'titulo':'','texto': 'El balón se utilizará en todos los partidos restantes de esta competición, empezando por los de este martes: Atlético de Madrid vs. Liverpool y Borussia Dortmund vs. PSG.', 'imagen': '../imagenes/deportes/balon.jpeg'
},{
    'idNoticia': 2, 'id': 4, 'titulo':'Real Madrid presenta a su nueva figura','texto': '<small>Apuesta para el futuro del club merengue. Empezará en el Castilla.</small><br></br>El brasileño Reinier Jesus Carvalho, nuevo jugador del Real Madrid, aseguró en sus primeras palabras como madridista, durante su presentación en el palco de honor del estadio Santiago Bernabéu, que desea "ser parte de la historia" del club más laureado del mundo.<br>En una presentación repleta de emoción, con Reinier sin poder aguantar las lágrimas desde que entró al palco y se proyectó un vídeo con goles y jugadas suyas desde pequeño, el nuevo jugador madridista fue breve con unas palabras en las que agradeció el respaldo de su familia para cumplir un sueño.<br>"Es un día muy feliz para mi, en el que cumplo un sueño de infancia. Muchas gracias al presidente y a mi familia que siempre estuvieron conmigo y creyeron que sería posible llegar aquí. Quiero ser parte de la historia de este gran club. Hala Madrid", aseguró.<br>Reinier, con traje y corbata negra junto a camisa blanca, firmó su contrato para las seis próximas temporadas con el Real Madrid junto al presidente Florentino Pérez y posteriormente posó en el antepalco con la camiseta del Real Madrid con su nombre a la espalda y sin dorsal.<br>El nuevo jugador madridista estuvo acompañado por su familia, su padre Mauro que no pudo contener la emoción desde el inicio y su madre Susana, más su hermana pequeña Julia. Al acto acudió el que será su primer entrenador en España, Raúl González al mando del Castilla, donde a sus 18 años jugará partidos en Segunda división B intercalando entrenamientos con el primer equipo a las órdenes de Zinedine Zidane.', 'imagen': '../imagenes/deportes/3.jpeg'
},{
    'idNoticia': 3, 'id': 5, 'titulo':'La liga que ahora seduce a Juan Carlos Osorio','texto': '<small>Lo contó el propio entrenador de Atlético Nacional, antes de enfrentar a Huracán.</small><br></br>Atlético Nacional se alista para el partido de este miércoles en la Copa Suramericana, contra Huracán, en Argentina. Mientras tanto, el entrenador Juan Carlos Osorio confesó a la prensa que desea dirigir en Argentina.<br>"Sería extraordinario (dirigir en Argentina). Igual que disfruté, agradecí y aprendí del fútbol brasileño (cuando estuvo en el Sao Paulo), si a futuro hay alguna oportunidad en Argentina sería un privilegio por todo lo que logró a nivel internacional", dijo en declaraciones a los medios argentinos.', 'imagen': '../imagenes/deportes/4.jpeg'
}

];
// encabezados();

// alert('hola');
//funcion que recorre el aray de notiicas y los pinta en html
function encabezados(){
    noticias.forEach(element => {
        card += "<div class ='row'><div class='card card-progress border'>";
                    card += "<div class='progress'>";
                        card += "<div class='progress-bar bg-primary' role='progressbar' style='width: 100%' aria-valuenow='25'";
                            card += "aria-valuemin='0' aria-valuemax='100'></div>";
                    card += "</div>";
                    card += "<div class='row card-body'>";
                        card += "<div class='col-sm-5'>";
                            card += "<div class='card bg-dark text-white'>";
                                card += "<img src='"+ element.medio+"'  class='img-fluid'> ";
                            card += "</div>";
                        card += "</div>";
                        card += "<div class='col-sm-7'>";
                            card += "<a href='detalles.html?id="+btoa(element.id)+"'>";
                                card += "<h4 class='text-primary'>" + element.titulo;
                                card += "</h4>";
                            card += "</a>";
                            card += "<p>"+element.cuerpo+"</p>";                          
                        card += "</div>";
                    card += "</div>";
                card += "</div></div>";
                
    });
    document.getElementById('encabezado').innerHTML = card;
}
// funcion que recorre el array de contenido y lo pinta en html 
function contenido(){

    var id = atob(getQueryParam("id"));
    cuerpo.forEach(element => {
        if(element.idNoticia == id){
            console.log(element.idNoticia);
            if(element.imagen!=null){
            card += "<div class ='row'><div class='card card-progress border'>";
                    card += "<div class='progress'>";
                        card += "<div class='progress-bar bg-primary' role='progressbar' style='width: 100%' aria-valuenow='25'";
                            card += "aria-valuemin='0' aria-valuemax='100'></div>";
                    card += "</div>";
                    card += "<div class='row card-body'>";
                        card += "<div class='col-sm-5'>";
                            card += "<div class='card bg-dark text-white'>";
                                card += "<img src='"+ element.imagen+"'  class='img-fluid'> ";
                            card += "</div>";
                        card += "</div>";
                        card += "<div class='col-sm-7'>";
                            
                                card += "<h4 class='text-primary'>" + element.titulo;
                                card += "</h4>";
                           
                            card += "<p>"+element.texto+"</p>";                          
                        card += "</div>";
                    card += "</div>";
                card += "</div></div>";
            }
                if(element.imagen==null){
                    card += "<div class ='row'><div class='card card-progress border'>";
                    card += "<div class='progress'>";
                        card += "<div class='progress-bar bg-primary' role='progressbar' style='width: 100%' aria-valuenow='25'";
                            card += "aria-valuemin='0' aria-valuemax='100'></div>";
                    card += "</div>";
                    card += "<div class='row card-body'>";
                      
                        card += "<div class='col-sm-12'>";
                            
                                card += "<h4 class='text-primary'>" + element.titulo;
                                card += "</h4>";
                           
                            card += "<p>"+element.texto+"</p>";                          
                        card += "</div>";
                    card += "</div>";
                card += "</div></div>";
                }
                
                document.getElementById('encabezado').innerHTML = card;
        }
    });
}
// funcion que captura la url
function getQueryParam(param) {
    location.search
      .substr(1)
      .split("&")
      .some(function(item) {
        // returns first occurence and stops
        return item.split("=")[0] == param && (param = item.split("=")[1]);
      });
    return param;
  }

// console.log(noticias);
