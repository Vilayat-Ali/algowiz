export const BubbleSort = (arr: number[], order: number = 0) => {

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

    // Optimisation:
    // -------------
    // if no swaps are made in a inner loop then the
    // array is already sorted and we will end the 
    // sorting

    let isSwapped: boolean = false;

    for(let i=0; i<arr.length; i++){
        for(let j=0; j< (arr.length - i - 1); j++){
            if(order === 0){
                // ASCENDING
                if(arr[j] > arr[j + 1]){
                    // swap
                    isSwapped = true;
                }
            }
            // DESCENDING
            if(arr[j] < arr[j + 1]){
                // swap
                isSwapped = true;
            }
        }

        // stop sorting if no swaps are made in the inner loop
        if(!isSwapped){
            break;
        }
    }
}