/* Jquery + AJAX + JS + JSON*/
/* => é o fuction*/
// $('#btnEnviar').click(function(){});
$('#BtnEnviar').click((e) =>{
    e.preventDefault();
    //Criar objeto com os dados do Formulário
    let dataForm ={
        setName: $('#nome_html').val(),
        setEmail: $('#email_html').val(),
        setPhone: $('#telefone_html').val(),
        setWhats: $('#whatsapp_html').val()
    }
    // Validar os campos dp Formulário

    if(dataForm.setName.length <3){
        $('.msg-error').text("Nome Invalido!!!!").show();
        return false;
    }else if(dataForm.setEmail.length < 7){
        $('.msg-error').text('Email Invalido!!!').show();
        return false;
    }else if(dataForm.setPhone.length < 11){
        $(".msg-error").text('Telefone Invalido!!!').show();
        return false;
    }else if(dataForm.setWhats.length < 11){
        $('.msg-error').text('Whatsapp Invalido!').show();
        return false;
    }
    $('.msg-error').hide();

    let urlAction = 'envia.html';

    $.ajax({
        url: urlAction,
        type: 'Post',
        data: dataForm,
        dataType: 'json',
        asyc: true

    })

    console(dataForm)
});
