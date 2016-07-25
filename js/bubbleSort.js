function bubbleSort(){
	var numElements = this.dataStore.length;
	for(var i = numElements; i > 1; --i){
		for(j = 0; j < i - 1; ++j){
			if(this.dataStore[j] > this.dataStore[j+1]){
				swap(this.dataStore, j, j+1);
			}
		}
		console.log(this.toString());
	}
}
