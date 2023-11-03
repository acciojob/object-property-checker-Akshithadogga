let sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };
let arr=Object.keys(sampleObject);
function hasKey(key) {
  //   write your code here
	
	
	if(key.length<=100){
		 let validstr=key.match(/^[a-zA-Z0-9]+$/);
		if(validstr){
		
			return arr.includes(key); ;
		}
	}
	else if(key==undefined){
		return false;
	}
	else{
		return false;
	}
}

// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));