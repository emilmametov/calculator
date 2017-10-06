var flag = false;
  	function getNumber(num) {
		var input_var = document.getElementById('input');
 		
 			if (flag==true){
 			input_var.value="";
 		flag=false;
 		input_var.value=num;
 		} else if (flag==false){
 			switch(num) {
 			case 1:
 				input_var.value +='1';
 				break;
 			case 2:
 				input_var.value +='2';
 				break;
 			case 3:
 				input_var.value +='3';
 				break;
 			case 4:
 				input_var.value +='4';
 				break;
 			case 5:
 				input_var.value +='5';
 				break;
 			case 6:
 				input_var.value +='6';
 				break;
 			case 7:
 				input_var.value +='7';
 				break;
 			case 8:
 				input_var.value +='8';
 				break; 
 			case 9:
 				input_var.value +='9';
 				break;
 			case 0:
 				input_var.value +='0';
 				break;
 			

 		}
 	}}

 	function getOperand(num) {
 		var input_var = document.getElementById('input');
 		switch(num){
 			case'+':
 				input_var.value += '+';
 				break;
 		 	case'-':
 				input_var.value += '-';
 				break;
 			case'*':
 				input_var.value += '*';
 				break;
 			case'/':
 				input_var.value += '/';
 				break;
 			case'^2':
 				input_var.value += '**2';
 				break;
 			case'.':
 				input_var.value += '.';
 				break;

 			
	 		}
 	}
 			
 	function compute() {
 		
 		var input_var = document.getElementById('input');
 		if (input_var.value.substr(-2)=="/0") {
 			alert("ты чёёёёёё???????");
 			input_var.value = "eror";
 		}
 		
 		input_var.value = eval(input_var.value);
 		flag=true;	// body...
 	}


 	function backspace(){
 		var input_var = document.getElementById('input')
 		var x = input_var.value;
 		if (x.length > 0) {
 			x = x.substring(0,x.length-1);
 			input_var.value = x;
 		}

 	}

 	function clearScreen() {
 		document.getElementById('input').value="";
 		document.getElementById('answer').value="";

 	}