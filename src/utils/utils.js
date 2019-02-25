// first excercise
function getSmallestNumberOfArray(max) {
  var arr = [];
  for (var i = 0; i < max; i++)
  {
    //populate empty array with numbers
    arr[i] = Math.floor(Math.random() * Math.floor(max));
  }
  // given a data set for example array I return the smallest number
  const min = Math.min(...arr);
  return min;
  
}


console.log(getSmallestNumberOfArray(500));


//exercise two

function palindrome(str) {
  // Setting the regexp
  var regexp = /[^A-Za-z0-9]/g;
  // converting all string to lowercase
  str = str.toLowerCase().replace(regexp, '');
  var lenght = str.length;

  for (var i = 0; i < lenght/2; i++) {
    //If the characters from each part matches continue with the for loop
    if (str[i] !== str[lenght - 1 - i]) {
        return false; // if they don't match anymore return false
    }
  }
  return true;
 }
 console.log("is a palindrome? " + palindrome("Race Car"));