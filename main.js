const kgInput = document.getElementById('kgInput');

document.getElementById('output').style.visibility='hidden';
kgInput.addEventListener('input', function(e){
    document.getElementById('output').style.visibility='visible';
    let kg = e.target.value;
    document.getElementById('boundsOutput').innerHTML = kg*2.20462;
    document.getElementById('gramOutput').innerHTML = kg*1000;
    document.getElementById('ozOutput').innerHTML = kg*35.274;
});