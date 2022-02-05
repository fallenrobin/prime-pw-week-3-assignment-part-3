console.log('****** Part Supply *******');
// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40
//    & console.log the variable
console.log('1. Number of partsNeeded:');
let partsNeeded = 40;
console.log(partsNeeded);
// 2. Create a variable call 'supplyChanges' set it to an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11
console.log('2. Array of supplyChanges:');
let supplyChanges = [3,5,-6,0,7,11]
console.log(supplyChanges);
// 3. Console log the value of the second item in the 'supplyChanges' array
console.log('3. Second supplyChange is:');
console.log(supplyChanges[1]);
// 4. The last item was added by mistake. Remove it from the 'supplyChanges'
//    array & console.log the value removed.
console.log('4. Removed item:');
let removedItem = supplyChanges.pop();
console.log(removedItem);

// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
console.log('5. Adding 25 to supplyChanges.');
supplyChanges.push(25);

// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.'
//    - if the value is 0, log 'No Change.'
//    - if the value is negative, format the log as 'Removed x parts.'
console.log('6. Showing supplyChanges...');
for ( x = 0; x < 6; x++) { //Why can't I use supplyChanges.length for the condition instead of 6? In the week 3 video for Loops Practical he does for hand.length when looping through a hand (array) of cards.
  if (supplyChanges[x]>0){
  console.log(`Added ${supplyChanges[x]} parts.`);
}
  else if (supplyChanges[x]===0) {
      console.log(`No change. (${supplyChanges[x]})`);
    }
  else {
        console.log(`Removed ${supplyChanges[x]} parts.`);
      }
} //is it better to have this as else if/else statements? It works this way for me.

// STRETCH GOALS
console.log('---  Stretch Goals  ---');
console.log('7. Showing supplyChanges with "for of" loop');
// 7. Rewrite the `for` loop from #6 as a `for of` loop.
for (number of supplyChanges) {
  if (number>0) {
    console.log(`Added ${number} parts.`)
  }
  else if (number===0) {
    console.log(`No change. ${number} parts.`)
    }
  else //note to self: do NOT put anything in parentheses for ELSE statements!
    console.log(`Removed ${number} parts.`)
    //why do i not put curly braces on the else statement? It broke it when I did...
}

// 8. Write a loop to determine the total number of parts available by
//    adding up all the numbers in the 'supplyChanges' array.
console.log('8. Total supplies available is:');
sum = 0
for (i = 0; i < supplyChanges.length; i++) {
sum+=supplyChanges[i];
// console.log(sum);//<= I discovered this will log each loop, showing the math each time.
}
console.log(sum);
//Lerned method from: https://www.delftstack.com/howto/javascript/javascript-sum-of-array/

// 9. We have a large stash of parts in our warehouse that we
//    need to box up and get ready for shipment.
//    There are 572 parts in total, and each box holds 7 parts.
//    Use a `while` loop to keep adding parts to boxes until
//    no more boxes can be filled.
//    Then log how many boxes were filled, and how many parts are left over.
console.log('9. Filling boxes with a "while" loop');
i = 572
filledBoxes = []
while (i>=6) {
    i-=7;
     //console.log(i); //this will show me every loop as the 572 counts decrements by 7
    filledBoxes.push([i]);
}
//Idea: What if every loop creates a "filled box" (maybe just the number 1) in an array called "boxes," so that later I can console.log(boxes.Length);
console.log(`There are ${filledBoxes.length} filled boxes.`);
console.log(`There are ${i} parts left.`);//I discovered that automatically i will reflect the 'remainder' number of parts once the loop jumps out of itself
