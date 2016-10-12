var sort = {};

sort.max = function (i, j) {

	i = i || NaN;
	j = j || NaN;
	
	return (i > j) ? i : j;

};

sort.swap = function (array, i, j) {
	
	if (array.length < sort.max(i, j)) {
		return array;
	}

	var temp = array[i];
	array[i] = array[j];
	array[j] = temp;

	return array;
};

sort.bubbleSort = function (array, descent) {
	// initial array if no argument passed in
	array = array || [];
	descent = (!descent) ? false : true;

	if (array.length < 2) {
		return array;
	}

	// bubble sort
	var done;
	do {
		done = 1;
		for (var i = 0, temp = 0; i < array.length - 1; i++) { 
			
			if ( ((array[i] > array[i + 1]) && !descent) || 
				((array[i] < array[i + 1]) && descent) ) {

				temp = array[i];
				array[i] = array[i + 1];
				array[i + 1] = temp;
				done = 0;

			} else {
				continue;
			}
		}
	} while (done == 0);
	return array;
};

sort.testBubbleSort = function () {
	for (var i = 10; i >= 0; i--) {
		
		var testArr = [];
		
		for (var j = 0; j < 10; j++) {
			testArr[j] = Math.round(Math.random() * 50);
		}

		var descent = (i % 2);
		var msg = (descent) ? "After Sort (descent):" : "After Sort (ascent):";

		console.log("Before Sort:");
		console.log(testArr);
		console.log(msg);
		console.log(sort.bubbleSort(testArr, descent));
	}	
};

sort.heapSort = function (array, descent) {
	// initial array if no argument passed in
	array = array || [];
	descent = (!descent) ? false : true;

	if (array.length < 2) {
		return array;
	}

	var len = array.length;

	function maxHeapify(array, start, end) {

		start = start || 0;
		end = end || 0;

		var parent = start, 
		child = parent * 2 + 1;

		while (child <= end) {
			// find biggest one from two child nodes
			if (child + 1 <= end && array[child] < array[child + 1]) {
				child++;
			}

			if (array[parent] > array[child]) {

				return;
			
			} else {

				sort.swap(array, parent, child);
				
				parent = child;

				child = parent * 2 + 1;
			
			}

		}
	}

	for (var i = Math.floor(len / 2 - 1); i >= 0; i--) {
		maxHeapify(array, i, len - 1);
	}

	for (var lastUnSorted = len - 1; lastUnSorted > 0; lastUnSorted--) {
		sort.swap(array, 0, lastUnSorted);
		maxHeapify(array, 0, lastUnSorted - 1);
	}

	return (!descent) ? array : array.reverse();
};

sort.testHeapSort = function () {
	for (var i = 10; i >= 0; i--) {
		
		var testArr = [];
		
		for (var j = 0; j < 10; j++) {
			testArr[j] = Math.round(Math.random() * 50);
		}

		var descent = (i % 2);
		var msg = (descent) ? "After Sort (descent):" : "After Sort (ascent):";

		console.log("Before Sort:");
		console.log(testArr);
		console.log(msg);
		console.log(sort.heapSort(testArr, descent));
	}	
};
