// Assignment Details:
// Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch messages, and
// `runTests` with `switch` for test type messages.
// Assignment Requirements:
// Create two functions : launchBrowser, runTests where,
//  a) launchBrowser need to take input as browserName (string) and do not return any
//  - use if-else (chrome or otherwise)
//  - Print the value
//  b) runTests need to take input as testType (string) and do not return any
//  - use switch case (smoke, sanity, regression, default (smoke))
//  - Print the values
// Call that function from the javascript

// if class
function launchBrowser(){

var browserName="safari";



    if(browserName=="chrome")
    {
        console.log('This is a chrome browser')

    }
    else if(browserName==="safari")
    {
        console.log('This is a safari broswer')
    }
else 
{
    console.log('This is unsupported broswer')
}
}
launchBrowser()

//switch case

function runTests (testType)
{
switch(testType)
{
case "smoke":
    console.log('This is a smoke tests')
    break;
case "sanity":
    console.log('This is a sanity test')
break;
case "regression":
    console.log('This is a regression')
    break;
    default:
        console.log('This is a default')
}

}

runTests("smoke")