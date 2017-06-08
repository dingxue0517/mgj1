


$(function () {
    $('.btn').click(function () {
        $.post('/',{userName:$('.uname').val(),pwd:$('.psd').val()},function () {

        })
    })
})