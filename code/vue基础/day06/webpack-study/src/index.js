import $ from 'jquery'
import './css/1.css'

$(function () {
    $('li:odd').css('background-color', 'blue')
    $('li:even').css('background-color', 'red')
})