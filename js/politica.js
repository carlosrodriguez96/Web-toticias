/**
 * Este archivo contiene todas las funcionalidades para visualizar las noticias de politica
 * Desarrollado por: Carlos Rodriguez Ortega 
 * TGO. Análisis y desarrollo de sistemas de información
 * 
 */

// variable que contiene el html
var card="";

// array con el encabezado de noticias politicas
var noticias = [
    {
        'id': 0, 'titulo': 'La ruta que hará el avión que traerá a los colombianos en Wuhan', 'cuerpo':'El vuelo partirá desde Colombia a las 3:00 a. m. de este sábado.','medio': '../imagenes/politica/1.jpeg'
    },
    { 'id': 1, 'titulo': 'Colombianos podrán ir a Emiratos Árabes sin visa',  'cuerpo':'La pelota oficial será estrenada en la serie de octavos de final, desde este martes.','medio': '../imagenes/politica/2.jpeg' },
    { 'id': 2, 'titulo': 'Gobierno dio vía libre a reactivación de obras de la Ruta del Sol III',  'cuerpo':'Son más de 470 kilómetros de doble calzada y más de 410 kilómetros de mantenimiento.','medio': '../imagenes/politica/3.jpeg' },
    { 'id': 3, 'titulo': 'Vicepresidencia y gobernadores firman pacto por la transparencia',  'cuerpo':'El acto se realiza en Cartagena, sede de la cumbre de gobernadores.','medio': '../imagenes/politica/4.jpeg' }
];

// array con el cuerpo de noticias politicas
var cuerpo = [{
    'idNoticia': 0, 'id': 0,'titulo':'La ruta que hará el avión que traerá a los colombianos en Wuhan', 'texto': '<small>El vuelo partirá desde Colombia a las 3:00 a. m. de este sábado.</small><br></br>La Cancillería informó cómo será el traslado de los colombianos que se encuentran en Wuhan, China, epicentro del coronavirus, que ha causado 2.247 muertes y 76.740 infecciones en 27 países. Serán 13 connacionales y tres extranjeros miembros de sus familias.br>Según la cancillería esta será la ruta: el vuelo partirá desde Bogotá, Colombia, a las 3 a. m. de este sábado y sobrevolará por Centroamérica, para hacer escala en Estados Unidos (Missouri y Alaska).<br>Luego seguirá por Rusia, sobrevuela China y entra a Corea del Sur (el domingo 23 de febrero), en donde aterrizará en Seul, con el objetivo de que la tripulación pueda dormir, según informó el Ministerio de Relaciones Exteriores.<br>En la noche del martes 25 de febrero, el avión despegará a la ciudad de Wuhan para la evacuación y de ahí emprenderá su regreso a Colombia con dos paradas técnicas, la primera de ellas en Mumbai (India), la segunda parada sería en España.', 'imagen': '../imagenes/politica/1.jpeg'
},{
    'idNoticia': 1, 'id': 2, 'titulo':'Colombianos podrán ir a Emiratos Árabes sin visa','texto': '<small>El acuerdo entrará en vigencia a partir del 5 de marzo de este año.</small><br></br>Si usted estaba pensando en visitar Dubai o alguna otra ciudad de los Emiratos Árabes Unidos desde el 5 de marzo de este año no necesitará visa para ir a este país.<br>La Cancillería anunció que desde esa fecha entrará en vigencia el acuerdo mutuo sobre exención de visa para los titulares de pasaportes ordinarios con permanencia de hasta 90 días entre Colombia y Emiratos Árabes Unidos.<br>"Esta medida permitirá a los colombianos adelantar actividades como turismo, gestiones de negocios, estudios, eventos culturales y deportivos, sin visa, hasta por 90 días", aseguró en un comunicado el Ministerio de Relaciones Exteriores.<br>Este acuerdo fue firmado el pasado 14 de marzo de 2019 y la iniciativa hace parte de "las gestiones que realiza el Gobierno nacional para fortalecer las relaciones diplomáticas y comerciales con el país de Oriente Medio".<br>Los colombianos pueden entrar a más de 130 terrotorios internacionales sin necesidad de visa.', 'imagen': '../imagenes/politica/2.jpeg'
},{
    'idNoticia': 2, 'id': 4, 'titulo':'Gobierno dio vía libre a reactivación de obras de la Ruta del Sol III','texto': '<small>Son más de 470 kilómetros de doble calzada y más de 410 kilómetros de mantenimiento.</small><br></br>El presidente Iván Duque estuvo este jueves en Bosconia, Cesar, donde participó en la firma de la reactivación de las obras de la Ruta del Sol, en el tramo III.<br>El proyecto  estuvo suspendido por cerca de dos años debido a que el concesionario inicial se quedó sin recursos para la ejecución, por lo que finalmente gracias a una acción conjunta con la Contraloría se logró ponerla en marcha de nuevo.<br>“Cuando el Gobierno estaba avanzando llamó a la Contraloría, llamó al Contralor, nos sentamos, y el Contralor dijo: vamos a acompañar este proceso para que la reactivación y la firma del Otrosí tenga todas las garantías por parte de la Contraloría, y le demos rápido inicio a este proyecto”, dijo Duque.<br>El mandatario destacó que son más de 470 kilómetros de doble calzada y más de 410 kilómetros de mantenimiento. “Es una obra emblemática, es una obra estratégica, es una obra necesaria”, dijo el jefe de Estado.', 'imagen': '../imagenes/politica/3.jpeg'
},{
    'idNoticia': 2, 'id': 4, 'titulo':'"Es una obra emblemática, es una obra estratégica, es una obra necesaria"','texto': 'La Agencia Nacional de Infraestructura (ANI) reportó la obra se logró reanudar e tras un año y medio de concertación y revisión por parte de esa entidad, el Ministerio de Transporte, el concesionario YUMA S.A, la interventoría del proyecto, con el seguimiento de las veedurías ciudadanas de Magdalena y Cesar, y el acompañamiento permanente de la Contraloría General de la República, la Superintendencia de Sociedades, la bancada parlamentaria, proveedores y las autoridades locales de la región.<br>Destacó que la reactivación se da con la suscripción de un otrosí y un contrato de transacción entre la ANI y el Concesionario YUMA S. A., el cual contempla la ampliación del plazo para la etapa de construcción a 56 meses, sin afectar la fecha final de la concesión y la obtención por parte del concesionario de un contrato de crédito por $400.000 millones que garantiza la financiación de las obras y el pago de las acreencias de la Constructora Ariguaní a los proveedores, las cuales ascienden a los $128.000 millones.', 'imagen':null
},{
    'idNoticia': 3, 'id': 5, 'titulo':'Vicepresidencia y gobernadores firman pacto por la transparencia','texto': '<small>El acto se realiza en Cartagena, sede de la cumbre de gobernadores.</small><br></br>En el marco de la cumbre de gobernadores, que se lleva a cabo en Cartagena, la Vicepresidencia y los mandatarios regionales firmaron este jueves el llamado "Pacto por la Transparencia y la Integridad".<br>El pacto es firmado por la vicepresidente Ramírez y los gobernadores, acompañados por la Federación Nacional de Departamentos.<br><b>El pacto busca implementar estrategias de integridad pública que promuevan entidades territoriales eficientes y que le apuestan al cierre de brechas y a la buena gobernanza.</b><br>"Esta hoja de ruta se deriva del Plan Nacional de Desarrollo 2018 - 2022 en la “Alianza de Cero Tolerancia con la Corrupción” y permite que Colombia adopte los mejores estándares internacionales. De este modo, se apunta a crear instituciones sólidas que garanticen cero corrupción y que fomenten la transparencia, integridad y legalidad y de esta manera, se mejoren las condiciones para una mejor relación entre el Estado y la ciudadanía", apuntó la Vicepresidencia.', 'imagen': '../imagenes/politica/4.jpeg'
}

];
// encabezados();

// alert('hola');
// duncion que recorre el array de noticias y los pinta en un html
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

// funcio que recorre el arrya de cuerpo y lo pinta en un html
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

// funcion que cptura el html
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
