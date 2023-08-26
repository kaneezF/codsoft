(function(){

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    //button functionality
    buttons.forEach(function(button){
        button.addEventListener('click' , function(e){
            let value = e.target.dataset.num;
            screen.value += value;

        })
    });

    //equal button functionality
    equal.addEventListener('click' , function(e){
        //if screen is empty and equal button is clicked then show nothing
        if(screen.value === ''){
            screen.value = '';
        }
        else{
            //if screen is not empty show the answer
            let answer = eval(screen.value);
            screen.value = answer;
        }
    });

        //clear button functionality
        clear.addEventListener('click' , function(e){
            screen.value = "";
        })



})();