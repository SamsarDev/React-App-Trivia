# Trivia-Antonio-Sarmientosa# Quiz Game

## Brief
The challenge is to create a 5 question responsive quiz game in react. The trivia questions will be available in an API endpoint. 
You should save in the app state those questions, the answers of the user, and the final score. 
And reset the state after the user goes to the first view again. 

We will review these key areas:
- Code Format
- Clean Code
- Structure
- Scalability 
- Maintainability
- Time
- Respect the UI (spacing, fonts, margins, colors, alignment)

## Data
API URL: https://opentdb.com/api.php?amount=5&difficulty=easy&type=boolean

## Views
There are 3 screens to build:
https://www.figma.com/file/BJiAmn1CnvAzyljJTameM1/Quiz-App?node-id=2%3A482

### Home 
https://d.pr/i/t04m54
- This view has a static text and a button that navigates to the game view.


### Game 
https://d.pr/i/PU4eIT
- Show current question, example 2 of 5
- The main title is the question category 
- The question 
- Two buttons to answer if is true or false
- After the 5 questions are answered navigate to the last view called results.


### Results
https://d.pr/i/KHnP3s
- List the 5 questions and show if the answer was correct or not.
- Show the score
- Play again button that navigates to the beginning of the app the Home view.
