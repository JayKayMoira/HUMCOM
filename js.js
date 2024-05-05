const display = document.getElementById('display');
const buttons = Array.from(document.getElementsByTagName('button'));

buttons.map( button => {
  button.addEventListener('click', (e) => {
    const buttonText = e.target.innerText;
    const displayText = display.value;

    if(buttonText === 'C') {
      display.value = '';
    } else if(buttonText === '=') {
      try {
        display.value = eval(displayText);
      } catch {
        display.value = "Error"
      }
    } else {
      display.value += buttonText;
    }
  });
});