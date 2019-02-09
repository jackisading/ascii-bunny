const input = document.getElementById('input');
const output = document.getElementById('output');

input.addEventListener('keyup', inputHandler);

function inputHandler() {
  const lines = input.value.split('\n');
  const signWidth = Math.max(...lines.map(l=>l.length));
  
  const centeredLines = lines.map(line => {
    const leftSpacing = " ".repeat((signWidth - line.length)/2);
    const rightSpacing = " ".repeat(signWidth - line.length - leftSpacing.length);
    return `${leftSpacing}${line}${rightSpacing}`;
  });
  output.value = centeredLines.join('\n');
}