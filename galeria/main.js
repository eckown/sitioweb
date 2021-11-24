const grid = new Muuri('.grid',{
    layout:{
        rounding:false
    }
});
window.addEventListener('load', () => {
    grid.refreshItems().layout();
    document.getElementById('grid').classList.add('img-load');

    const enlaces = document.querySelectorAll('#navegacion a');
    enlaces.forEach((elemento) => {
        elemento.addEventListener('click', (evento) => {
            evento.preventDefault();
            enlaces.forEach((enlace) => enlace.classList.remove('activa'));
            evento.target.classList.add('activa');

            const categoria = evento.target.innerHTML.toLowerCase();
            categoria === 'todas' ? grid.filter('[data-categoria]'):            grid.filter(`[data-categoria = ${categoria}]`);
        });
    });
    
    const overlay = document.getElementById('overlay');
    document.querySelectorAll('.grid .item img').forEach((elemento) => {
        elemento.addEventListener('click', () => {
            const ruta = elemento.getAttribute('src');
            overlay.classList.add('activa');
            document.querySelector('#overlay img').src =ruta;
        });
    });

    document.querySelector('#btnc').addEventListener('click', () =>{
        overlay.classList.remove('activa');
    });

    overlay.addEventListener('click', (evento) => {
        evento.target.id === 'overlay' ? overlay.classList.remove('activa') : "";
    });
});