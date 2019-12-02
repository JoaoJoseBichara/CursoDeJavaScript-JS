/**
 * Estudos Jquery
 * @author Welker Campos
 */

$(document).ready(function () {
    $('#top').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 'slow')
    })
})