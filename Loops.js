const array=["RB","Soldiity","JS","ReacJS"];

// function printMe(item){
//     console.log(item)
// }

// array.forEach(printMe);

// array.forEach((index,item,arr)=>{
//     console.log(index,item,arr);
// })

const newArray=[
    {
        languageName:"Javascript",
        languageFiel:"JS"
    },
    {
        languageName:"React",
        languageFiel:"jsx"
    }, 
    {
        languageName:"Solidity",
        languageFiel:"sol"
    }
]

// newArray.forEach((item,index)=>{
//     console.table({languageName:item.languageName,languageFiel:item.languageFiel})

// })

const obj={
    name:"Zulkefal",
    email:"Z@gma.com"
}

// for (const key of  array)
//     {
//         console.log(key);
//     }

    array.map((item)=>{
        console.log(item)
    })
for (const index in array)>
    {
        console.log(array[index])
    }