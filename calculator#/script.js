let input = document.getElementById("display");
let buttons = document.querySelectorAll(".btn");

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
  button.addEventListener("click", (e) => 
    {
    const value = e.target.innerHTML;

    if (value === "=") {
      try {
        string = eval(string);
        input.value = string;
      } catch {
        input.value = "Error";
        string = "";
      }
    } 
    else if (value === "C") {
      string = "";
      input.value = string;
    } 
    else if (value === "D") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } 
    else {
      string += value;
      input.value = string;
    }
  });
});
