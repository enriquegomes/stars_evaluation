$(document).ready(function () {

    $('a.open').confirm({
        theme: 'supervan',
        columnClass: 'col-md-10',
        draggable: false,
        content:
            '<div class="row justify-content-between">' +
            '<div class="rate col-8">' +
            '<input type="radio" id="star5" name="rate" value="5" />' +
            '<label for="star5" title="5">5 stars</label>' +
            '<input type="radio" id="star4" name="rate" value="4" />' +
            '<label for="star4" title="4">4 stars</label>' +
            '<input type="radio" id="star3" name="rate" value="3" />' +
            '<label for="star3" title="3">3 stars</label>' +
            '<input type="radio" id="star2" name="rate" value="2" />' +
            '<label for="star2" title="2">2 stars</label>' +
            '<input type="radio" id="star1" name="rate" value="1" />' +
            '<label for="star1" title="1">1 star</label>' +
            '</div>' +
            '</div>' +
            '<div class="row">' +
            '<div class="input-field col s12">' +
            '<textarea id="textarea1" class="materialize-textarea white-text" maxlength="500"></textarea>' +
            '<span class="helper-text red-text" id="caracter"></span>' +
            '<label for="descrip">Descrição</label>' +
            '</div>' +
            '</div>' ,
        onOpen: function () {
            //Contador de Caracters
            $("#textarea1").keyup(function () {
                var max = parseInt($("#textarea1").attr('maxlength'));
                var tamanho = $('#textarea1').val().length;
                var newLength = max - tamanho;
                if (newLength > 0) {
                    $("#caracter").html(newLength + " caracteres restantes");
                } else {
                    $("#caracter").html(null);
                }
            });
        },
        buttons: {
            Cancelar: {
                text: '<strong>Cancelar</strong>',
            }, Confirmar: {
                text: '<strong>Confirmar</strong>',
                action: function () {
                    $.alert({
                        title: "Obrigado",
                        content: "por avaliar, tenha um ótimo curso",
                        icon: "fas fa-thumbs-up",
                        theme: 'modern',
                        draggable: false,
                    });
                }
            }
        }

    });
});
