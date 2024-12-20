/* Bir obje dizisinde verilen isme sahip kişiyi bulan bir fonksiyon yazın.  

Adımlar:

find kullanılarak bir obje aranır.

Her obje için isim kontrolü yapılırç

İlk eşleşen obje döndürülür. */

const people = [
    {
        id: 1,
        firstName: "Edanur",
        lastName: "Korkmaz",
        age: 22
    },
    {
        id:2,
        firstName: "Elif",
        lastName: "Güner",
        age: 21
    },
    {
        id:3,
        firstName: "Ekin",
        lastName: "Çoban",
        age: 22
    },
    {
        id:4,
        firstName: "Berk",
        lastName: "Cloud",
        age: 17
    }
]

// Kullanıcıdan alınmamış hali

    function findNames(people,firstName){
        return people.find(person => person.firstName === firstName)
    }

    const foundName = findNames(people,"Edanur");

    console.log(foundName);

// Kullanıcıdan isim çekerek

    function userFindsName(people){
        const getName = prompt("Give me the name: ");
        const result = people.find(person => person.firstName === getName);

        if (result) {
            alert(`Here is your person: ${result.firstName} ${result.lastName}`);
            return result;
        }else {
            alert("You've entered wrong name or we do not have that kind of person.Try again.");
            return userFindsName(people);
        }
    }
    userFindsName(people);