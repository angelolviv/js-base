//alert ('Hello world');
//document.write('<h1>Hello world</h1>');
//console.log('Hello world');
//var name=prompt('Enter yourname');
//document.write ('Hello ' + name);

//var year = Number(prompt('year'));
//var month = Number(prompt('month'));
//var day = Number(prompt('day'));

//var sum = add(year, month) + day;
//document.write(sum);

//function add(a, b) {
//    return a+b;
//}

// function getage(age) {
//     var compareResult = age > 18;
//     if (compareResult) {
//         return 'Adult';
//     } else {
//         return 'Child';
//     }
// }

// var age = Number(prompt('Enter your age'));
// var result = getage(age);
// document.write(result);


function resolve(a, b, c) {
    var d = Math.pow(b, 2) - (4 * a * c);
    if (d < 0) {
        return 'D=' + d + '. Дійсних коренів немає.';
    }
    else if (d === 0) {
        var x = -b / (2 * a);
        return 'D= ' + d + 'x =' + x.toPrecision(2);
    }
    else {
        var x1 = (-b + Math.sqrt(d)) / (2 * a);
        var x2 = (-b - Math.sqrt(d)) / (2 * a);
        return 'D= ' + d + '. x1= ' + x1.toPrecision(2) + ', x2 = ' + x2.toPrecision(2) + '.';
    }
}

var a = Number(prompt('Введіть значення а'));
var b = Number(prompt('Введіть значення b'));
var c = Number(prompt('Введіть значення с'));
var result = resolve(a, b, c);
document.write(result);
