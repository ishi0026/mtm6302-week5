// creating an array using [] and comma separated list of values
const myColors = ["red","green","blue","white","black","tomato"]

//access the element with id and save in a variable
const messageList = document.getElementById("colorMessages")

messageList.children[0].innerHTML += myColors[3]

myColors[4] = "cyan"

messageList.children[1].innerHTML += myColors[4]
// messageList.children[1].style.background = myColors[4] change color

myColors.push("darksalmon")//add an item to last of array
messageList.children[2].innerHTML += myColors

myColors.pop()//remove last item
messageList.children[3].innerHTML += myColors

myColors.shift()//remove first one
messageList.children[4].innerHTML += myColors

myColors.unshift("hotpink")//add an items at the beginning of array
messageList.children[5].innerHTML += myColors

myColors.splice(2,0,"royalblue")//adds, removes, and/or replace items anywhere in the array
messageList.children[6].innerHTML += myColors

//sorting array using sort() method, default for all lowercase text is ascending alphabetical
myColors.sort()
messageList.children[7].innerHTML += myColors

//concatination using concat()
const darkColors = ["darkseagreen","darkgreen","darkred"]

const allColors = myColors.concat(darkColors)
// messageList.children[8].innerHTML += allColors
messageList.children[8].innerHTML += allColors.join(" - ")
// console.log(allColors)

//searching in an array
// const searchMessage = document.getElementById("colorResponse")

// function doYouHaveColor(colorName){
//     let colorIndex = allColors.indexOf(colorName)
//     if (colorIndex >= 0){
//         searchMessage.innerHTML = "Yes, we have " + colorName + " color"
//     } else {
//         searchMessage.innerHTML = `No, we do not have ${colorName} color` //same thing↑
//     }
// }

function doYouHaveColor(colorName){
if (colorIndex >= 0){
    searchMessage.innerHTML = "Yes, we have " + colorName + " color"
} else {
    searchMessage.innerHTML = `No, we do not have ${colorName} color`
}
}

const scores = [43,68,35,82]

const scoreMessageList = document.getElementById("scoreMessages").children

// create a new array passingScore out of the scores array by filtering the values based on the function that returns the values that are greater than 50 
const passingScores = scores.filter(score => score > 50)
scoreMessageList[0].innerHTML += passingScores

const doubleScores = scores.map(score => score *2)
scoreMessageList[1].innerHTML += doubleScores

const totalDoubleScore = doubleScores.reduce((accumulator,score) => accumulator + score) //accumulator is just a name created, where are they come from?
scoreMessageList[2].innerHTML += totalDoubleScore

