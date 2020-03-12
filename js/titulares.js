var card="";
var noticias = [
    {'id': 0, 'titulo': 'Estos son los seis mejores dispositivos tecnológicos para niños', 'cuerpo': 'Alcancías inteligentes, smartphones y muchas novedades tecnológicas ideales para los más pequeños. ', 'medio': 'imagenes/tecnologia/1.png','ruta':'tecnologia/detalles.html'},
    {  'id': 0, 'titulo': 'Radiografía de una máquina llamada Liverpool', 'cuerpo':'El mejor equipo del mundo en el momento, de la mano de Jürgen Klopp, patentó una manera de jugar. ','medio': 'imagenes/deportes/1.jpeg','ruta':'deportes/detalles.html' },
    {  'id': 0, 'titulo': 'La ruta que hará el avión que traerá a los colombianos en Wuhan', 'cuerpo':'El vuelo partirá desde Colombia a las 3:00 a. m. de este sábado.','medio': 'imagenes/politica/1.jpeg','ruta':'politica/detalles.html' }
];

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
                            card += "<a href='"+element.ruta+"?id="+btoa(element.id)+"'>";
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