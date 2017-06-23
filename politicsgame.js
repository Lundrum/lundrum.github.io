function changeParliament(){

	var circles = document.getElementsByClassName("circle");
	circles[10].style.background = "blue";
	
}

/* function checkParliament(){
	
	var cols = document.getElementsByClassName("parl-container");
	var govColour = window.getComputedStyle(document.getElementsByClassName("circle")[0], null).getPropertyValue("background-color"); //returns rgb
	alert(govColour);
	
	for(i=0; i<cols.length; i++){
		
		var currentCol = cols[i];
		
		for(j=0; j<currentCol.length; j++){
			
			//check if colour discrepancy and call changeParliamentLayout if so
			
			if((currentCol.getPropertyValue("background-color") != govColour) && (j!=0)){
				
				
				
			}
			
		}
		
	}
	
} */

function changeParliamentLayout(colIndex, circleIndex, colour){
	
	//go to colour grouping
	
}

function setupParliament(){
	//colDict, govCol
	
	
	var govCol = "blue";
	var cols = document.getElementsByClassName("parl-container");
	var originalCol = document.getElementById("parl-container-original");
	var circles = document.getElementsByClassName("circle"); 
	var colDict = {"blue":317, "red":262, "orange":12, "yellow":35, "green":1};
	orderedDict = orderDict(colDict);
	
	/* for(i=0; i<cols.length-1;, i++){
		
		for(j=0; j<cols[i].getElementsByClassName["circle"].length; j++){
			
			
			
		}
		
	} */
	
	// do government first, assign white to non filled spaces
	var colSpace = 30; // number of circles in each col
	var fullCols = Math.floor(colDict[govCol]/colSpace) - 1; //cols to fully fill, -1 because of excluded original col
	var lastCol = colSpace - (colDict[govCol] % colSpace); //number of spaces to fill in last col
	
	if(lastCol != 0){
		fullCols = fullCols + 1;
	}

	for(i=0; i<colDict[govCol]; i++){
		
		circles[i].style.background = govCol;
		
	}
	
	for(i=colDict[govCol]; i<colDict[govCol]+lastCol; i++){
		
		circles[i].style.background = "white";
		
	}
	
	// split government from opposition
	
	cols[fullCols].style.marginLeft = "300px";
	
	var cumulativeFilled = colDict[govCol]+lastCol; //how many circles already filled
	
	for(i=1; i<orderedDict.length; i++){
		
	    for(j=cumulativeFilled; j<cumulativeFilled+colDict[orderedDict[i]]; j++){
			
			circles[j].style.background = orderedDict[i];
			
		}
		
		cumulativeFilled = cumulativeFilled + colDict[orderedDict[i]];
		
	}
	
	
	
}

function orderDict(dict){
	//works normally, returns array with largest value at index 0, next at 1 and so on
	
	var vals = Object.values(dict);
	var keys = Object.keys(dict);
	
	var sortedCols = [];
	vals.sort(function(a,b){return b-a});
	
	
	for(i=0; i<vals.length; i++){
		
		for(j=0; j<keys.length; j++){
			if(dict[keys[j]] == vals[i]){ //checks if already present
					
					sortedCols.push(keys[j]);
					
				}
				
			}
			
		}
		
	return sortedCols;
		
	}
	
	

function nextTurn(){
	
	document.getElementById("action1").innerHTML = "Your government is popular, Prime Minister. Polling shows us 10% ahead of the nearest opposition."
	document.getElementById("action2").innerHTML = "Internal struggles are beginning to emerge. The right wing of your party is not happy with some of your moves in education"
	document.getElementById("action3").innerHTML = "The budget outlook is good, and we are running a surplus."
	
	
}


function removeActionNodes(){
	
	var actionContainer = document.getElementById("action-container");
	while(actionContainer.hasChildNodes()){
		actionContainer.removeChild(actionContainer.lastChild);
		
	}
	
	
}

function policyAction(){
	
	removeActionNodes();
	
	var actionContainer = document.getElementById("action-container");
	var policyList = document.createElement("ul");
	
    actionContainer.appendChild(policyList);
	
	var policy1 = document.createElement("li");
	var policy2 = document.createElement("li");
	var policy3 = document.createElement("li");
	var policy4 = document.createElement("li");
	var policy5 = document.createElement("li");
	var policy6 = document.createElement("li");
	
	policy1.innerHTML = "tuition fees";
	policy2.innerHTML = "corporation tax";
	policy3.innerHTML = "personal tax";
	policy4.innerHTML = "foxhunting";
	policy5.innerHTML = "free school lunches";
	policy6.innerHTML = "nationalise railways";
	
	policyList.appendChild(policy1);
	policyList.appendChild(policy2);
	policyList.appendChild(policy3);
	policyList.appendChild(policy4);
	policyList.appendChild(policy5);
	policyList.appendChild(policy6);

	
	
}