function partition(arr, low, high) {
    const pivot = arr[low]; // Choose the left-most element as the pivot
    let i = low + 1;
    let j = high;
  
    while (true) {
      while (i <= j && arr[i] < pivot) {
        i++;
      }
      while (i <= j && arr[j] > pivot) {
        j--;
      }
      if (i <= j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      } else {
        break;
      }
    }
  
    [arr[low], arr[j]] = [arr[j], arr[low]];
    return j;
  }
  
  function quicksort(arr, low, high) {
    if (low < high) {
      const pivotIndex = partition(arr, low, high);
      quicksort(arr, low, pivotIndex - 1);
      quicksort(arr, pivotIndex + 1, high);
    }
  }
  
  function sort(arr) {
    quicksort(arr, 0, arr.length - 1);
  }
  
  // Example usage:
  const arr = [8, 3, 1, 7, 0, 10, 2];
  sort(arr);
  console.log(arr);
  