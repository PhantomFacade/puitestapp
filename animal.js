function Sheep(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = 'sheep';
    this.image = 'sheep.jpg';
}

function Cat(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = 'cat';
    this.image = 'cat.jpg';
}

function Shark(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = 'shark';
    this.image = 'shark.jpg';
}

let animals = [new Cat(), new Sheep(), new Shark()];
let names = ["Momo", "Cola", "Pizza", "Emmi", "Buck", "Sun", "Barry", "Apples"];


function getRandomIndex(maxIndex) {
    return Math.floor(Math.random() * maxIndex);
}

function generateRandomAnimal() {
    let randomIdx = getRandomIndex(animals.length);
    let randomAnimal = animals[randomIdx];

    if (randomAnimal instanceof Cat) {
        return new Cat(generateRandomName(), generateRandomAge());
    } else if (randomAnimal instanceof Sheep) {
        return new Sheep(generateRandomName(), generateRandomAge());
    } else if (randomAnimal instanceof Shark) {
        return new Shark(generateRandomName(), generateRandomAge());
    }
}

//  random name
function generateRandomName() {
    let randomIdx = getRandomIndex(names.length);
    return names[randomIdx];
}

// random age from 0 to 7
function generateRandomAge() {
    return getRandomIndex(7);
}

function onLoad() {
    var animal = JSON.parse(localStorage.getItem("MyAnimal"));

    var SavedAnimal = false;

    if (animal === null) {
        document.getElementById("storage").textContent = "Save Animal";

        animal = generateRandomAnimal();
    } else {
        document.getElementById("storage").textContent = "Clear Saved Animal";
        SavedAnimal = true;
    }
    //Updates Webpage
    document.getElementById('animal-properties').textContent = animal.name + "  " + animal.age + "years old";
    document.getElementById('animal-img').setAttribute("src", animal.image)

    document.getElementById("storage").addEventListener("click", function() {
        if (SavedAnimal) {

            localStorage.removeItem("MyAnimal");
            document.getElementById('storage').style.display = "none";
            document.getElementById("button-text").textContent = "Woo-hoo!Cleared!";
            document.getElementById("button-text").style.display = "block";


        } else {
            localStorage.setItem("MyAnimal", JSON.stringify(animal));
            document.getElementById('storage').style.display = "none";
            document.getElementById("button-text").textContent = "Woo-hoo!Saved!";
            document.getElementById("button-text").style.display = "block";
        }
    });
};


//    let animal = generateRandomAnimal();
//            console.log(animal)
// update the page based on the animal properties
//            document.getElementById('animal-properties').textContent = animal.name + "  " + animal.age + "years old";
//           let imageTag = document.getElementById('animal-img');
//            imageTag.setAttribute('src', animal.image);
//            imageTag.setAttribute('alt', animal.image_alt);

//        }