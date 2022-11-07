// let numbers = [10,220,300,5000,1];
// numbers.sort();

// numbers.sort((a,b) => {
//     return b-a;
//     console.log(numbers);
// });

// numbers.reverse();
// console.log(numbers);


let students =[
    {id:1, name: "Arun"},
    {id:3, name: "b"},
    {id:4, name: "c"},
    {id:6, name: "e"},
    {id:5, name: "F"},
];

students.sort((a,b) => {

    // numA = a.name.toLowerCase();  
    // numB = b.name.toLowerCase();  
    // if(numA < numB){
    //     return -1;
    // }
    // if(numA > numB){
    //     return 1;
    // }
    // return 0;

    if(a.id < b.id){
        return -1;
    }

    if(a.id > b.id){
        return 1;
    }
    return 0
});

console.log(students);

