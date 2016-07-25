function selectionSort(){
	var min;
	for(var i = 0; i < this.dataStore.length - 1; ++i){
		min = i;
		for(var j = i + 1; j < this.dataStore.length; ++j){
			if(this.dataStore[j] < this.dataStore[min]){
				min = j;
			}
		}
		swap(this.dataStore, i, min);
		console.log(this.toString());
	}
}
