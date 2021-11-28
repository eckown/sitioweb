$(document).ready(function(){

    var exp = {
        padre: $('#exp'),
        numeroSlides: $('#exp').children('.presentacion').length,
        posicion: 1,
        
    }
        exp.padre.children('.presentacion').first().css({
            'left': 0
        });

    //EDU
    var edu = {
        padre: $('#edu'),
        numeroSlides: $('#edu').children('.presentacion').length,
        posicion: 1
    }
    edu.padre.children('.presentacion').first().css({
        'left': 0
    });

    //sobre mi
    var mi = {
        padre: $('#mi'),
        numeroSlides: $('#mi').children('.presentacion').length,
        posicion: 1
    }
    mi.padre.children('.presentacion').first().css({
        'left': 0
    });



    var altoexp = function(){
        var alto = exp.padre.children('.activa').outerHeight();
        exp.padre.animate({
            'height': alto + 'px'
        });
    }
    //edu
    var altoedu = function(){
        var alto = edu.padre.children('.activa').outerHeight();
        edu.padre.animate({
            'height': alto + 'px'
        });
    }
    //sobre mi
    var altomi = function(){
        var alto = mi.padre.children('.activa').outerHeight();
        mi.padre.animate({
            'height': alto + 'px'
        });
    }
    altoexp();
    altoedu();
    altomi();

    $(window).resize(function(){
        altoexp();
        altoedu();
        altomi();
    });

    //Prueba de flechas con función
    /*
    document.querySelectorAll('#flecha-info a').forEach((elemento) => {
        
        elemento.addEventListener('click', function(e){
            const next = document.getElementById('#flecha-next');
            e.preventDefault();
        
            if (exp.posicion < exp.numeroSlides){
                exp.padre.children().not('.activa').css({
                    'left': '100%'
                });
        
                $('#exp .activa').removeClass('activa').next().addClass('activa').animate({
                    'left': '0'
                });
        
                $('#exp .activa').prev().animate({
                    'left': '-100%'
                });
        
                exp.posicion = exp.posicion + 1;
            } else{
                $('#exp .activa').animate({
                    'left': '-100%'
                });
        
                exp.padre.children().not('.activa').css({
                    'left': '100%'
                });
        
                $('#exp .activa').removeClass('activa');
                exp.padre.children('.presentacion').first().addClass('activa').animate({
                    'left': 0
                });
                exp.posicion= 1;
                }
                altoexp();
            });
            });
        
        
            //boton anterior
            document.querySelectorAll('.flecha-info a').forEach((elemento) => {
                const prev = document.getElementById('#flecha-prev');
                
                elemento.addEventListener('click', function(e){
                e.preventDefault();
            
                if (exp.posicion > 1){
        
                    exp.padre.children().not('.activa').css({
                        'left': '-100%'
                    });
                    
                    $('#exp .activa').animate({
                        'left': '100%'
                    });
                    
                    $('#exp .activa').removeClass('activa').prev().addClass('activa').animate({
                        'left': '0'
                    }); 
                    exp.posicion = exp.posicion - 1;
                }
                else{
                    exp.padre.children().not('.activa').css({
                        'left': '-100%'
                    });
        
                    $('#exp .activa').animate({
                        'left': '100%'
                    });
            
                    $('#exp .activa').removeClass('activa');
                    exp.padre.children().last().addClass('activa').animate({
                        'left': 0
                    });
                    exp.posicion = exp.numeroSlides;
                    }
                    altoexp();
                });
    }); 
});*/


//boton de siguiente exp
$('#exp-next').on('click', function(e){
    e.preventDefault();

    if (exp.posicion < exp.numeroSlides){
        exp.padre.children().not('.activa').css({
            'left': '100%'
        });

        $('#exp .activa').removeClass('activa').next().addClass('activa').animate({
            'left': '0'
        });

        $('#exp .activa').prev().animate({
            'left': '-100%'
        });

        exp.posicion = exp.posicion + 1;
    } else{
        $('#exp .activa').animate({
            'left': '-100%'
        });

        exp.padre.children().not('.activa').css({
            'left': '100%'
        });

        $('#exp .activa').removeClass('activa');
        exp.padre.children('.presentacion').first().addClass('activa').animate({
            'left': 0
        });
        exp.posicion= 1;
        }
        altoexp();
    });


    //boton anterior
    $('#exp-prev').on('click', function(e){
        e.preventDefault();
    
        if (exp.posicion > 1){

            exp.padre.children().not('.activa').css({
                'left': '-100%'
            });
            
            $('#exp .activa').animate({
                'left': '100%'
            });
            
            $('#exp .activa').removeClass('activa').prev().addClass('activa').animate({
                'left': '0'
            }); 
            exp.posicion = exp.posicion - 1;
        }
        else{
            exp.padre.children().not('.activa').css({
                'left': '-100%'
            });

            $('#exp .activa').animate({
                'left': '100%'
            });
    
            $('#exp .activa').removeClass('activa');
            exp.padre.children().last().addClass('activa').animate({
                'left': 0
            });
            exp.posicion = exp.numeroSlides;
            }
            altoexp();
        });

        //boton de siguiente edu
$('#edu-next').on('click', function(e){
    e.preventDefault();

    if (edu.posicion < edu.numeroSlides){
        edu.padre.children().not('.activa').css({
            'left': '100%'
        });

        $('#edu .activa').removeClass('activa').next().addClass('activa').animate({
            'left': '0'
        });

        $('#edu .activa').prev().animate({
            'left': '-100%'
        });

        edu.posicion = edu.posicion + 1;
    } else{
        $('#edu .activa').animate({
            'left': '-100%'
        });

        edu.padre.children().not('.activa').css({
            'left': '100%'
        });

        $('#edu .activa').removeClass('activa');
        edu.padre.children('.presentacion').first().addClass('activa').animate({
            'left': 0
        });
        edu.posicion= 1;
        }
        altoedu();
    });


    //boton anterior
    $('#edu-prev').on('click', function(e){
        e.preventDefault();
    
        if (edu.posicion > 1){

            edu.padre.children().not('.activa').css({
                'left': '-100%'
            });
            
            $('#edu .activa').animate({
                'left': '100%'
            });
            
            $('#edu .activa').removeClass('activa').prev().addClass('activa').animate({
                'left': '0'
            }); 
            edu.posicion = edu.posicion - 1;
        }
        else{
            edu.padre.children().not('.activa').css({
                'left': '-100%'
            });

            $('#edu .activa').animate({
                'left': '100%'
            });
    
            $('#edu .activa').removeClass('activa');
            edu.padre.children().last().addClass('activa').animate({
                'left': 0
            });
            edu.posicion = edu.numeroSlides;
            }
            altoedu();
        });

        //boton de siguiente mi
$('#mi-next').on('click', function(e){
    e.preventDefault();

    if (mi.posicion < mi.numeroSlides){
        mi.padre.children().not('.activa').css({
            'left': '100%'
        });

        $('#mi .activa').removeClass('activa').next().addClass('activa').animate({
            'left': '0'
        });

        $('#mi .activa').prev().animate({
            'left': '-100%'
        });

        mi.posicion = mi.posicion + 1;
    } else{
        $('#mi .activa').animate({
            'left': '-100%'
        });

        mi.padre.children().not('.activa').css({
            'left': '100%'
        });

        $('#mi .activa').removeClass('activa');
        mi.padre.children('.presentacion').first().addClass('activa').animate({
            'left': 0
        });
        mi.posicion= 1;
        }
        altomi();
    });


    //boton anterior
    $('#mi-prev').on('click', function(e){
        e.preventDefault();
    
        if (mi.posicion > 1){

            mi.padre.children().not('.activa').css({
                'left': '-100%'
            });
            
            $('#mi .activa').animate({
                'left': '100%'
            });
            
            $('#mi .activa').removeClass('activa').prev().addClass('activa').animate({
                'left': '0'
            }); 
            mi.posicion = mi.posicion - 1;
        }
        else{
            mi.padre.children().not('.activa').css({
                'left': '-100%'
            });

            $('#mi .activa').animate({
                'left': '100%'
            });
    
            $('#mi .activa').removeClass('activa');
            mi.padre.children().last().addClass('activa').animate({
                'left': 0
            });
            mi.posicion = mi.numeroSlides;
            }
            altomi();
        });

    });
    
    
    const openexp = document.getElementById('btn-expe');
    const openedu = document.getElementById('btn-edu');
    const opensomi = document.getElementById('btn-somi');
    const nodalexp = document.getElementById('exper');
    const nodaledu = document.getElementById('educa');
    const nodalsomi = document.getElementById('somi');
    const closeexp = document.getElementById('btn-c-exp');
    const closeedu = document.getElementById('btn-c-edu');
    const closesomi = document.getElementById('btn-c-somi');


    openexp.addEventListener('click', () => {
        nodalexp.classList.add('show');
    });
    closeexp.addEventListener('click', () => {
        nodalexp.classList.remove('show');
    });

    
    openedu.addEventListener('click', () => {
        nodaledu.classList.add('show');
    });
    closeedu.addEventListener('click', () => {
        nodaledu.classList.remove('show');
    });

    
    opensomi.addEventListener('click', () => {
        nodalsomi.classList.add('show');
    });
    closesomi.addEventListener('click', () => {
        nodalsomi.classList.remove('show');
    });