// Variable global para guardar el rol actual
let currentRole = 'admin';

document.addEventListener('DOMContentLoaded', function() {
    // Referencias a elementos
    let adminBtn = document.getElementById('adminBtn');
    let userBtn = document.getElementById('userBtn');
    let menuItems = document.querySelectorAll('.menu-item');

    // Evento clic en botón Admin
    adminBtn.addEventListener('click', function() {
        currentRole = 'admin';
        updateMenu();
        updateButtons();
    });

    // Evento clic en botón Usuario
    userBtn.addEventListener('click', function() {
        currentRole = 'user';
        updateMenu();
        updateButtons();
    });

    // eventos de mouse a cada item del menú
    menuItems.forEach(function(item) {
        item.addEventListener('mouseover', function() {
            item.classList.add('hover');
        });

        item.addEventListener('mouseout', function() {
            item.classList.remove('hover');
        });
    });

    // Inicializar menú para Admin
    updateMenu();

    // Función para actualizar visibilidad del menú
    function updateMenu() {
        if (currentRole === 'admin') {
            // Mostrar todos los items
            document.getElementById('item1').style.display = 'block';
            document.getElementById('item2').style.display = 'none';
            document.getElementById('item3').style.display = 'block';
            document.getElementById('item4').style.display = 'none';
        } else if (currentRole === 'user') {
            // Mostrar solo items 1 y 3
            document.getElementById('item1').style.display = 'block';
            document.getElementById('item2').style.display = 'none';
            document.getElementById('item3').style.display = 'block';
            document.getElementById('item4').style.display = 'none';
        }
    }

    // Función para actualizar estado de botones
    function updateButtons() {
        adminBtn.classList.remove('active');
        userBtn.classList.remove('active');

        if (currentRole === 'admin') {
            adminBtn.classList.add('active');
            // Mostrar todos los items para Admin
            document.getElementById('item1').style.display = 'block';
            document.getElementById('item2').style.display = 'block';
            document.getElementById('item3').style.display = 'block';
            document.getElementById('item4').style.display = 'block';
        } else {
            userBtn.classList.add('active');
            // Mostrar solo items 1 y 3 para Usuario
            document.getElementById('item1').style.display = 'block';
            document.getElementById('item2').style.display = 'none';
            document.getElementById('item3').style.display = 'block';
            document.getElementById('item4').style.display = 'none';
        }
    }
});
