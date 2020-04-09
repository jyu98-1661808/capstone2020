package edu.washington.jyu98.habihero

import java.util.*

// MathData class to create various random math problems
// difficulty between 1-3 (easy, medium, hard)
// operator between 1-4 (addition, subtraction, multiplication, division)
class MathData(difficulty: Int, operator: Int) {

//     private val num1: Int,
//     private val num2: Int,
//     private var difficulty: Int,
//     private var operator = 1
//         // NOT SURE IF THIS WORKS
//         set(value) {
//             if (value < 1 || value > 4) throw IllegalArgumentException(
//                     "operator must be between 1 and 4 inclusive")
//             field = value
//         }
//     private var correct: Boolean
//     // val operatorName: Array<String>, // might not need this variable
//         // might just be able to figure out word based on number in adaptor
//         // data should be in here
//     // private val numStrings: Array<String>, // array to hold actual strings on number

//     // constructor
//     init {
//         var tempOne = getNumber()
//         var tempTwo = getNumber()

//         this.num1 = maxOf(tempOne, tempTwo) // greater number always first for subtraction
//         this.num2 = minOf(tempOne, tempTwo)
//         this.difficulty = difficulty
//         this.operator = operator // how to check if opperand is valid
//         this.correct = false
//     }

//     // constructor 2 (only diffficulty provided) default operator to 1 = addition
//     constructor(difficulty: Int) :
//         this(getNumbers(), getNumbers(), difficulty, 1, false)

//     // constructor 3 (only operator provided) default difficulty to 1 = easy
//     constructor(operator: Int) :
//         this(getNumbers(), getNumbers(), 1, operator, false)

//     // pick random number based on difficulty
//     fun getNumber(): Int {
//         // check that difficulty is valid (1-3 inclusive) can you do this when intializing?
//         if (difficulty < 1 || difficulty > 3) {
//             this.difficulty = 1;
//         }

//         // random number for hard (difficulty = 3) (20 - 100 inclusive) does this range make sense?
//         // have to think about showing picture and number word (eg. "twenty")
//         if (difficulty == 3) {
//             return (20..100).random();
//         }
//         // random number for medium (difficulty = 2) (5 - 50 inclusive) does this range make sense?
//         // have to think about showing picture and number word (eg. "thirty-two")
//         if (difficulty == 2) {
//             return (5..50).random();
//         }

//         // random number for easy (difficulty = 1) (1 - 10 inclusive)
//         // if never entered two if statements about then difficulty will default to 1 (easy)
//         return (1..10).random();
//     }

//     // compute answer to problem
//     private fun computeAnswer(): Int {
//         if (this.operator == 1) {
//             return num1 + num2;
//         }
//         if (this.operator == 2) {
//             return num1 - num2;
//         }
//         if (this.operator == 3) {
//             return num1 * num2;
//         }
//         // need to think about this one, division should be CLEAN, no decimals
// //        if (this.operator == 4) {
// //            return num1 / num2;
// //        }
//     }

//     // compare user input to true answer and return result
//     fun isAnswerCorrect(answer: Int) {
//         var problemAnswer = computeAnswer();
//         if (answer == problemAnswer) {
//              this.correct = true;
//         }
//         getResult()
//     }

//     // return number 1
//     fun getNumOne(): Int {
//         return this.num1
//     }

//     // return number 2
//     fun getNumTwo(): Int {
//         return this.num2
//     }

//     // return operator
//     fun getOperator(): Int {
//         return this.operator
//     }

//     // return difficulty
//     fun getDifficulty(): Int {
//         return this.difficulty
//     }

//     // return correct or not
//     // might need to adjust this function
//     fun getResult(): String {
//         if (this.correct) {
//             return "Correct!"
//         }
//         return "Try Again!"
//     }
}