function main() {
    //problem1();
    problem2();
    //problem3();
    //problem4();
}


function problem1() {
    let arr = [];
    do {
        var input = prompt("Type something that makes you happy. enter q to quit.");
        arr.push(input);

         if (input === "q"){
            arr.pop();
             arr.forEach(function (element) {
                console.log(element);
            })
    }

    }while (input !== "q")








}


function problem2() {
    let input2= prompt("enter one of the following words to translate to spanish: [learn, help, water, milk, only");
    switch (input2) {
        case "learn":
        case "Learn":
            alert("aprender");
            break;
        case 'help':
        case 'Help':
            alert('ayuda');
            break;
        case 'water':
        case 'Water':
            alert("agua");
            break;
        case 'milk':
        case 'Milk':
            alert("leche");
            break;
        case 'only':
        case 'Only':
            alert("solo");
            break;
        default:
            alert("Error");
            break;

    }

}


function problem4() {

    class Books{

        constructor(name, rating, genre, author){

            this.name= name;
            this.rating= rating;
            this.genre= genre;
            this.author= author;
        }

        changeRating(){
            let whatRating= prompt("what do you want to change the rating to?");

            let newRating= this.rating= whatRating
        }
    }


}

let book1= new Books("Splintered", 10,"fantasy","A.G. Howard");
let book2= new Books("outlires",8,"Psychology","Malcom Gladwell");
let book3= new Books("The Go Giver",10,"non-fiction","john david mann and bob burg");



main();