function insort(){
	var i,j;
	var test;
	for(i = 1; i < this.dataStore.length; ++i){
		test = this.dataStore[i];
		j = i - 1;
		while(!(j < 0) && test < this.dataStore[j]){
			this.dataStore[j+1] = this.dataStore[j];
			j--;
		}
		this.dataStore[j+1] = test;
	}
}

function shsort(){
	var i,j,test;
	var d = Math.floor(this.dataStore.length / 2);
	while(d >= 1){
		for(i = d; i < this.dataStore.length; ++i){
			test = this.dataStore[i];
			j = i - d;
			while(!(j < 0) && test < this.dataStore[j]){
				this.dataStore[j+d] = this.dataStore[j];
				j = j - d;
			}
			this.dataStore[j+d] = test;
		}
		d = Math.floor(d / 2);
	}
}
