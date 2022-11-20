$( document).ready(function() {
    console.log( "ready!" );
    $( "#descarga" ).click(function() {
 const $elementoParaConvertir = document.querySelector('body'); // <-- Aquí puedes elegir cualquier elemento del DOM
html2pdf()
    .set({
        margin: 1,
        filename: 'documento.pdf',
        image: {
            type: 'jpeg',
            quality: 0.98
        },
        html2canvas: {
            scale: 3, // A mayor escala, mejores gráficos, pero más peso
            letterRendering: true,
        },
        jsPDF: {
            unit: "in",
            format: "a2",
            orientation: 'portrait' // landscape o portrait
        }
    })
    .from($elementoParaConvertir)
    .save()
    .catch(err => console.log(err))
    .finally()
    .then(() => {
        console.log ('guardado')
    });
});
    
});