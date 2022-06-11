// code your solution here
function saturdayFun(fun = "roller-skate")
{
    return `This Saturday, I want to ${fun}!`;
}
function mondayWork(activity="go to the office")
{
    return `This Monday, I will ${activity}.`;
}
function wrapAdjective(comment='*')
{
    return function(attr = "special"){
        return `You are ${comment}${attr}${comment}!`
    }
}