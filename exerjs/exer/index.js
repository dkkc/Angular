const array = [
    {
    name: 'Dariusz',
    surname: 'Kowalec',
    email: 'kowalecdariusz@gmil.com'
},
{
    name: 'Franek',
    surname: 'Kolasa',
    email: 'kolasa@com.pl'
},
]

const person = [
    {
      name: "Iron Mainden",
      members: ["Dickinson", "Guitar guy", "Drums guy", "Another"],
      activeSince: 1970,
      labels: ["Amy", "Universal", "Epic", "Capital"]
    },
    {
      name: "Coldplay",
      members: ["Chris Martin", "Keyboard guy", "Guitar guy"],
      labels: ["Amy", "Sony", "Disney"],
      activeSince: 1990
    },
    {
      name: "Foo Fighters",
      members: ["Dave Grohl"],
      labels: ["Foo", "Sony"],
      activeSince: 1991
    },
    {
      name: "Image dragons",
      members: ["Vocal guy", "Guitar guy", "Keyboard guy"],
      labels: ["Kaya Records", "Records"],
      activeSince: 1998
    }
  ];

const spliceArray = ["anioł", "klaun", "bęben", "mandarynka", "jesiotr"];
const index = spliceArray.indexOf('klaun');
const removedItem = spliceArray.splice(1,index);
console.log(removedItem, index);

// const reducer = person.reduce((acc, el) => {
//     if (el.activeSince > 1990) {
//       return [...acc, el.name];
//     }
//     return acc;
//   }, []);

//   const publishersArrays = person.map(l => l.labels);
//   const publishers = publishersArrays.reduce((prev, current) => {
//       return prev.concat(current);
//     //   return [...prev, current];
//   })

// const data = array.reduce((data, arr) => {
//     return [...data, arr]
// },[])  
// console.log(data);
// console.log(array.map(e => e.name));
// console.log("reducer", reducer);
// console.log("publishers", publishers);
