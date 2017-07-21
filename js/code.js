document.body.innerHTML = '';

var nums = [1,2,3];


for (var i = 0; i < nums.length; i++) {


    var num = nums[i];


    var elem = document.createElement('div');
    elem.textContent = num;

    elem.addEventListener('click', (function(numCopy) {
        return function() {
            alert(numCopy);
        };
    })(num));

    document.body.appendChild(elem);
};


/*var a = 0;
document.getElementById('num1').innerHTML = a ;
document.getElementById('title1').innerHTML = 'Cat left';

var b = 0;
document.getElementById('num2').innerHTML = b ;
document.getElementById('title2').innerHTML = 'Cat Right';
var elem = document.getElementById('cat1');
elem.addEventListener('click', function(){
a += 1;
document.getElementById('num1').innerHTML = a ;
return a;
}, false);

var elem = document.getElementById('cat2');
elem.addEventListener('click', function(){
b += 1;
document.getElementById('num2').innerHTML = b ;
return b;
}, false);
*/
