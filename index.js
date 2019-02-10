const input = document.getElementById('input');
const output = document.getElementById('output');



input.addEventListener('keyup', inputHandler);

function inputHandler() {
  console.log('\uffb5');
  console.log('\u00B7');
  console.log('\u3065');

//   console.log('(\\__/) ||\n(•ㅅ•) ||\n/ 　 づ');
  
// //   `
// //   (\__/)    ||
// //   (• &#12613; •)   ||
// //  /  　  づ  
// //   `

//   const padding = 3;
//   const lines = input.value.split('\n');
//   const signWidth = Math.max(...lines.map(l=>l.length))+padding*2;
  
//   const centeredLines = lines.map(line => {
//     const leftSpacing = " ".repeat((signWidth - line.length)/2);
//     const rightSpacing = " ".repeat(signWidth - line.length - leftSpacing.length);
//     return `|${leftSpacing}${line}${rightSpacing}|`;
//   });
//   const signHorizontalBar = '-'.repeat(signWidth+2);
//   output.value = `${signHorizontalBar}\n${centeredLines.join('\n')}\n${signHorizontalBar}\n${bunny}`;
}