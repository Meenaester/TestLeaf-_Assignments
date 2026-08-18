// 1. Declare a *global variable* named genderType with value "female".
// 2. Create a function named *printGender*.
// 3. Inside the function, declare a *function-scoped* variable color with value "brown" using let.
// 4. Create an *if condition* that checks whether genderType starts with "female".
// 5. Inside this if-block:
//  * Declare a variable age = 30 using *var*.
//  * Create a *block-scoped* variable color = "pink" using let.
//  * Print the color inside the block and observe which value appears.
// 6. Outside the if-block but inside the function, print the value of age.
// 7. Call the function and print the value of genderType globally.
// 8. Now change the global variable named genderType with value “male” and observe the
// functionality of scoping in JavaScript.

// //step 1
// //1. Declare a *global variable* named genderType with value "female".
// var genderType="female";
// //step 2
// //2. Create a function named *printGender*.
// var genderType="female";
// function printGender(){

// }
// //step 3
// //3. Inside the function, declare a *function-scoped* variable color with value "brown" using let.

// var genderType="female";
// function printGender()
// {
//     let color ="brown";

// }
// //step 4
// //4. Create an *if condition* that checks whether genderType starts with "female".
// var genderType="female";
// function printGender()
// {
//     let color ="brown";
//     if(genderType=="female")
        

// }
// //step 5
// //5. Inside this if-block:
// //  * Declare a variable age = 30 using *var*.
// //  * Create a *block-scoped* variable color = "pink" using let.
// //  * Print the color inside the block and observe which value appears.
// var genderType="female";
// function printGender()
// {
//     let color ="brown";
//     if(genderType=="female")
//     {
//         var age=30;
//         let color="pink";
//         console.log(color)
//     }

// }
// //step 6
// // 6. Outside the if-block but inside the function, print the value of age.
// var genderType="female";
// function printGender()
// {
//     let color ="brown";
//     if(genderType=="female")
//     {
//         var age=30;
//         let color="pink";
//         console.log(color)
//     }
// console.log(age)
// }
// //step 7
// // 7. Call the function and print the value of genderType globally.
// var genderType="female";
// function printGender()
// {
//     let color ="brown";
//     if(genderType=="female")
//     {
//         var age=30;
//         let color="pink";
//         console.log(color)
//     }
// console.log(age)
// }
// printGender();

//step 8
//8. Now change the global variable named genderType with value “male” and observe the
var genderType="female";
function printGender()
{
    let color ="brown";
    if(genderType=="female")
    {
        var age=30;
        let color="pink";
        console.log(color)
    }
console.log(age)
}
printGender();
var genderType ="male";
console.log(genderType)