const input = document.getElementById('input');
const output = document.getElementById('output');

input.addEventListener('keyup', bunnyBuilder);

function bunnyBuilder() {
  
  const padding = 3;
  const lines = input.value.split('\n');
  const signWidth = Math.max(...lines.map(l=>l.length))+padding*2;
  
  const centeredLines = lines.map(line => {
    const leftSpacing = " ".repeat((signWidth - line.length)/2);
    const rightSpacing = " ".repeat(signWidth - line.length - leftSpacing.length);
    return `|${leftSpacing}${line}${rightSpacing}|`;
  });
  const signHorizontalBar = '-'.repeat(signWidth+2);

  // Build the bunny
  const bunnySpacing = signWidth/2 - 8 <= 0 ? "" : " ".repeat(signWidth/2 - 8);
  const bunny = `${bunnySpacing}(\\__/) ||\n${bunnySpacing}(\u2022\u3145\u2022) ||\n${bunnySpacing}/    \u3065`;

  output.value = `${signHorizontalBar}\n${centeredLines.join('\n')}\n${signHorizontalBar}\n${bunny}`;
}