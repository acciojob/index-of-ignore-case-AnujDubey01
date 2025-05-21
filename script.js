function indexOfIgnoreCase(s1, s2) {
  // write your code here
	if (s1.includes(s2))
		return s1.indexof(s2);

	else return -1;
}

// // Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));

// function findFirstMatchIndex(str, substr) {
//   const strLen = str.length;
//   const subLen = substr.length;

//   for (let i = 0; i <= strLen - subLen; i++) {
//     let match = true;
//     for (let j = 0; j < subLen; j++) {
//       if (str[i + j] !== substr[j]) {
//         match = false;
//         break;
//       }
//     }
//     if (match) {
//       return i;
//     }
//   }

//   return -1; // not found
// }
