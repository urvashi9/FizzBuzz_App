$(document).ready(function(){
	var i;
	var j=prompt("Please enter a number greater than 1 for the FizzBuzz challenge");
	var num=parseInt(j,10);
	for(i=1;i<=num;i++)
	{
		if((i%3)==0 && (i%5)!=0)
		{
			//alert("Number is divisible by 3");
			$('<li class="list_items"></li>').appendTo('.list').html('<div class="content"></div><span>' + "Fizz!" + '</span>');
		}
		else if((i%5)==0 && (i%3)!=0)
		{
			$('<li class="list_items"></li>').appendTo('.list').html('<div class="content"></div><span>' + "Buzz!" + '</span>');
		}
		else if((i%3)==0 && (i%5)==0)
		{
			$('<li class="list_items"></li>').appendTo('.list').html('<div class="content"></div><span>' + "FizzBuzz!" + '</span>');
		}
		else{
			$('<li class="list_items"></li>').appendTo('.list').html('<div class="content"></div><span>' + i + '</span>');
		}
	}
});