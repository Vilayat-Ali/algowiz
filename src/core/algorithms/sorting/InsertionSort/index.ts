export const InsertionSort = (arr: number[], order: number = 0) => {

    // complexity:
    // -----------
    // UNSORTED: O(n^2)
    // SORTED: O(n)

    // Parameters:
    // -----------
    // arr is the array of numbers to be sorted
    // order is the manner of sorting
    // order 0 means ascending order sorting
    // order 1 means descending order sorting

    for (let i = 1; i < arr.length; i++) { 
        let key: number = arr[i]; 
        let j = i - 1; 

        while (j >= 0 && (order === 0 ? arr[j] > key : arr[j] < key)) { 
            // shift elements
            arr[j + 1] = arr[j]; 
            j = j - 1; 
        } 

        // place key element
        arr[j + 1] = key; 
    } 
}

