fetch('./data/item.json')
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        appendData(data);
      })
      .catch(function (err) {
        console.log('error: ' + err);
      });
     
    function appendData(data) {
      //var counter = 0;
      var mainContainer = document.getElementById("myDiv");
      for (var i = 0; i < data.length; i++) {
        mainContainer.innerHTML += '<div id="'+data[i].id+'" class="card-deck h-30" onclick="myClick(id)"> ' +
          ' <img src="' + data[i].imagePath + '" class="card-img-top img-fluid rounded" loading="lazy" alt="...">' +
          ' <div class="card-body"> ' +
          ' <p id="p1" class="card-text">' + data[i].item + '</p> ' +
          ' <p id="p2" class="card-text">' + data[i].price + '</p> ' +
          '</div>' +
          '</div>';
      }
    }

    function myFilter() {
      var input, filter, cards, cardContainer, i;
      input = document.getElementById("myFilter");
      filter = input.value.toUpperCase();
      cardContainer = document.getElementById("myDiv");
      cards = cardContainer.getElementsByClassName("card");
      console.log(cards);
      for (i = 0; i < cards.length; i++) {
        title = cards[i].querySelector("#p1");
        if (title.innerText.toUpperCase().indexOf(filter) > -1) {
         cards[i].style.display = "";
          //cards[i].classList.remove("d-none")
        } else {
          cards[i].style.display = "none";
         // cards[i].classList.add("d-none");
        }
      }
    }
  
	$('#myOl').on('change','li',function(){
      $('#price',this).text( ($('#qty', this).val()) * (parseFloat($('#price', this).text())) );
		myAmount();
	});

   $('.btnPay').click(function(){
   window.print();
   });
   
    function myAmount(){ 
	
    var sum = 0;
    $('li #price').each(function() {	
        sum += parseFloat($(this).text());
    });
	console.log("sum >> " + sum);
	$('#totalAmt').text(sum);
   
    }
			
	 function myClick(e){

      let item, price, mainContainer, detail;
      detail = document.getElementById(e);
      item = detail.childNodes[3].firstElementChild.innerHTML;
      price = detail.childNodes[3].lastElementChild.innerHTML;
	
      $('#myOl').append ('<li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0"> ' +
              ' <text> '+ item +' </text>' +
              ' <input id="qty" type="number" class="form-control" style = "width: auto; text-align: center;" size ="1" value="1"></input> ' +
              ' <small id="price">'+ price +'</small> ' +
              ' <button class="btnDelete btn btn-outline-danger" onclick="parentNode.parentNode.removeChild(parentNode); myAmount();">X</button> </li>');
	
	setTimeout( function() {
    //do something special
	myAmount();
	}, 500);
}