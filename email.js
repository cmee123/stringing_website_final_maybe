function sendMailHelp(content) {
    emailjs.send("service_4ifttdl", "template_brve9ea", content)
    .then(function(res){
        console.log("success", res.status);
    })
}

function sendMailComplete(content) {
    var racketVals = [];
    var allRacketVals = [];

    for(let i=0; i<content["rackets"].length; i++) {
        for(let prop in content["rackets"][i]) {
            racketVals.push(content["rackets"][i][prop])
        }
        allRacketVals.push(racketVals);
        racketVals = [];
    }

    content["rackets"] = allRacketVals;

    var mysteryStringVals = [];
    var allMysteryStringVals = [];

    for(let i=0; i<content["mysteryString"].length; i++) {
        for(let prop in content["mysteryString"][i]) {
            mysteryStringVals.push(content["mysteryString"][i][prop])
        }
        allMysteryStringVals.push(mysteryStringVals);
        mysteryStringVals = [];
    }

    content["mysteryString"] = allMysteryStringVals;
    
    emailjs.send("service_4ifttdl", "template_b3rp6xq", content)
    .then(function(res){
        console.log("success", res.status);
    })
}