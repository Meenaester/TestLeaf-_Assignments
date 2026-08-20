// Write a JavaScript function that evaluates a student's score and returns their grade using a switch statement
// to assess score ranges.
// Assignment Requirements:
// 1. Create a function that takes a student's score as a parameter.
// 2. Declare and initialize the variable.
// 3. Use `switch` statement inside the function.
// 4. Return the corresponding grade.
// 5. Call the function and print the result.

function student(studentscore)
{

switch(true)
{
    case studentscore>90:
        console.log('Grade A')
break;

case studentscore>80:
    console.log('Grade B')
    break;

    case studentscore>70:
        console.log('Grade C')
        break;
    default:
        console.log('Not applicable')
}
}

student(100)