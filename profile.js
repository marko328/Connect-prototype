const first = ["Name: Johny", "Place: Shony, Oclahoma", "Age: 33", "Profession: Programmer" ,"Hobies: Walking, Gaming, Reading",];

let text = "";
for (let i = 0; i < first.length; i++) {
  text += first[i] + "<br>";
}

document.getElementById("johny").innerHTML = text;

let say = "Top quote: Your time is limited, so don't waste it living someone else's life.<br> Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs"
document.getElementById("quote").innerHTML = say;

