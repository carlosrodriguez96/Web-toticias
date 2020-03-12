/**
 * Este archivo contiene todas las funcionalidades para visualizar las noticias de cultura
 * Desarrollado por: Carlos Rodriguez Ortega 
 * TGO. Análisis y desarrollo de sistemas de información
 * 
 */

// Variable que contiene el html
var card="";
/**
 * array que contiene los enacabezados de las noticias
 */
var noticias = [
    {
        'id': 0, 'titulo': 'Así es el documental que habla de las batallas de una familia', 'cuerpo':'Está en cine "Después de Norma", película colombiana que explora el valor de los seres queridos.','medio': '../imagenes/cultura/1.jpeg'
    },
    { 'id': 1, 'titulo': 'Plácido Domingo se retira de la ópera "Don Carlo", en Londres',  'cuerpo':'El artista y el teatro llegaron a un acuerdo conjunto para no participar en las funciones de julio.','medio': '../imagenes/cultura/2.jpeg' },
    { 'id': 2, 'titulo': 'Los reyes del acordeón que lideran la sinfónica Vallenata',  'cuerpo':'Un grupo de reyes vallenatos sincronizan su sonido en clásicos del género este 7 de marzo.','medio': '../imagenes/cultura/3.jpeg' },
    { 'id': 3, 'titulo': 'Ricky Martin, Sebastián Yatra y Enrique Iglesias en gira conjunta',  'cuerpo':'Las estrellas anunciaron que estarán juntos por EE. UU. y Canadá.','medio': '../imagenes/cultura/4.jpeg' }
];
/**
 * array que contiene el cuerpo de las noticias
 */
var cuerpo = [{
    'idNoticia': 0, 'id': 0,'titulo':'Así es el documental que habla de las batallas de una familia', 'texto': '<small>Está en cine "Después de Norma", película colombiana que explora el valor de los seres queridos.</small><br></br>Revelar una parte de la vida en un documental no es fácil, sobre todo si se trata de un retrato familiar con detalles muy personales.<br>SPero el realizador Jorge Andrés Botero, con Después de Norma, no solo abrió las puertas de su hogar y de una experiencia muy profunda y personal alrededor de su madre y su padre, sino que consiguió una conexión importante con quienes ya han visto esta producción que se encuentra en las salas de cine del país.<br>De hecho, el año pasado, durante una función especial en el Festival de Cine de Cali, un joven se acercó al director luego de ver la película y le habló.<br><i>“Él me pidió de manera muy emotiva que le firmara las entradas: ‘Podría poner para Ángela, por favor’, me dijo, y cuando le pregunté quién era, me contó que era su mamá que había fallecido”, ahí me di cuenta de que había logrado algo muy emocional”, explicó Botero en entrevista con EL TIEMPO.</i><br>', 'imagen': '../imagenes/cultura/1.jpeg'
},{
    'idNoticia': 0, 'id': 1,'titulo':'La película habla de muchas cosas, pero plantea como tema central lo importante que es estar acompañado de tus seres queridos y elegir el destino que uno tiene que definir”', 'texto': 'Después de Norma sigue la historia del director, que al conocer el diagnostico de una enfermedad terminal de su madre decide comenzar a grabarla y, a la vez, a su entorno familiar para rescatar los recuerdos de infancia que muestran fragmentos de una mujer joven, alegre, desinhibida y vital.<br>“La experiencia me ha dejado como aprendizaje que al revisar un poco la familia, al final me convencí de que la mía es muy chévere (...) Durante mucho tiempo no estuve seguro de eso, pero al hacer el documental ratifiqué esa idea”, explica.<br>“La película habla de muchas cosas, pero plantea como tema central lo importante que es estar acompañado de tus seres queridos y elegir el destino que uno tiene que definir”, explica, haciendo referencia a hechos que se exploran en cuanto a la relación con los parientes.<br>Botero grabó desde el 2004 al 2006 y “luego, entre el 2007 y el 2009 no lo hice mucho. En el 2010 grabé más (...) En el 2012 abandoné otra vez. Y en el 2016, unas amigas que hicieron películas muy personales, como Looking For y Parador húngaro, me dijeron que organizáramos el material”, recordó.', 'imagen':'../imagenes/cultura/5e62b3a8116c4.jpeg'
},{
    'idNoticia': 1, 'id': 3,'titulo':'Plácido Domingo se retira de la ópera "Don Carlo", en Londres', 'texto': '<small>El artista y el teatro llegaron a un acuerdo conjunto para no participar en las funciones de julio.</small><br><br>Plácido Domingo y la Royal Opera House han decidido conjuntamente que el cantante español no participe en las funciones de <i>Don Carlo</i> previstas para el próximo julio en Londres, informó el teatro londinense.<br>En un comunicado, la Royal Opera House explica que iniciará un proceso de selección para sustituir al tenor de 79 años, que ha admitido su responsabilidad en varios casos de acoso sexual denunciados en Estados Unidos.<br>En su breve nota, el teatro subraya que "no ha recibido alegaciones de mala conducta contra el maestro Domingo" durante sus estancias en Londres y señala que "empatiza" con las razones que ha dado para su retirada.<br>"Plácido es un cantante y artista excelente y estamos enormemente agradecidos por su apoyo y compromiso a lo largo de varias décadas", sostiene el comunicado.', 'imagen':'../imagenes/cultura/2.jpeg'
},{
    'idNoticia': 2, 'id': 2, 'titulo':'Los reyes del acordeón que lideran la sinfónica Vallenata','texto': '<small>Un grupo de reyes vallenatos sincronizan su sonido en clásicos del género este 7 de marzo.</small><br></br>No habrá orquesta acompañando a los diez reyes vallenatos que se reunirán mañana en la noche en el Movistar Arena. La Sinfónica Vallenata la hacen ellos. Así lo cuenta el rey vallenato Beto Villa, que lleva años soñando con un show como el que presentará en Bogotá.<br>Villa (recordado por su etapa en Los Betos) presentó este proyecto inicialmente hecho con cuatro acordeoneros, en Barranquilla. Ahora, la producción creció, con más invitados.<br><i>“De la presentación en Barranquilla grabé un video –dice Villa–, se lo mostré a Ricardo Leyva, y él dijo: ‘Hay que montarlo en Bogotá’. Pensó que, además de los 10 acordeones, estuvieran los cantantes originales de los clásicos. Invitamos a Poncho Zuleta, Jorge Oñate, Iván Villazón, Beto Zabaleta y Alfredo Gutiérrez. Además, mi hijo, Beto Villa jr., cantará canciones de Diomedes Díaz y Rafael Orozco”.</i>', 'imagen': '../imagenes/cultura/3.jpeg'
},{
    'idNoticia': 2, 'id': 4, 'titulo':'¿Cómo es la Sinfónica Vallenata?','texto': 'Tomamos el formato europeo sinfónico: se reúnen varias familias de instrumentos a hacer ‘voces’ en una misma melodía. Tendremos diez reyes interpretando en simultáneo la misma canción.<br><b>Hemos visto varios acordeones antes, pero improvisando...</b><br>Suele ser así. Pero aquí nos sincronizamos. ¿Cómo? Hablando musicalmente: dentro de un tono hay varias octavas. Cada uno agarra una octava. Tres acordeoneros tocarán una, otros tres harán otra. Nadie va independiente. Vamos a ir unificados en una sola melodía. Así, en 30 canciones.<br>Por eso ensayamos tanto, como lo hace una orquesta sinfónica. La diferencia es que ellos leen la música. Nosotros acá la sentimos y la vivimos. Entonces, nuestra sincronización fue más demorada en ensayos.', 'imagen': '../imagenes/cultura/5e61864b5c7ab.jpeg'
},{
    'idNoticia': 2, 'id': 4, 'titulo':'¿No hay partitura?','texto': 'La partitura la tenemos en el corazón. Esta es una expresión cultural. Sincronizamos nuestro sentir para expresarnos. Esa es la sinfónica de reyes vallenatos.<br><b>¿Cómo será el show?</b><br>Tendrá cinco actos. Estarán los compositores. Ellos dirán: ‘Esta canción mía nació de esta forma’. Estarán Gustavo Gutiérrez, Emiliano Zuleta, Rafael Manjarrez, Iván Ovalle, Luis Egurrola. Los acordeoneros somos los reyes de reyes: ‘Cocha’ Molina, Hugo Carlos Granados y Alvarito López, y los reyes Ciro Meza, Gustavo Osorio, Rodolfo de Lavalle, Pangue Maestre y mi persona. Además de los reyes sabaneros Manuel Vega y José Vásquez. Invitamos a los sabaneros porque en el espectáculo interpretaremos cumbia y porro.', 'imagen':'../imagenes/cultura/5e6186d3a95a6.jpeg'
},{
    'idNoticia': 3, 'id': 4, 'titulo':'Ricky Martin, Sebastián Yatra y Enrique Iglesias en gira conjunta','texto': '<small>Las estrellas anunciaron que estarán juntos por EE. UU. y Canadá.</small> <br><br>Ricky Martin y Enrique Iglesias, dos de las estrellas de la música en español más importantes de las últimas décadas, anunciaron este miércoles 4 de marzo una gira conjunta que pasará por Estados Unidos y Canadá a partir de septiembre.<br>El puertorriqueño y el español presentaron hoy en un acto en Los Ángeles, EE.UU. En esta gira, además, participará como artista invitado el colombiano Sebastián Yatra.<br>Este "tour", que tendrá una veintena de conciertos, empezará el próximo 5 de septiembre en Phoenix y pasará por ciudades como Los Ángeles, Houston, Las Vegas, Toronto, Montreal, Nueva York, Chicago y Miami antes de cerrar su andadura el 30 de octubre en Atlanta.<br>Las entradas para la gira se pondrán a la venta el 12 de marzo, pero habrá una preventa dos días antes, el 10.', 'imagen':'../imagenes/cultura/4.jpeg'
},{
    'idNoticia': 3, 'id': 5, 'titulo':'La amistad de Martin con Iglesias','texto': 'Iglesias recordó cómo empezó a entablar una amistad con Martin de jóvenes cuando coincidían en vuelos o sacándose fotos con los fans. "Lo admiro muchísimo. Tiene una trayectoria espectacular. Músicalmente, él tiene su estilo y yo el mío, y va a ser una buena combinación", prometió el cantante de éxitos como "Bailando".<br>Por su parte Martin, que en los últimos meses ha presentado sencillos como "Cántalo" o "Tiburones", confió en que la gente que acuda al "tour" pueda pasar "un buen rato" y pueda olvidarse de sus problemas cotidianos al menos durante unas dos horas.', 'imagen': '../imagenes/cultura/5e61183356947.jpeg'
}

];
// encabezados();

// alert('hola');
/**
 * funcion que recorre los encabezados y los pinta en html
 */
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
/**
 * funcion que recorre el cuerpo  y lo pinta en html
 */
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
//funcion que captura la url 
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
