
var q1 = document.getElementById('q1');

const block = document.getElementById('block-next');
function start(){
    document.getElementById('start').style.display = 'none';
    txt();
}
function txt(){
    document.getElementById('q1').style.display = 'block';
    setTimeout(() => {
        document.getElementById('o1').style.opacity = '1';
        o1.style.transition = '2s';
      }, 500);  
}
function man(){
    document.getElementById('no').style.display = 'none';
    document.getElementById('o1').style.backgroundColor = 'purple';
    mans();
}
function wom(){
    document.getElementById('yes').style.display = 'none';
        document.getElementById('o1').style.backgroundColor = 'purple';
        woms();
}
function mans(){
    document.getElementById('ma').style.display = 'block';
    next();
}
function woms(){
    document.getElementById('ma1').style.display = 'block';
    next();
}
function next(){
$('#block-next').html('<div class="o1" id="o2"><button class="o" id="yes" onclick="nextTwo()">Спасибо</button></div>');
document.getElementById('o2').style.opacity = '1';
$("#block-next").css("display","block");
}
function nextTwo(){
$('#block-next').append('<h1 class="block3" id="q3">Ты готов продолжать?</h1>')
nextThree();
}
function nextThree(){

$('#block-next').append('<div class="block2" id="o1"><button class="o" id="yeas" onclick="blockOne()">Да</button><button class="ot" id="not" onclick="blockTwo()">Нет</button></div>')
}
function blockOne(){
    document.getElementById('not').style.display = 'none';
    $('#block-next').append('<h1 class="block3" id="q3">Хорошо, я вижу что ты отвественный слушатель.</h1>')  
    $('#block-next').append('<h1 class="block1" id="q3">Для начала я думаю нам стоит познакомиться.</h1>')  
    $('#block-next').append('<h1 class="block1" id="q3">Ты знаешь кто я?</h1>')  
    $('#block-next').append('<div class="block2" id="o1"><button class="o" id="ys" onclick="blockFour()">Да</button><button class="ot" id="ny" onclick="blockThree()">Нет</button></div>')
}
function blockTwo(){
$('#block-next').append('<div class="ma2" id="ma2"><img src="bye.jpg" alt="" class="man"></div>')
document.getElementById('yeas').style.display = 'none';

}
function blockThree(){
    $('#block-next').append('<div class="ma2" id="ma2"><img src="natali.jpg" alt="" class="man"></div>')
    $('#block-next').append('<div><h1 class="block1" id="q3">Усёк?</h1></div>') 
    $('#block-next').append('<div class="block2" id="o1"><button class="o" id="yeas" onclick="">Да</button><button class="ot" id="noo" onclick="">Нет</button></div>')
    document.getElementById('ys').style.display = 'none';
}
function blockFour(){
    $('#block-next').append('<div class="ma2" id="ma2"><img src="natali1.png" alt="" class="man"></div>')
    $('#block-next').append('<div class="block2" id="o1"><button class="o" id="yeas" onclick="">Пгнали!</button></div>')
    document.getElementById('ny').style.display = 'none';
}






