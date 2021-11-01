# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* The onClick handler function for that button is called
* That handler function calls dispatch, passing into it the action creator function imported from the actions directory or file.
* that action creator function returns an object, with a type (and possibly a payload), which is then taken by dispatch and sent to the reducer function
* in the reducer function, the action is passed in as a parameter. A switch statement selects a case according to the action type. 
* the code in said case is executed, changing state (using the payload if present)


* TotalDisplay shows the total plus 1.
