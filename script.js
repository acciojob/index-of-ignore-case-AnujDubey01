function indexOfIgnoreCase(s1, s2) {
  // Convert both strings to lowercase for case-insensitive comparison
  const str1 = s1.toLowerCase();
  const str2 = s2.toLowerCase();

  if (str1.includes(str2))
    return str1.indexOf(str2);
  else
    return -1;
}

// Do not change below
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
