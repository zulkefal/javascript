//find the longest word in string and print the first longest


const findLogest =() =>{
    let str = "Hi I am Zulkefal and I am learnig Javascript";

    // strArr = strArr.sort((a,b) => a.length - b.length);

    // console.log(strArr);
    // return strArr.at(-1);


    // using reduce method
    return strArr.reduce(
        (acc,word)=>(word.length > acc.length ? word : acc)
    )
}

console.log(
    findLogest("Hi I am Zulkefal and I am learnig Javascript")
)