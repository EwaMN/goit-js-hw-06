const textInput = document.querySelector("#validation-input");
const dataLength = textInput.getAttribute("data-length");

textInput.addEventListener("blur", () => {
    if (textInput.value.length == dataLength) {
        textInput.classList.add('valid')
        textInput.classList.remove('invalid')
    } else {
        textInput.classList.add('invalid')
        textInput.classList.remove(`valid`)
    }
});





/* 
Napisz skrypt, który przy utracie fokusu na polu input
 (zdarzenie blur) 
sprawdza jego zawartość na prawidłową liczbę 
wprowadzonych symboli.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>
Informacja o liczbie symboli, która powinna 
znajdować się w polu input, pokazuje się w jego 
atrybucie data-length.
Jeśli wprowadzono odpowiednią liczbę symboli, 
to border pola input staje się zielone, a jeśli 
liczba jest nieprawidłowa - czerwone.
Aby dodać style, używaj klas CSS valid i invalid,
 które już dodaliśmy do plików źródłowych zadania.*/