// code your solution here
function saturdayFun(activity){
if (activity)
return ('This Saturday, I want to '+activity)+'!';
else
return "This Saturday, I want to roller-skate!";


}

//console.log (saturdayFun("hey"));

function mondayWork(activity){

    if (activity)
    return ('This Monday, I will '+activity)+'.';
    else
    return "This Monday, I will go to the office.";
    

}


function wrapAdjective(highlight){

    function emphatic(adjective) {
        return "You are "+highlight+adjective+highlight+"!";
    }
return emphatic;


}