//counter

// function counter() {

//     var minor = $('#minor');
//     var plus = $('#plus');
//     var count = $('#count').text(i);
//     var i = 1;
//     minor.click(function(){
//         count.text(i--);
//     })
//     plus.click(function(){
//         count.text(i++);
//     })

// }

//to do list

// function addItem() {
//     var value = $('#merda').val();
//     var template = $('.template').clone();
//     var add = $('#btnAdd');
//     var rmv = $('#btnRmv');
//     var target = $('#list');

//     add.click(function() {
//         $('#todoContent').html(value);
//         target.append(template);
//     })
// }

// Background change

function changeColor() {
  var btn = $("#btnChangeColor");
  btn.click(function () {
    $(".container-bg").toggleClass("bg-change");
  });
}

//letter Counter

function letterCounter() {
  $("#letterInput").keyup(function () {
    var value = this.value.length;
    $("#countText").text(value);
  });
}

//counter

function manualCounter() {
  var minor = $("#minorBtn");
  var plus = $("#plusBtn");
  var result = $("#resultCnt");
  var i = 0;

  minor.click(function () {
    result.text(--i);
  });

  plus.click(function () {
    result.text(++i);
  });
}

//To do ist

function toDoList() {
  var btn = $("#listBtn");

  //Create LIst Item with Handlebars on Click
  btn.click(function () {
    var input = $("#tdInput");
    var txt = input.val();

    if (txt !== "") {
      var template = $("#listItem-template").html();
      var compiled = Handlebars.compile(template);
      var target = $(".list");
      var listHTML = compiled({
        txt: txt,
      });

      target.append(listHTML);

      input.val("");

      //Remove created List Item on Click

      var rmvBtn = $(".btnRmvList");

      rmvBtn.click(function () {
        $(this).parent(".listItem").hide();
      });
    }
  });
}

function init() {
  changeColor();
  letterCounter();
  manualCounter();
  toDoList();
}

$(document).ready(init);
