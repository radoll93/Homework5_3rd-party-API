// current date 

var currentdayEl = $('#currentDay');
var today = moment();

currentdayEl.text(today.format('dddd, MMMM Do YYYY'));

// time setting

var inputtext = $('.input-group-text');
var time = 9;

for(var i=0; i<inputtext.length; i++){

    if(time<12) {
    inputtext[i].innerHTML =  time +' AM';
    time += 1;
    } else if(time ===12) {
        inputtext[i].innerHTML =  time +' PM';
        time += 1;
    }    else {
        inputtext[i].innerHTML =  time-12 +' PM';
        time += 1;
    } 

}

//click save button -> save to local starage


var savebtn = $('.btn');
var textarea = $('.form-control');
var listobjects = [];



savebtn.click(function listsave (event) {
    event.preventDefault();
    var btntodo = $(event.target).prev();
    var btntime = btntodo.prev();


    var listobject = listobjects[i] 
    listobject = {
        time : btntime.text(),
        todo : btntodo.val()
    }

    listobjects.push(listobject);


    storetodo();
    
});

function storetodo () {
    localStorage.setItem("listobjects", JSON.stringify(listobjects));
}


function init () {
    if (lastlist !== null) {
        listobjects = lastlist;
    } else {
        return;
    }
    rendertodoList();
}

//local storage -> save 
var lastlist = JSON.parse(localStorage.getItem("listobjects"));

    function rendertodoList() {

        for(var i=0; i<inputtext.length; i++) {
            for(var j=0; j<lastlist.length; j++){
            if(inputtext[i].innerHTML == lastlist[j].time) {
                textarea[i].innerHTML = lastlist[j].todo;
            }
        }}

    };

    

init();


//time check -> add attribute

var nowtime = moment().format("HH");


for(var i=0; i<inputtext.length; i++){
    var inputEl = inputtext[i];
    var nowformat = moment(inputEl.innerHTML, 'h A');
    var hourformat = nowformat.format("HH");

    if(hourformat == nowtime){
         inputEl.nextElementSibling.classList.add('bg-danger');
        inputEl.nextElementSibling.classList.add('text-light');
    } else if(hourformat < nowtime) {
        inputEl.nextElementSibling.classList.add('bg-warning');
        inputEl.nextElementSibling.classList.add('text-light');
    } else if(hourformat > nowtime) {
         inputEl.nextElementSibling.classList.add('bg-dark');
         inputEl.nextElementSibling.classList.add('text-light');
    }

}




