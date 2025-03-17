// function arrayCounter (){ 
// 	array = [69,68,67,66]
// 	totalNumber = array.length
// 	console.log(totalNumber)

// 	for (i=array.length-1 ; i>=0; i--){
// 	console.log(array[i])
// 	}

// 	return 
	
// }
// arrayCounter()

//  reverse Print

function meIsLoop () { 
	
	// ARRAY created 
	array=[]

	// Loop 
	for (i = 0 ; i<=100; i++){
	array.push(i)
	}

	console.log("Array 1", array)
	//10
	dropArray=[]

	for (j = array.length-1 ; j>=0; j--){
		dropArray.push(array[j])	
	}

	console.log("Array 2", dropArray)
	
	return 

	
}
meIsLoop()
