//14. write a  function that returns first name and last name in an array of objects

function getName(name) {
    let fullNames = [];
    for (let i = 0; i < name.length; i++) {
        let person = name[i];
        let fullName = person.firstName + " " + person.lastName;
        fullNames.push(fullName);
    }

    return fullNames;
}

const name= [
    { firstName: 'Yogesh', lastName: 'Hg' },
    { firstName: 'Rudhra', lastName: 'Prasadh' },
    { firstName: 'shashank', lastName: 'Gowda' }
];

const fullNames = getName(name);
console.log(fullNames);