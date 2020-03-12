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
        'id': 0, 'titulo': 'Estos son los seis mejores dispositivos tecnológicos para niños', 'cuerpo':'Alcancías inteligentes, smartphones y muchas novedades tecnológicas ideales para los más pequeños. ','medio': '../imagenes/tecnologia/1.png'
    },
    { 'id': 1, 'titulo': 'Parecido a un computador, pero único en su clase, ¿sabe qué es?',  'cuerpo':'Se trata de un útil de otro nivel. Descúbralo aquí.','medio': '../imagenes/tecnologia/2.png' },
    { 'id': 2, 'titulo': 'Así gastan su dinero algunos magnates tecnológicos',  'cuerpo':'Sus costosas compras van de Islas privadas y relojes que sirven por 10.000 años a yates exclusivos.','medio': '../imagenes/tecnologia/3.jpeg' },
    { 'id': 3, 'titulo': 'Por qué las computadoras portátiles van camino a desaparecer',  'cuerpo':'Los teléfonos inteligentes y tabletas están ganando terreno entre las preferencias de los clientes. ','medio': '../imagenes/tecnologia/4.jpeg' }
];
// array con el cuerpo de noticias politicas
var cuerpo = [{
    'idNoticia': 0, 'id': 0,'titulo':'Mini computadores ', 'texto': 'Un dispositivo muy innovador y divertido para los niños es el Altavoz Bluetooth Divoom DITOO Pixel, un aparato muy similar a una computadora antigua ideal para jugar o escuchar música por medio de Bluetooth conectado al celular. Además, el altavoz muestra notificaciones de llamadas, mensajes, recordatorios de calendario y reloj despertador.', 'imagen': '../imagenes/tecnologia/miniComputadora.jpeg'
}, {
    'idNoticia': 0, 'id': 1,'titulo':'Un smartphone más seguro ', 'texto': 'Para estos tiempos los niños prefieren jugar con un teléfono móvil o una computadora que con sus juguetes y esto genera preocupación en sus padres.  Es por esto que ahora podemos encontrar celulares diseñados para niños con funciones de aprendizaje que le permiten interactuar con animaciones, aprender los números, el abecedario y escuchar música. En el caso de los niños más grandes o adolecentes que ya tienen su propio móvil, existen aplicaciones de control parental que permiten sincronizar su teléfono con el de su hijo. Por medio de esas plataformas se controla de forma virtual el smartphone, sirve para bloquear el dispositivo, aplicaciones o páginas a las que no quiere que acceda la otra persona, además de desconectar el internet de forma remota.', 'imagen': '../imagenes/tecnologia/smartPhone.png'
}, {
    'idNoticia': 0, 'id': 2, 'titulo':'El carro de sus sueños','texto': 'Los carros con batería se han puesto muy de moda como el regalo ideal para un niño pequeño, por lo general se pueden acelerar hasta un máximo de seis kilómetros por hora e incluyen control manual y remoto, lo que brinda aún más seguridad a los niños', 'imagen': '../imagenes/tecnologia/carro-sueños.jpeg'
},{
    'idNoticia': 0, 'id': 3, 'titulo':'La oficina perfecta','texto': 'Una de las cosas con las que sueña los niños es poder tener una oficina con computador e imitar a los adultos trabajando, es por eso que la mayoría de las empresas tecnológicas que ofrecen computadoras portátiles tienen algunas laptops que satisfacen los requisitos de los niños.<br>Estos aparatos son fáciles de usar, viene en variedad de colores y diseños y su precio es bajo comparado con el de una laptop normal.<br>Algunas computadoras son más sofisticadas que otras, unas solo sirven para jugar mientras que otras tiene acceso a internet, todo depende del presupuesto y las necesidades del menor.', 'imagen': '../imagenes/tecnologia/oficina-perfecta.jpeg'
},{
    'idNoticia': 0, 'id': 4, 'titulo':'La mejor manera de ahorrar','texto': 'Las alcancías inteligentes son la mejor forma de ahorrar, vienen con una pantalla incorporada y los padres pueden enviar dinero por medio de un smarthphone, la pantalla mostrará la suma que el niño lleva ahorrada, además, también tiene la ranura tradicional que permite introducir dinero físico.<br>También es una forma divertida de motivar a los niños para que colaboren con las tareas del hogar a cambio de una compensación monetaria para su alcancía.', 'imagen': '../imagenes/tecnologia/ahorrar.jpeg'
},{
    'idNoticia': 0, 'id': 5, 'titulo':'Relojes Inteligentes','texto': 'Varias compañías tectológicas han desarrollado relojes inteligentes de uso especial para niños. Por lo general, estos dispositivos cuentan con un servicio de rastreo GPS. Además, les permite a los jóvenes realizar o recibir llamadas de los contactos previamente seleccionados, y a los padres controlar desde sus celulares las actividades realizadas en el reloj.<br>En algunos casos estos dispositivos ponibles tienen incorporados juegos, calendario, despertador y una cámara para tomar fotos y hacer videos.', 'imagen': '../imagenes/tecnologia/relojes.jpeg'
},
{
    'idNoticia': 1, 'id': 6, 'titulo':'Parecido a un computador, pero único en su clase, ¿sabe qué es?','texto': 'Se trata de un útil de otro nivel. Descúbralo aquí.<br></br>Hablar de útiles de otro nivel, es hablar de herramientas prácticas e innovadoras. Es hablar de aquellos que solucionan de manera inmediata, los problemas que todo estudiante puede llegar a tener, y que además, les permiten hacer varias tareas a la vez. Pero, ¿realmente existen? La respuesta es “sí”. Un gran ejemplo de ellos, es el iPad. Gracias a este dispositivo electrónico, las personas ya no necesitan cuadernos ni enciclopedias para hacer los trabajos, y pueden llevar su maleta más ligera.<br>Durante la última década, el iPad ha sido comparado con el computador por sus múltiples funcionalidades, y las facilidades que ofrece para explorar el mundo de la informática. Un iPad, puede llegar a ser un computador, ya que permite utilizar Microsoft Office Personal en cualquier lugar; crear presentaciones en Power Point; bocetar, dibujar, y crear en Photoshop Mobile; guardar miles de archivos en iCloud; tener acceso a miles de aplicaciones como ‘Pillow’, y ‘Garage Band’, la primera lleva un registro del sueño y da tips para mejorarlo, y la segunda, se puede usar para componer música; grabar las clases y audios para los videos o proyectos; hacer pausas activas para despejar la mente de los trabajos; y tomar notas o crear recordatorios para no olvidar nada. Por otro lado, este potente dispositivo, da la posibilidad gracias al iPadOS, de utilizar el Apple Pencil y el Smart Keyboard con otras aplicaciones educativas disponibles en el App Store.', 'imagen': '../imagenes/tecnologia/2.png'
},
{
    'idNoticia': 2, 'id': 7, 'titulo':'Así gastan su dinero algunos magnates tecnológicos','texto': 'Sus costosas compras van de Islas privadas y relojes que sirven por 10.000 años a yates exclusivos. <br></br>Los grandes magnates tecnológicos acumulan fortunas y son famosos por realizar ciertas compras extravagantes e inusuales que las personas del común no podrían hacer. Estas van desde islas privadas en el caribe, aviones exclusivos e, incluso, un reloj que puede marcar la hora por más de 10.000 años.<br>Estos nombres le podrían sonar conocidos: Jeff Bezos,  Elon Musk, Bill Gates y Larry Ellison. Y es que entre estos cuatro importantes emprendedores tecnológicos - fundadores de Amazon, Tesla, Microsoft y Oracle-, suman cerca de 259.000 millones de dólares, algo así como 880 billones de pesos ¿cómo gastaría usted todo ese dinero?.<br>Entre sus grandes derroches multimillonarios están extravagantes caprichos en materia de transporte como súper yates, jets privados y colecciones de automóviles personalizados de cientos de millones de dólares.', 'imagen': '../imagenes/tecnologia/3.jpeg'
}
,
{
    'idNoticia': 2, 'id': 8, 'titulo':'Jeff Bezos','texto': 'Fundador y presidente de Amazon, invirtió 42 millones de dólares en la construcción de un reloj gigante que pueda dar la hora por 10.000 años. Este mide 152 metros y es parte de un proyecto de The Loung Fundation. Este gigante artefacto no tiene, realmente, una función definida más allá de cumplir un capricho de Bezos. ', 'imagen': '../imagenes/tecnologia/reloj.jpeg'
},
{
    'idNoticia': 2, 'id': 10, 'titulo':'Paul Allen','texto': 'Cofundador de Microsoft, compró el 12avo Yate más grande del mundo, llamado Octopus, por 200 millones de dólares. Este lujoso barco tiene un costo de mantenimiento anual de 20 millones de dólares.', 'imagen': '../imagenes/tecnologia/yate.jpeg'
},
{
    'idNoticia': 2, 'id': 10, 'titulo':'Michael Dell ','texto': 'Entre las compras más inusuales de estos multimillonarios está la gigantesca colección de fotografías adquirida por Michael Dell - fundador de Dell-, que contiene más de 180.000 fotos impresas en las que se encuentran imágenes de guerras y eventos mundiales, acontecimientos religiosos y sociales, celebridades y retratos de la vida familiar del siglo XX.', 'imagen': '../imagenes/tecnologia/dell.jpeg'
},
{
    'idNoticia': 3, 'id': 11, 'titulo':'Por qué las computadoras portátiles van camino a desaparecer','texto': 'Los teléfonos inteligentes y tabletas están ganando terreno entre las preferencias de los clientes.<p><small>Según una encuesta de usuarios de internet, solo el 15% piensa que su computadora portátil es su dispositivo más importante, mientras que el 66% cree que su teléfono inteligente lo es.</small></p> <br>El anuncio de Microsoft, hecho a principios del año, de que dejará de dar soporte a su sistema operativo Windows 7 generó estrés a sus usuarios.<br>La compañía informó que importantes herramientas cotidianas, como la banca personal y las compras en línea, ya no serían seguras en las computadoras con Windows 7, ahora obsoletas y tierra fértil para los piratas informáticos.<br>Es difícil saber a cuántos afecta la medida, pero una estimación sugiere que podrían ser cientos de millones.<br><b>La recomendación de la compañía fue implementar la actualización de inmediato e idealmente comprar una nueva computadora portátil, </b>ya que la anterior podría ser<b>demasiado lenta o no funcionar tan bien con el Windows 10 actual,pero ese es un gasto al que muchos no podrán hacer frente.</b>', 'imagen': '../imagenes/tecnologia/4.jpeg'
},
{
    'idNoticia': 3, 'id': 12, 'titulo':'Seguridad y protección de dispositivos antiguos','texto': 'Microsoft quiere que creas que Windows 10 es la última versión de Windows y, en lugar de hacer nuevas ediciones, mejorará tu experiencia de manera más continua.<br>Por supuesto, esto no es solo un problema para los propietarios de computadoras portátiles de Windows.<br>Los sistemas operativos de Apple y Android también hay que actualizarlos, y se anuncia con regularidad que se dejará de dar soporte a versiones anteriores y que si los usuarios siguen usándolas su seguridad no está garantizada.<br>En pocas palabras, si te roban de la banca online, la culpa, usuario, es tuya.<br>Puede que sea cierto que los investigadores y los piratas informáticos encuentran regularmente vulnerabilidades en los dispositivos viejos. La investigación muestra que los hackers tienen más probabilidades de encontrar debilidades en los códigos más antiguos y los que les son más familiares.', 'imagen': null
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
                        card += "<div class='col-sm-3'>";
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
                        card += "<div class='col-sm-3'>";
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
