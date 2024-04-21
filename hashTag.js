const generateHash = (str) => {
  if (str.length > 280 || str.trim() === "") {
    return false;
  }

  str = str.split(" ");

  //str = str.map((currElement) => currElement.replace(currElement[0], currElement[0].toUpperCase()));
  str = str.map(
    (currElement) => currElement.charAt(0).toUpperCase() + currElement.slice(1)
  );

  console.log("before Concatenation", str);
  str = str.join("");
  console.log("After Concatenation", str);
  return str;
};

console.log(generateHash("Hi i am javascript"));



//concatenate the strig ans make first alpahbet capital