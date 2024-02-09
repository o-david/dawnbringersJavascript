// alert("go Home");
// let choice =confirm("Do you want to see your answer?");

// function showtext() {
//     alert("i am doing stuff")
// }
// let num = 5
// num++
// num+=9
// console.log(num)

// let x= prompt("Type ypur answer");
// if(choice ){
//     showtext()
// }

// var num =0
// var num2 = 5
// num++
// num2--
// var sum = num + num2
// var result = sum ** 2
// console.log(result)


// [2,5,3,4,32,27]
// console.log(6>=true)
//  let names ="john"
//  let age = "22 years"

//   names+=" is " + age
//   names= names + " is " + age

//  console.log(`the person's name is ${names}  `)

//  console.log(typeof(22));

// let x =22
//  if (typeof x === "number") {
//     console.log(`${x}  is a number `);
//  }

//  if (age<10) {
//     console.log("child");
// } 
// else if (age <18) {
//     console.log("teenager");
// } 
// else{
//      console.log("adult");  
//  }

function decodeColor( code ) {
    switch( code) {
	case 1:
		return "red"
	case 2:
		console.log( 'Yellow' );
		break;
	case "x":
		console.log( 'Green' );
		break;
	default:
		console.log( 'Unknown code' );
	}
}


console.log(decodeColor(1));

let counter=65
let sum=0
// while (counter<arr.length) {
//     sum+=arr[counter]
    
//     i++
    
// }

// for (let count = 0; count < arr.length; count++) {
    //     sum+=arr[count]
    // }
    
    let arr= [2,4,"13",8,10]
for ( evy of arr) 
{
    if (evy == 13) {
        continue
    }
    sum+=evy
    console.log(sum)
}

let rem = arr.pop()
console.log(arr);
arr.push(20)
console.log(arr);

let profile ={
    name:"ben",
    age:44,
    location:"Abuja"
}
console.log(profile.locatio)

let pro =[ "ben", 44, "Abuja"]