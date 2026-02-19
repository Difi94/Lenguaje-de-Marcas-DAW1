// Evento onload
        window.onload = function() {
            document.getElementById('message').textContent = 'La página ha cargado.';
        };

        // Evento onclick
        document.getElementById('myButton').onclick = function() {
            document.getElementById('message').textContent = '¡Has hecho clic en el botón!';
        };

        // Evento onmouseover
        document.getElementById('myButton').onmouseover = function() {
            document.getElementById('message').textContent = '¡Estás sobre el botón!';
        };

        // Evento onmouseout
        document.getElementById('myButton').onmouseout = function() {
            document.getElementById('message').textContent = '¡Has salido del botón!';
        };