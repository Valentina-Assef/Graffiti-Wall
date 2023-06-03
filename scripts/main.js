let form = document.querySelector('form');
let wall = document.getElementById('wall');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const texto = document.querySelector('#texto').value;
    const color = document.querySelector('#color').value;
    const mensaje = document.createElement('div');

    if (document.querySelector('#is-poster').checked) {
        mensaje.classList.add('mensaje', 'poster');
        mensaje.style.backgroundColor = color;
    } else {
        mensaje.classList.add('mensaje', 'graffiti');
    }

    mensaje.innerHTML = '<span class="close">&times;</span><p>' + texto + '</p>';

    wall.appendChild(mensaje);

    document.querySelector('#texto').value = '';
    document.querySelector('#color').value =  '';

    //boton x
    const closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.parentElement.remove();
        });
    });

    agregarLocal(mensaje)

});

/*
//Llamada al formulario y al div contenedor de los grafitis y posters
let form = document.querySelector('form');
let wall = document.getElementById('wall');

form.addEventListener('submit', (event) => {
    //Evitamos que se recargue la página
    event.preventDefault();

    const texto = document.querySelector('#texto').value;
    const color = document.querySelector('#color').value;
    const colorTexto = document.querySelector('#colorTexto').value;
    const mensaje = document.createElement('div');

    if (document.querySelector('#is-poster').checked) {
        mensaje.classList.add('mensaje', 'poster');
        mensaje.style.backgroundColor = color;
    } else {
        mensaje.classList.add('mensaje', 'graffiti');
    }
    mensaje.style.color = colorTexto;
    mensaje.innerHTML = '<span class="close">&times;</span><p>' + texto + '</p>';
    wall.appendChild(mensaje);

    //Reseteamos los valores
    document.querySelector('#texto').value = '';
    document.querySelector('#color').value =  '';
    document.querySelector('#colorTexto').value =  '';

    //boton x
    const closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.parentElement.remove();
        });
    });
});
<label>
            Color Texto
            <input type="color" name="color" id="colorTexto">
          </label>
*/