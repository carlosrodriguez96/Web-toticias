/**
 * Este archivo contiene todas las funcionalidades para visualizar las noticias de economia
 * Desarrollado por: Carlos Rodriguez Ortega 
 * TGO. Análisis y desarrollo de sistemas de información
 * 
 */

// variable que contiene el  html
var card="";

// array que contiene los encabezados de economia
var noticias = [
    {
        'id': 0, 'titulo': 'Así opera la versión digitalizada de una ‘vaca’', 'cuerpo':'Conozca cómo obtener recursos para su proyecto o invertir en un emprendimiento.','medio': '../imagenes/economia/1.jpeg'
    },
    { 'id': 1, 'titulo': '285.000 puestos nuevos en ciudades aún no frenan la tasa de desempleo',  'cuerpo':'Año arrancó con desocupación de 13 % en el país; en principales ciudades bajó 0,8 puntos, a 12,9 %.','medio': '../imagenes/economia/2.jpeg' },
    { 'id': 2, 'titulo': 'Año arrancó con desocupación de 13 % en el país; en principales ciudades bajó 0,8 puntos, a 12,9 %.',  'cuerpo':'Hacia las 10 de la mañana de este viernes el promedio iba en $ 3.539,09. Petróleo cae de nuevo.','medio': '../imagenes/economia/3.jpeg' },
    { 'id': 3, 'titulo': 'Pensión familiar puede ser su alternativa para asegurarse en la vejez',  'cuerpo':'Juntar ahorros en algún momento de su vida laboral, con los de su pareja, es posible. Vea cómo','medio': '../imagenes/economia/4.jpeg' }
];

// array que contiene el cuerpo de las noticias de economia
var cuerpo = [{
    'idNoticia': 0, 'id': 0,'titulo':'Así opera la versión digitalizada de una ‘vaca’', 'texto': '<small>Conozca cómo obtener recursos para su proyecto o invertir en un emprendimiento.</small><br></br>En cuestión de unas pocas semanas, un grupo de entusiastas inversionistas colombianos –grandes, medianos y pequeños– hicieron una ‘vaca’ para apoyar tres emprendimientos desarrollados por empresarios connacionales.<br>Sin haberse visto ni cruzado palabra alguna entre sí, dichos inversionistas reunieron 700 millones de pesos y se los entregaron a los dueños de Alegra.com (250 millones), a los de Inelco (150 millones) y a los de Monbel Trading Partners (300 millones), como muestra de la confianza de que esos proyectos tienen gran potencial.<br>A cambio, los dueños de esas empresas se comprometieron a retornar esos recursos en un plazo máximo de entre 18 y 24 meses, con rendimientos que van desde 8,75 a 12,56 por ciento efectivo anual. Todo esto sin tener que ir a una notaría, valerse de abogados, asistir a reuniones y mucho menos firmar un solo papel.', 'imagen': '../imagenes/economia/1.jpeg'
},{
    'idNoticia': 0, 'id': 1,'titulo':'Nace a2censo', 'texto': 'El "crowdfunding" inició hace más de dos décadas en el Reino Unido y Estados Unidos, desde donde se ha expandido. México y Chile son líderes en Latinoamérica, mientras que Colombia, con el decreto 1357 del 2018, le abrió las puertas al negocio que hoy da sus primeros frutos de la mano de la Bolsa de Valores de Colombia que lanzó a finales del año pasado su plataforma a2censo.</br>Lina Parra, directora de nuevos negocios de la BVC, explica que trabajaron más de tres años en crear un mecanismo digital que acercara la bolsa a los pequeños inversionistas para ofrecerles productos alternativos con rentabilidades diferenciales a través del aporte de unos pocos pesos.<br>“Revisamos diferentes modelos de negocios y llegamos a la financiación colaborativa o "crowdfunding". Colombia estaba rezagada en este campo debido a la regulación, pero esta avanzó con la expedición de una normativa, lo cual permitió que pudiéramos crear un ecosistema digital con el que buscamos el desarrollo de las compañías y el crecimiento del dinero de los inversionistas”, sostiene la experta.', 'imagen': null
},{
    'idNoticia': 0, 'id': 3,'titulo':'Guía para invertir en ‘crowdfunding’', 'texto': '<ol><li>Ingrese a www.a2censo.com y cree una cuenta seleccionando si es persona natural o jurídica. El proceso toma unos 15 minutos.</li><li>Una vez creada la cuenta, el inversionista queda con un módulo denominado ‘Mi balance’ que se compone de dos partes: ‘Mis inversiones’ y ‘Mi disponible’. En el primero están los proyectos en los que ha invertido y en el segundo, la información donde puede consignar dinero de sus cuentas bancarias; allí también recibe el dinero que las empresas le pagan por su inversión o la devolución del dinero si el proyecto no logró su recaudo.</li><li>Hay que tener cuenta bancaria, pues todo el proceso de inversión es digital.</li><li>No hay comisiones para el inversionista, los únicos costos que asumirá son los tributarios.</li><li>Con la inversión la persona obtiene un valor de financiación colaborativa desmaterializado y depositado en Deceval, la cual, además, está protegida hasta 50 % por el Fondo Nacional de Garantías.</li></ol>', 'imagen': null
},{
    'idNoticia': 1, 'id': 2, 'titulo':'285.000 puestos nuevos en ciudades aún no frenan la tasa de desempleo','texto': '<small>Año arrancó con desocupación de 13 % en el país; en principales ciudades bajó 0,8 puntos, a 12,9 %.</small><br></br>Aunque en enero hubo 285.000 puestos nuevos de trabajo frente al mismo mes del año anterior, estos aún no detienen el crecimiento del desempleo nacional.<br>Entre las razones está la pérdida de trabajos, especialmente en el campo, pequeños centros poblados y otros centros urbanos. Así mismo, la eliminación de trabajos por cuenta propia y de rebusque no es suficientemente compensada no obstante la constante creación de puestos formales en el sector privado.<br>De esta manera, en el primer mes del año, mientras que en las 13 principales ciudades del país el desempleo bajó de 13,7 por ciento a 12,9 por ciento, a nivel nacional la tasa tuvo un leve aumento de 12,8 por ciento a 13 por ciento.<br>De hecho, en las principales ciudades, el número de desempleados se redujo en 77.000 personas, mientras que a nivel nacional aumentaron en 39.000.<br>Así mismo, el aumento de puestos de trabajo que crea el sector privado para empleados y obreros completó 12 meses consecutivos. En el trimestre terminado en enero, el número de obreros y empleados particulares aumentó en 250.000, mientras que los trabajadores por cuenta propia se redujeron en 175.000, los que se consideran patronos bajaron en 72.000 y los trabajadores familiares sin remuneración disminuyeron en 89.000.', 'imagen': '../imagenes/economia/2.jpeg'
},{
    'idNoticia': 1, 'id': 4, 'titulo':'Principales ciudades','texto': 'Durante enero de 2020, la tasa de desempleo en las 13 ciudades y áreas metropolitanas evidenció una reducción de 8 décimas, al ubicarse, según el Dane, en 12,9 por ciento, frente a un indicador de 13,7 por ciento de igual período del año pasado.<br>Según el funcionario, en las zonas urbanas se registró un incremento de 285.000 personas ocupadas, lo que influyó de forma importante en este indicador.<br>En este sentido, mientras que la tasa de desempleo en los hombres en estas 13 ciudades y áreas metropolitanas bajó de 12 por ciento a 11,1 por ciento entre enero de 2019 y el mismo mes de 2020, el indicador para el caso de las mujeres se redujo en ocho décimas, pasando de 15,8 por ciento al 15 por ciento.', 'imagen': null
},{
    'idNoticia': 2, 'id': 4, 'titulo':'"Dólar en Colombia marca récord y se ubica en $ 3.539,8','texto': '<small>Hacia las 10 de la mañana de este viernes el promedio iba en $ 3.539,09. Petróleo cae de nuevo.</small><br></br>Empujado por los temores mundiales y la baja del petróleo que se ha registrado en la última semana, el precio del dólar en la Bolsa de Valores de Colombia sube 30 pesos y se negociaba, hacia las 10 de la mañana, en un precio promedio de 3.539,09 pesos frente a la cotización oficial del viernes, de en 3.507,11 pesos, luego de estar en 3.537,94 pesos a las 9:11 de la mañana.<br>Esta fuerte subida lleva a muchos a pensar hasta dónde llegará el precio dólar, teniendo en cuenta que en los mercados internacionales, el petróleo se desploma, sesión tras sesión, lo que aumenta aún más la presión al alza de la divisa.<br>Según información de la plaza bursátil, las negociaciones abrieron a 3.525 pesos, es decir 18 pesos por encima de la tasa del día, el precio mínimo ha sido de 3.523 pesos, pero el máximo del día ha llegado, hasta las 10 de la mañana, hasta los 3.548,45 pesos.', 'imagen':'../imagenes/economia/3.jpeg'
},{
    'idNoticia': 2, 'id': 4, 'titulo':'¿Qué esperar?','texto': 'Para Diego Franco, CEO de Franco Group SA, “todo dependerá de cómo el mercado siga analizando el tema del coronavirus”.<br>De acuerdo con Franco, el mercado está sobrereaccionando a las noticias del virus chino, que se ha mezclado con el desinfle de los mercados americanos, escenarios que se han conjugado y que han disparado el dólar.<br>“Considero que la sobrereacción que han tenido algunos flujos de mercados emergentes ha sido algo exagerada y creo que el precio del dólar debería corregir”, señala.<br>Por su parte, Alexander Ríos, analista de Estratégica Consultoría, considera que de declararse el coronavirus como una pandemia, la moneda podría incluso llegar a los $3.700.<br>“Hay que entender que el problema no es el virus como tal, sino los efectos económicos que va a traer. De declararse una pandemia esto se agravaría. Hay que tener en cuenta que China tendrá una desaceleración. En este momento una parte del comercio mundial está pausada con los chinos por esta situación y su desaceleración trae consecuencias y efectos en las economías emergentes y por ende la demanda global se va a resentir mucho”, manifiesta Ríos.<br>Lo cierto hasta hoy es que es que el dólar se mantiene como valor refugio, tanto en Colombia como en otros mercados emergentes y seguirá así mientras el coronavirus avanza.', 'imagen':null
},{
    'idNoticia': 3, 'id': 5, 'titulo':'Pensión familiar puede ser su alternativa para asegurarse en la vejez','texto': '<small>Juntar ahorros en algún momento de su vida laboral, con los de su pareja, es posible. Vea cómo.</small><br></br>Contar con recursos para sostenerse en la vejez, cuando culmina la vida laboral, es clave para el bienestar de los adultos mayores, y es uno de los grandes problemas que tiene Colombia en donde 6 de cada 10 afiliados al sistema pensional no logra jubilarse. Una alternativa es juntar los esfuerzos entre los cónyuges o compañeros permanentes y es lo que se llama pensión familiar. He aquí un Abecé.', 'imagen': '../imagenes/economia/4.jpeg'
},{
    'idNoticia': 3, 'id': 5, 'titulo':'¿Cuándo aplica?','texto': 'Cuando ninguno de los dos cumple con los requisitos establecidos para obtener la pensión de vejez y no tienen la posibilidad de continuar realizando aportes a pensión.', 'imagen': null
}
,{
    'idNoticia': 3, 'id': 5, 'titulo':'¿Cuáles son los requisitos?','texto': '<ul><li>Los dos cónyuges deben estar afiliados al sistema.</li><li>Pertenecer al Sisbén I o II (si la solicitud se hace en Colpensiones).</li><li>Cada integrante de la pareja debe acreditar que a los 45 años ya había cotizado como mínimo un 25 % de las semanas requeridas (si es con Colpensiones).</li><li>Al sumar los resultados de la pareja el resultado debe ser el mínimo de semanas exigidas para obtener la pensión de vejez (1.300 en Colpensiones).</li><li>Tener la edad requerida: 57 años la mujer, 62 años el hombre</li><li>Los cónyuges deben acreditar 5 años de convivencia mínima.</li></ul>', 'imagen': null
}

];
// encabezados();

// alert('hola');
// funcion que recorre el array de noticias y los pinta en html
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

// funcion que recorre el array cuerpo y lo pinta en html
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
