# Pseudocode

## Objectives
- Layout the foundation of logic behind the password generator
- Establish naming conventions for variables to be used
- Optimize control flow of algorithm

## Meta-Analysis of Approach 

### Big Picture: Create a secure password that meets the acceptance criteria 

#### Provide appendix of character choices for different character types

```
START:

var numbers = [array of numbers 0-9]
var lowerChar = [alphabet array...in lowercase]
var upperChar = [alphabet array...in uppercase]
var specialChar = [array of special characters]

```

#### Prompt user with acceptance criteria with a do...while statement and store preferences in "userCriteria" object

```
Function: prompts() 

    Variable Initialization: var isCleared = variable that will ensure user responses are valid

    EXECUTE: Do several acceptance criteria popup prompts and initialize "userCriteria" object 
                
             If length is not met 
                alert user to follow length guidelines

             Else if all character criteria are bypassed
                alert user to choose at least one criteria type

             Else 
                change isCleared variable to indicate that criteria has been met

            while acceptance criteria are met 
               return "userCriteria" object with updated properties
```

#### Converge all user responses and assemble a secure password (Hallelujah!)

```
Function: generatePassword()

    Variable Initialization: 
    
            var passwordChoices = function call to reference "userCriteria" object 
            var possibleCombination = empty array to use to store possible characters 
            var securePassword = empty string to iterate over in final for loop

    Execute:  

              If user selects to include lowercase characters in password
                 for each index in appendix lowerChar array
                   push entry into empty possibleCombination array

              If user selects to include uppercase characters in password
                 for each index in appendix upperChar array
                   push entry into empty possibleCombination array

               If user selects to include numbers in password
                 for each index in appendix numbers array
                   push entry into empty possibleCombination array


              If user selects to include special characters in password
                 for each index in appendix specialChar array
                   push entry into empty possibleCombination array

             For the span of user-specified length 
                 add entry from possibleCombination array to securePassword string

               return securePassword string

END
```     




            






