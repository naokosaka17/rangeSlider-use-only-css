 // Get all input elements in the document with class="controls"
  const inputs = document.querySelectorAll('.controls input');

  function handleUpdate(){
    //this.dataset == 'data-sizing="px"'
    //must add "|| ''" otherwise it will be "undefined"
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix)

  }
  // change event when handleUpdate
  inputs.forEach(input => input.addEventListener('change', handleUpdate))
  // when mouse over range,'px' changes every single times
  inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))
