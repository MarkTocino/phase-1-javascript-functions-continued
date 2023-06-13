// code your solution here
function saturdayFun (activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}
saturdayFun();
function mondayWork (activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
};
mondayWork('work from home');

let wrapAdjective = function (name = "*") {
    return function (adj = 'a hard worker'){
        return `You are ${name}${adj}${name}!`
    }
;}


wrapAdjective("%")("a dedicated programmer!");