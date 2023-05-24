/**Se define una función llamada popupWhatsApp como una función flecha. */
popupWhatsApp = () => {

  /**Se declaran variables que almacenarán los elementos HTML correspondientes a los botones de cierre y apertura de la ventana emergente, el contenedor de la ventana emergente y el botón de envío de mensaje de WhatsApp.
   * 
Los elementos HTML son seleccionados mediante el método querySelector o getElementById proporcionado por el objeto document de HTML. */
  let btnClosePopup = document.querySelector('.closePopup');
  let btnOpenPopup = document.querySelector('.whatsapp-button');
  let popup = document.querySelector('.popup-whatsapp');
  let sendBtn = document.getElementById('send-btn');

  /**Se agrega un evento de escucha al botón de cierre de la ventana emergente que activa una función de devolución de llamada que hace una alternancia de la clase CSS is-active-whatsapp-popup del contenedor de la ventana emergente. */
  btnClosePopup.addEventListener("click", () => {
    popup.classList.toggle('is-active-whatsapp-popup')
  })

  /**Se agrega un evento de escucha al botón de apertura de la ventana emergente que activa una función de devolución de llamada que hace una alternancia de la clase CSS is-active-whatsapp-popup del contenedor de la ventana emergente y establece la animación CSS fadeIn en el contenedor de la ventana emergente. */
  btnOpenPopup.addEventListener("click", () => {
    popup.classList.toggle('is-active-whatsapp-popup')
    /**La propiedad style.animation se utiliza para aplicar una animación CSS a un elemento
     * 
     * "fadeIn" es el nombre de la animación CSS que se aplicará. Este nombre debe coincidir con el nombre de la animación definida en la hoja de estilo CSS.
     * 
     * ".6s" indica la duración de la animación. En este caso, la animación durará 0,6 segundos.
     * 
     * "0.0s" especifica el retraso antes de que comience la animación. En este caso, no habrá ningún retraso y la animación comenzará inmediatamente.
     * 
     * "both" especifica qué hacer con los estilos de la animación al final de la animación. En este caso, los estilos se mantendrán después de que finalice la animación*/
    popup.style.animation = "fadeIn .6s 0.0s both";
  })

  /**Se agrega un evento de escucha al botón de envío de mensaje de WhatsApp que activa una función de devolución de llamada.
   * 
   * La función obtiene el valor del elemento HTML de entrada de texto y lo procesa para reemplazar los espacios en blanco con %20, lo que es necesario para que la URL de WhatsApp funcione correctamente.
   * 
   * Se abre una nueva ventana en blanco en el navegador web con la URL de WhatsApp y el mensaje de texto procesado. */
  sendBtn.addEventListener("click", () => {
    let msg = document.getElementById('whats-in').value;
    /* let relmsg = msg.replace(/ /g, "%20"); */
    let defaultMsg = "Hola Adriana, he visto tu portafolio en línea";


    /**Abre una nueva ventana del navegador y carga una URL específica que contiene el número de teléfono y un mensaje de WhatsApp.
     * 
     * +relmsg es una variable que contiene el mensaje de texto que se incluirá en el mensaje de WhatsApp. El símbolo + se utiliza para enlazar la variable con la cadena de texto que se va a enviar.
     */
    /* window.open('https://wa.me/+573116854955?text=' + relmsg, '_blank'); */
    window.open('https://wa.me/+573185002054?text=' + encodeURIComponent(defaultMsg), '_blank');

  });

  /**Se llama a la función setTimeout que activa una función de devolución de llamada después de un retardo de 3000 milisegundos (3 segundos).
   * 
   * La función de devolución de llamada hace una alternancia de la clase CSS is-active-whatsapp-popup del contenedor de la ventana emergente para ocultar la ventana emergente después de 3 segundos de haber sido abierta. */
  setTimeout(() => {
    popup.classList.toggle('is-active-whatsapp-popup');
  }, 3000);
}

/**Se llama a la función popupWhatsApp para que se ejecute al cargar la página. */
popupWhatsApp();