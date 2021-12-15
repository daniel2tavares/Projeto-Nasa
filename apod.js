function brotar(){
    document.querySelector('#oculto1').style.display = 'flex'

}
function buscarApi(){
    const diaProcurado = $('#data').val();
    const link = `https://api.nasa.gov/planetary/apod?api_key=PsreC6Uy9kHIeK9zjEv4j1aV7KyentmpqpOHViAd&date=${diaProcurado}`
    document.querySelector('#oculto2').style.display = 'flex'
    document.querySelector('#oculto3').style.display = 'flex'
    $.ajax({
        type: 'GET',
        url: link,
        success: function(response){
            $('#titulo-api').text(response.title);
            $('#img-api').attr('src', response.url);
            $('#texto-api').text(response.explanation)
        }
    })
}