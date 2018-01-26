window.addEventListener('load', function(){
    document.write('<h1>Deal with it.</h1>');
})

var question1 = prompt('what is 2 + 2??');


if (parseInt(question1) === 4){
    var question2 = prompt('GREAT! what is 4 - 1??');

    if (parseInt(question2) === 3){
        var question3 = prompt('THAT\'s 3 QUICK MaTHss!! .... Now, is William the coolest person ever??');

        if(question3.toLowerCase() === "ja" || question3.toLowerCase === "yes" || question3.toLowerCase ==="a"){
            alert("Ty fam <3");
        } else if (question3.toLowerCase() === "nej" || question3.toLowerCase === "no"){
            alert("FK U")
        }

    }
} else {
    alert('NOOB just took an L, burn');
}
