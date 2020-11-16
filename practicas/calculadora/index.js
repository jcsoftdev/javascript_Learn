((d, lg) => {
  const $uno = d.getElementById("uno");
  const $dos = d.getElementById("dos");
  const $tres = d.getElementById("tres");
  const $input = d.getElementById("input");

  const btns = {
    uno: $uno,
    dos: $dos,
    tres: $tres,
  };
  // lg($input.textContent)
  

  const click1 = $uno.addEventListener("click", (e) => {
    lg(e.target.textContent)
    $input.innerHTML = `${$input.textContent}${e.target.textContent}`
    
  });


  // evnt igual 
  // lg(eval($input.textContent))

})(document, console.log);
