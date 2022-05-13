

//Array relating to finances
const financeFutures = [
    "You will find your fortune in the most unexpected of places. ",
    "You must lose some wealth to gain some happiness. ",
    "Your money will arrive quickly and from somebody close to you. ",
    "Keep an eye on your finances as they will have a habit of disappearing. ",
    "By continuing to save the pennies, your savings will one day turn from a stream into a river. "
];

//Array relating to family
const familyFutures = [
    "Your family may become further away physically but will be closer in your heart. ",
    "The resentment regarding a family member should be addressed to release both of you. ",
    "Your family may sometimes cause you annoyance with the day to day ebb and flow of life but when the waves come crashing down, they will stop you from drowning. ",
    "Taking your family for granted is like taking your health for granted. You might not miss it gone. "
];   

//Array relating to careers
const careerFutures =[
    "Your current career is about to take off in an unexpected way. ",
    "You need to look for a new career than can help you reach your potential. ",
    "You have had some concerns at work and these need to be addressed. ",
    "Look carefully for new opportunities and your future will flourish. ",
    "You may feel stuck in your current work life. Remember to keep things in perspective. ",
    "Asking for a pay increase will help your bosses take you seriously and evaluate your contributions. ",
    "Work to Live and not Live to work. "
];

//Array relating to health
const healthFutures = [
    "You will shortly experience some health issues. Take time to heal to avoid unnecessary delays.",
    "Invest in your health by taking care of yourself and you will reap the rewards in the future.",
    "You may not enjoy the thought of going to the gym but it is better than the reality of poor health.",    
];

//the randomMessagePicker takes an array as a parameter. It then randomly selects an element of the array and returns that element
const randomMessagePicker = (fortuneMessages)=> {
    const randNum =Math.floor(Math.random()*fortuneMessages.length);  //randomly select a number based on the array length
    return fortuneMessages[randNum];  //return the random element from the array
}


//This is the main function. It returns a message by taking a random message from each array and concats them
function newMessage() {
    //message preamble
    let message = "The pyschic squirrel has the following words of wisdom. Treat them with the respect they deserve!\n" 
    //joins the random messages together
    message = message + randomMessagePicker(familyFutures) + randomMessagePicker(financeFutures) + randomMessagePicker(careerFutures) + randomMessagePicker(healthFutures);
    return message; //returns the random final message as a string
    }

// not working! export {newMessage};  //allows the function to be used externally.


//console.log(newMessage()); //testing
export { newMessage }; //JAB Add for module functionality