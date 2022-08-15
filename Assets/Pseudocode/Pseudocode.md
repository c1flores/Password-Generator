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

var numbers = [array of numbers 1-9]
var lowerChar = [alphabet array...in lowercase]
var upperChar = [alphabet array...in uppercase]
var specialChar = [array of special characters]

```

#### Prompt user with acceptance criteria with a do...while statement and "responses" object

```
Function: prompts() 
    VARIABLE INITIALIZATION: var isCleared = variable that will ensure user responses are valid

    EXECUTE: Do several acceptance criteria popup prompts and initialize "responses" object 
                while acceptance critera area met 
                    return "responses" object with updated properties
             
             If length is not met 
                alert user to follow length guidelines
             Else if all character criteria are bypassed
                alert user to choose at least one criteria type
             Else 
                 change valid variable value so function stops from executing
```

#### Converge all user responses and assemble a secure password (Hallelujah!)

```
Function: generatePassword()
    VARIABLE INITIALIZATION: var passwordChoices = function call to reference "responses" object 
                             var possibleCombination = empty array to use to store possible characters 
                             var securePassword = empty string to iterate over in final for loop

    Execute:  If user selects to include numbers in password
                 push one entry from appendix numbers array into empty possibleCombination array
              If user selects to include lowercase characters in password
                 push one entry from appendix lowerChar array into empty possibleCombination array
              If user selects to include uppercase characters in password
                 push one entry from appendix upperChar array into empty possibleCombination array
              If user selects to include special characters in password
                 push one entry into from appendix special cahracters array into empty possibleCombination array

            For entries in possibleCombination array
                add entry from possibleCombinations array into securePassword string
```     




            






