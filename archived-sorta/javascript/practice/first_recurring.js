
//first recurring character

let array1 = [2,3,4,5,6,4,1]; // 4
let array2 = [1,2,3,5,1,4,3,6]; // 1
let array3 = [1,2,3,4,5]; // undefined

function findFirstRecurring(array){
	for(let i = 0; i < array.length; i++){
		for(let j = i + 1; j < array.length; j++){
			if(array[i] === array[j])
				return array[j];
		}	
	}	
	return undefined;
}

findFirstRecurring(array1);

function firstRecurringCharacter2(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i]
    } else {
      map[input[i]] = i;
    }
  }
  return undefined
}