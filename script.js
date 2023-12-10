$(document).ready(function() {
    $('header button').click(function(){ //cria uma animacao que ao apertar o header botton o id fprm aparece pra baixo
        $('form').slideDown();
    })

    $('#botao-cancel').click(function(){  //cria uma animao que ao apertar o #botao-cancel o id form se guarda pra cima
        $('form').slideUp();
    })

    $('Form').on('submit', function(e){ //previne comportamento padrao de atualizar a pagina quando submetido
        e.preventDefault();
        const  enderecoNovaImg = $('#endereco-imagem-nova').val(); //pega o endereco mandado pelo usuario
        const novoItem = $('<li style="display: none"></li>');
        $(
            `<img src='${enderecoNovaImg}'/>`
            ).appendTo(novoItem); //pega o enderecoNovaImg e salva dentro do li
        $(
            `<div class='overlay-imagem-link'>  
                <a href='${enderecoNovaImg}' target='_blank' title='Ver imagem em tamanho real'>
                    Ver imagem em tamanho real
                </a>
            </div>
            `).appendTo(novoItem);
            $(novoItem).appendTo('ul');
            $(novoItem).fadeIn(1000);
            $('#endereco-imagem-nova').val('');
    })
})
