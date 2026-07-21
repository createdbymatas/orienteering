function pageLoaded(){
    setTimeout(() => {
        document.getElementById("loading").style.opacity = "0";
    }, 1000);
    setTimeout(() => {
        document.getElementById("loading").style.display = "none";
    }, 1200);
}

function checkIfNotEmpty(){
    if(document.getElementById("answer").value == ''){
        document.getElementById("confirmBtn").style.backgroundColor = "darkgrey";
        document.getElementById("confirmBtn").style.pointerEvents = "none";
    }
    else{
        document.getElementById("confirmBtn").style.backgroundColor = "royalblue";
        document.getElementById("confirmBtn").style.pointerEvents = "all";
    }
}

document.getElementById("answer").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("confirmBtn").click();
  }
});

function checkAnswer(){
    if(document.getElementById("answer").value == 'vanduo' || document.getElementById("answer").value == 'Vanduo'){
        document.getElementById("checkingAnswer").style.display = "flex";
        setTimeout(() => {
            document.getElementById("checkLoader").style.animation = "spin 0.8s linear infinite";
            document.getElementById("checkingAnswer").style.opacity = "1";
        }, 10);
        setTimeout(() => {
            document.getElementById("checkLoader").style.display = "none";
            document.getElementById("correctI").style.display = "block";
            document.getElementById("checkingText").style.display = "none";
            document.getElementById("correctText").style.display = "block";
        }, 1000);
        setTimeout(() => {
            document.getElementById("checkingAnswer").style.display = "none";
            document.getElementById("checkLoader").style.animation = "none";
            document.getElementById("checkingAnswer").style.opacity = "0";
            document.getElementById("checkLoader").style.display = "block";
            document.getElementById("correctI").style.display = "none";
            document.getElementById("checkingText").style.display = "block";
            document.getElementById("correctText").style.display = "none";
            document.getElementById("letterWindow").style.display = "flex";
        }, 2000);
        setTimeout(() => {
            document.getElementById("letter").style.backgroundImage = "none";
            document.getElementById("letter").style.color = "black";
        }, 4000);
    }
    else if(document.getElementById("answer").value == ''){

    }
    else{
        document.getElementById("checkingAnswer").style.display = "flex";
        setTimeout(() => {
            document.getElementById("checkLoader").style.animation = "spin 0.8s linear infinite";
            document.getElementById("checkingAnswer").style.opacity = "1";
        }, 10);
        setTimeout(() => {
            document.getElementById("checkLoader").style.display = "none";
            document.getElementById("incorrectI").style.display = "block";
            document.getElementById("checkingText").style.display = "none";
            document.getElementById("incorrectText").style.display = "block";
        }, 1000);
        setTimeout(() => {
            document.getElementById("incorrectI").style.marginLeft = "30px";
        }, 1100);
        setTimeout(() => {
            document.getElementById("incorrectI").style.marginLeft = "-30px";
        }, 1200);
        setTimeout(() => {
            document.getElementById("incorrectI").style.marginLeft = "30px";
        }, 1300);
        setTimeout(() => {
            document.getElementById("incorrectI").style.marginLeft = "-30px";
        }, 1400);
        setTimeout(() => {
            document.getElementById("incorrectI").style.marginLeft = "0";
        }, 1500);
        setTimeout(() => {
            document.getElementById("checkingAnswer").style.opacity = "0";
        }, 3000);
        setTimeout(() => {
            document.getElementById("checkLoader").style.animation = "none";
            document.getElementById("checkingAnswer").style.display = "none";
            document.getElementById("checkLoader").style.display = "block";
            document.getElementById("incorrectI").style.display = "none";
            document.getElementById("checkingText").style.display = "block";
            document.getElementById("incorrectText").style.display = "none";
        }, 3200);
    }
}

function readTask(){
    document.getElementById("readTaskBtn").style.pointerEvents = "none";
    document.getElementById("readTaskBtn").style.opacity = "0.5";
    document.getElementById("readTaskBtn").innerHTML = '<i class="fa-solid fa-bullhorn"></i> Užduotis skaitoma...';
    document.getElementById("task").play();
}
document.getElementById("task").onended = function() {
    document.getElementById("readTaskBtn").style.pointerEvents = "all";
    document.getElementById("readTaskBtn").style.opacity = "1";
    document.getElementById("readTaskBtn").innerHTML = '<i class="fa-solid fa-bullhorn"></i> Perskaityti užduotį';
}

function boldText(){
    if(document.getElementById("boldTextInput").value == "0"){
        document.getElementById("boldTextInput").value = "1";
        document.getElementById("boldTextBtn").innerHTML = '<i class="fa-solid fa-bold"></i> Išjungti paryškintą šriftą';
        document.getElementById("checkingText").style.fontWeight = "600";
        document.getElementById("incorrectText").style.fontWeight = "600";
        document.getElementById("correctText").style.fontWeight = "600";
        document.getElementById("yourLetterText").style.fontWeight = "600";
        document.getElementById("letter").style.fontWeight = "800";
        document.getElementById("letterInfo").style.fontWeight = "600";
        document.getElementById("orienteeringText").style.fontWeight = "600";
        document.getElementById("teamText").style.fontWeight = "600";
        document.getElementById("taskText").style.fontWeight = "600";
        document.getElementById("givenTaskText").style.fontWeight = "800";
        document.getElementById("taskDescText").style.fontWeight = "600";
        document.getElementById("enterAnswerText").style.fontWeight = "600";
        document.getElementById("confirmBtn").style.fontWeight = "600";
        document.getElementById("info1").style.fontWeight = "600";
        document.getElementById("info2").style.fontWeight = "600";
        document.getElementById("accessP").style.fontWeight = "600";
        document.getElementById("accessWord").style.fontWeight = "600";
        document.getElementById("accessWord2").style.fontWeight = "600";
        document.getElementById("smallerTextBtn").style.fontWeight = "600";
        document.getElementById("largerTextBtn").style.fontWeight = "600";
        document.getElementById("boldTextBtn").style.fontWeight = "600";
        document.getElementById("readTaskBtn").style.fontWeight = "600";
    }
    else{
        document.getElementById("boldTextInput").value = "0";
        document.getElementById("boldTextBtn").innerHTML = '<i class="fa-solid fa-bold"></i> Įjungti paryškintą šriftą';
        document.getElementById("checkingText").style.fontWeight = "400";
        document.getElementById("incorrectText").style.fontWeight = "400";
        document.getElementById("correctText").style.fontWeight = "400";
        document.getElementById("yourLetterText").style.fontWeight = "400";
        document.getElementById("letter").style.fontWeight = "600";
        document.getElementById("letterInfo").style.fontWeight = "400";
        document.getElementById("orienteeringText").style.fontWeight = "400";
        document.getElementById("teamText").style.fontWeight = "400";
        document.getElementById("taskText").style.fontWeight = "400";
        document.getElementById("givenTaskText").style.fontWeight = "600";
        document.getElementById("taskDescText").style.fontWeight = "400";
        document.getElementById("enterAnswerText").style.fontWeight = "400";
        document.getElementById("confirmBtn").style.fontWeight = "400";
        document.getElementById("info1").style.fontWeight = "400";
        document.getElementById("info2").style.fontWeight = "400";
        document.getElementById("accessP").style.fontWeight = "400";
        document.getElementById("accessWord").style.fontWeight = "400";
        document.getElementById("accessWord2").style.fontWeight = "400";
        document.getElementById("smallerTextBtn").style.fontWeight = "400";
        document.getElementById("largerTextBtn").style.fontWeight = "400";
        document.getElementById("boldTextBtn").style.fontWeight = "400";
        document.getElementById("readTaskBtn").style.fontWeight = "400";
    }
}
function enlargeText(){
    if(document.getElementById("textSizeInput").value == "50"){
        document.getElementById("textSizeInput").value = "75";
        document.getElementById("checkingText").style.fontSize = "15px";
        document.getElementById("incorrectText").style.fontSize = "15px";
        document.getElementById("correctText").style.fontSize = "15px";
        document.getElementById("yourLetterText").style.fontSize = "21px";
        document.getElementById("letter").style.fontSize = "48px";
        document.getElementById("letterInfo").style.fontSize = "13px";
        document.getElementById("orienteeringText").style.fontSize = "23px";
        document.getElementById("teamText").style.fontSize = "18px";
        document.getElementById("taskText").style.fontSize = "18px";
        document.getElementById("taskText").style.top = "83px";
        document.getElementById("givenTaskText").style.fontSize = "18px";
        document.getElementById("taskDescText").style.fontSize = "16px";
        document.getElementById("enterAnswerText").style.fontSize = "15px";
        document.getElementById("confirmBtn").style.fontSize = "14px";
        document.getElementById("info1").style.fontSize = "13px";
        document.getElementById("info2").style.fontSize = "13px";
        document.getElementById("accessP").style.fontSize = "16px";
        document.getElementById("accessWord").style.fontSize = "15px";
        document.getElementById("accessWord2").style.fontSize = "15px";
        document.getElementById("smallerTextBtn").style.fontSize = "14px";
        document.getElementById("largerTextBtn").style.fontSize = "14px";
        document.getElementById("boldTextBtn").style.fontSize = "14px";
        document.getElementById("readTaskBtn").style.fontSize = "14px";
        document.getElementById("smallerTextBtn").style.pointerEvents = "all";
        document.getElementById("smallerTextBtn").style.opacity = "1";
        document.getElementById("body").style.paddingBottom = "220px";
    }
    else if(document.getElementById("textSizeInput").value == "75"){
        document.getElementById("textSizeInput").value = "100";
        document.getElementById("checkingText").style.fontSize = "17px";
        document.getElementById("incorrectText").style.fontSize = "17px";
        document.getElementById("correctText").style.fontSize = "17px";
        document.getElementById("yourLetterText").style.fontSize = "23px";
        document.getElementById("letter").style.fontSize = "50px";
        document.getElementById("letterInfo").style.fontSize = "15px";
        document.getElementById("orienteeringText").style.fontSize = "25px";
        document.getElementById("teamText").style.fontSize = "20px";
        document.getElementById("taskText").style.fontSize = "20px";
        document.getElementById("taskText").style.top = "87px";
        document.getElementById("givenTaskText").style.fontSize = "20px";
        document.getElementById("taskDescText").style.fontSize = "18px";
        document.getElementById("enterAnswerText").style.fontSize = "17px";
        document.getElementById("confirmBtn").style.fontSize = "16px";
        document.getElementById("info1").style.fontSize = "15px";
        document.getElementById("info2").style.fontSize = "15px";
        document.getElementById("accessP").style.fontSize = "18px";
        document.getElementById("accessWord").style.fontSize = "17px";
        document.getElementById("accessWord2").style.fontSize = "17px";
        document.getElementById("smallerTextBtn").style.fontSize = "16px";
        document.getElementById("largerTextBtn").style.fontSize = "16px";
        document.getElementById("boldTextBtn").style.fontSize = "16px";
        document.getElementById("readTaskBtn").style.fontSize = "16px";
        document.getElementById("smallerTextBtn").style.pointerEvents = "all";
        document.getElementById("smallerTextBtn").style.opacity = "1";
        document.getElementById("body").style.paddingBottom = "260px";
    }
    else if(document.getElementById("textSizeInput").value == "100"){
        document.getElementById("textSizeInput").value = "125";
        document.getElementById("checkingText").style.fontSize = "19px";
        document.getElementById("incorrectText").style.fontSize = "19px";
        document.getElementById("correctText").style.fontSize = "19px";
        document.getElementById("yourLetterText").style.fontSize = "25px";
        document.getElementById("letter").style.fontSize = "52px";
        document.getElementById("letterInfo").style.fontSize = "17px";
        document.getElementById("orienteeringText").style.fontSize = "27px";
        document.getElementById("teamText").style.fontSize = "22px";
        document.getElementById("taskText").style.fontSize = "22px";
        document.getElementById("taskText").style.top = "91px";
        document.getElementById("givenTaskText").style.fontSize = "22px";
        document.getElementById("taskDescText").style.fontSize = "20px";
        document.getElementById("enterAnswerText").style.fontSize = "19px";
        document.getElementById("confirmBtn").style.fontSize = "18px";
        document.getElementById("info1").style.fontSize = "17px";
        document.getElementById("info2").style.fontSize = "17px";
        document.getElementById("accessP").style.fontSize = "20px";
        document.getElementById("accessWord").style.fontSize = "19px";
        document.getElementById("accessWord2").style.fontSize = "19px";
        document.getElementById("smallerTextBtn").style.fontSize = "18px";
        document.getElementById("largerTextBtn").style.fontSize = "18px";
        document.getElementById("boldTextBtn").style.fontSize = "18px";
        document.getElementById("readTaskBtn").style.fontSize = "18px";
        document.getElementById("smallerTextBtn").style.pointerEvents = "all";
        document.getElementById("smallerTextBtn").style.opacity = "1";
        document.getElementById("body").style.paddingBottom = "280px";
    }
    else if(document.getElementById("textSizeInput").value == "125"){
        document.getElementById("textSizeInput").value = "150";
        document.getElementById("checkingText").style.fontSize = "21px";
        document.getElementById("incorrectText").style.fontSize = "21px";
        document.getElementById("correctText").style.fontSize = "21px";
        document.getElementById("yourLetterText").style.fontSize = "27px";
        document.getElementById("letter").style.fontSize = "54px";
        document.getElementById("letterInfo").style.fontSize = "19px";
        document.getElementById("orienteeringText").style.fontSize = "29px";
        document.getElementById("teamText").style.fontSize = "24px";
        document.getElementById("taskText").style.fontSize = "24px";
        document.getElementById("taskText").style.top = "95px";
        document.getElementById("givenTaskText").style.fontSize = "24px";
        document.getElementById("taskDescText").style.fontSize = "22px";
        document.getElementById("enterAnswerText").style.fontSize = "21px";
        document.getElementById("confirmBtn").style.fontSize = "20px";
        document.getElementById("info1").style.fontSize = "19px";
        document.getElementById("info2").style.fontSize = "19px";
        document.getElementById("accessP").style.fontSize = "22px";
        document.getElementById("accessWord").style.fontSize = "21px";
        document.getElementById("accessWord2").style.fontSize = "21px";
        document.getElementById("smallerTextBtn").style.fontSize = "20px";
        document.getElementById("largerTextBtn").style.fontSize = "20px";
        document.getElementById("boldTextBtn").style.fontSize = "20px";
        document.getElementById("readTaskBtn").style.fontSize = "20px";
        document.getElementById("smallerTextBtn").style.pointerEvents = "all";
        document.getElementById("smallerTextBtn").style.opacity = "1";
        document.getElementById("body").style.paddingBottom = "325px";
    }
    else if(document.getElementById("textSizeInput").value == "150"){
        document.getElementById("textSizeInput").value = "175";
        document.getElementById("checkingText").style.fontSize = "23px";
        document.getElementById("incorrectText").style.fontSize = "23px";
        document.getElementById("correctText").style.fontSize = "23px";
        document.getElementById("yourLetterText").style.fontSize = "29px";
        document.getElementById("letter").style.fontSize = "56px";
        document.getElementById("letterInfo").style.fontSize = "21px";
        document.getElementById("orienteeringText").style.fontSize = "31px";
        document.getElementById("teamText").style.fontSize = "26px";
        document.getElementById("taskText").style.fontSize = "26px";
        document.getElementById("taskText").style.top = "99px";
        document.getElementById("givenTaskText").style.fontSize = "26px";
        document.getElementById("taskDescText").style.fontSize = "24px";
        document.getElementById("enterAnswerText").style.fontSize = "23px";
        document.getElementById("confirmBtn").style.fontSize = "22px";
        document.getElementById("info1").style.fontSize = "21px";
        document.getElementById("info2").style.fontSize = "21px";
        document.getElementById("accessP").style.fontSize = "24px";
        document.getElementById("accessWord").style.fontSize = "23px";
        document.getElementById("accessWord2").style.fontSize = "23px";
        document.getElementById("smallerTextBtn").style.fontSize = "22px";
        document.getElementById("largerTextBtn").style.fontSize = "22px";
        document.getElementById("boldTextBtn").style.fontSize = "22px";
        document.getElementById("readTaskBtn").style.fontSize = "22px";
        document.getElementById("largerTextBtn").style.pointerEvents = "none";
        document.getElementById("largerTextBtn").style.opacity = "0.5";
        document.getElementById("body").style.paddingBottom = "340px";
    }
    else{
        
    }
}
function decreaseText(){
    if(document.getElementById("textSizeInput").value == "75"){
        document.getElementById("textSizeInput").value = "50";
        document.getElementById("checkingText").style.fontSize = "13px";
        document.getElementById("incorrectText").style.fontSize = "13px";
        document.getElementById("correctText").style.fontSize = "13px";
        document.getElementById("yourLetterText").style.fontSize = "19px";
        document.getElementById("letter").style.fontSize = "46px";
        document.getElementById("letterInfo").style.fontSize = "11px";
        document.getElementById("orienteeringText").style.fontSize = "21px";
        document.getElementById("teamText").style.fontSize = "16px";
        document.getElementById("taskText").style.fontSize = "16px";
        document.getElementById("taskText").style.top = "79px";
        document.getElementById("givenTaskText").style.fontSize = "16px";
        document.getElementById("taskDescText").style.fontSize = "14px";
        document.getElementById("enterAnswerText").style.fontSize = "13px";
        document.getElementById("confirmBtn").style.fontSize = "12px";
        document.getElementById("info1").style.fontSize = "11px";
        document.getElementById("info2").style.fontSize = "11px";
        document.getElementById("accessP").style.fontSize = "14px";
        document.getElementById("accessWord").style.fontSize = "13px";
        document.getElementById("accessWord2").style.fontSize = "13px";
        document.getElementById("smallerTextBtn").style.fontSize = "12px";
        document.getElementById("largerTextBtn").style.fontSize = "12px";
        document.getElementById("boldTextBtn").style.fontSize = "12px";
        document.getElementById("readTaskBtn").style.fontSize = "12px";
        document.getElementById("smallerTextBtn").style.pointerEvents = "none";
        document.getElementById("smallerTextBtn").style.opacity = "0.5";
        document.getElementById("body").style.paddingBottom = "205px";
    }
    else if(document.getElementById("textSizeInput").value == "100"){
        document.getElementById("textSizeInput").value = "75";
        document.getElementById("checkingText").style.fontSize = "15px";
        document.getElementById("incorrectText").style.fontSize = "15px";
        document.getElementById("correctText").style.fontSize = "15px";
        document.getElementById("yourLetterText").style.fontSize = "21px";
        document.getElementById("letter").style.fontSize = "48px";
        document.getElementById("letterInfo").style.fontSize = "13px";
        document.getElementById("orienteeringText").style.fontSize = "23px";
        document.getElementById("teamText").style.fontSize = "18px";
        document.getElementById("taskText").style.fontSize = "18px";
        document.getElementById("taskText").style.top = "83px";
        document.getElementById("givenTaskText").style.fontSize = "18px";
        document.getElementById("taskDescText").style.fontSize = "16px";
        document.getElementById("enterAnswerText").style.fontSize = "15px";
        document.getElementById("confirmBtn").style.fontSize = "14px";
        document.getElementById("info1").style.fontSize = "13px";
        document.getElementById("info2").style.fontSize = "13px";
        document.getElementById("accessP").style.fontSize = "16px";
        document.getElementById("accessWord").style.fontSize = "15px";
        document.getElementById("accessWord2").style.fontSize = "15px";
        document.getElementById("smallerTextBtn").style.fontSize = "14px";
        document.getElementById("largerTextBtn").style.fontSize = "14px";
        document.getElementById("boldTextBtn").style.fontSize = "14px";
        document.getElementById("readTaskBtn").style.fontSize = "14px";
        document.getElementById("largerTextBtn").style.pointerEvents = "all";
        document.getElementById("largerTextBtn").style.opacity = "1";
        document.getElementById("body").style.paddingBottom = "220px";
    }
    else if(document.getElementById("textSizeInput").value == "125"){
        document.getElementById("textSizeInput").value = "100";
        document.getElementById("checkingText").style.fontSize = "17px";
        document.getElementById("incorrectText").style.fontSize = "17px";
        document.getElementById("correctText").style.fontSize = "17px";
        document.getElementById("yourLetterText").style.fontSize = "23px";
        document.getElementById("letter").style.fontSize = "50px";
        document.getElementById("letterInfo").style.fontSize = "15px";
        document.getElementById("orienteeringText").style.fontSize = "25px";
        document.getElementById("teamText").style.fontSize = "20px";
        document.getElementById("taskText").style.fontSize = "20px";
        document.getElementById("taskText").style.top = "87px";
        document.getElementById("givenTaskText").style.fontSize = "20px";
        document.getElementById("taskDescText").style.fontSize = "18px";
        document.getElementById("enterAnswerText").style.fontSize = "17px";
        document.getElementById("confirmBtn").style.fontSize = "16px";
        document.getElementById("info1").style.fontSize = "15px";
        document.getElementById("info2").style.fontSize = "15px";
        document.getElementById("accessP").style.fontSize = "18px";
        document.getElementById("accessWord").style.fontSize = "17px";
        document.getElementById("accessWord2").style.fontSize = "17px";
        document.getElementById("smallerTextBtn").style.fontSize = "16px";
        document.getElementById("largerTextBtn").style.fontSize = "16px";
        document.getElementById("boldTextBtn").style.fontSize = "16px";
        document.getElementById("readTaskBtn").style.fontSize = "16px";
        document.getElementById("largerTextBtn").style.pointerEvents = "all";
        document.getElementById("largerTextBtn").style.opacity = "1";
        document.getElementById("body").style.paddingBottom = "260px";
    }
    else if(document.getElementById("textSizeInput").value == "150"){
        document.getElementById("textSizeInput").value = "125";
        document.getElementById("checkingText").style.fontSize = "19px";
        document.getElementById("incorrectText").style.fontSize = "19px";
        document.getElementById("correctText").style.fontSize = "19px";
        document.getElementById("yourLetterText").style.fontSize = "25px";
        document.getElementById("letter").style.fontSize = "52px";
        document.getElementById("letterInfo").style.fontSize = "17px";
        document.getElementById("orienteeringText").style.fontSize = "27px";
        document.getElementById("teamText").style.fontSize = "22px";
        document.getElementById("taskText").style.fontSize = "22px";
        document.getElementById("taskText").style.top = "91px";
        document.getElementById("givenTaskText").style.fontSize = "22px";
        document.getElementById("taskDescText").style.fontSize = "20px";
        document.getElementById("enterAnswerText").style.fontSize = "19px";
        document.getElementById("confirmBtn").style.fontSize = "18px";
        document.getElementById("info1").style.fontSize = "17px";
        document.getElementById("info2").style.fontSize = "17px";
        document.getElementById("accessP").style.fontSize = "20px";
        document.getElementById("accessWord").style.fontSize = "19px";
        document.getElementById("accessWord2").style.fontSize = "19px";
        document.getElementById("smallerTextBtn").style.fontSize = "18px";
        document.getElementById("largerTextBtn").style.fontSize = "18px";
        document.getElementById("boldTextBtn").style.fontSize = "18px";
        document.getElementById("readTaskBtn").style.fontSize = "18px";
        document.getElementById("largerTextBtn").style.pointerEvents = "all";
        document.getElementById("largerTextBtn").style.opacity = "1";
        document.getElementById("body").style.paddingBottom = "280px";
    }
    else if(document.getElementById("textSizeInput").value == "175"){
        document.getElementById("textSizeInput").value = "150";
        document.getElementById("checkingText").style.fontSize = "21px";
        document.getElementById("incorrectText").style.fontSize = "21px";
        document.getElementById("correctText").style.fontSize = "21px";
        document.getElementById("yourLetterText").style.fontSize = "27px";
        document.getElementById("letter").style.fontSize = "54px";
        document.getElementById("letterInfo").style.fontSize = "19px";
        document.getElementById("orienteeringText").style.fontSize = "29px";
        document.getElementById("teamText").style.fontSize = "24px";
        document.getElementById("taskText").style.fontSize = "24px";
        document.getElementById("taskText").style.top = "95px";
        document.getElementById("givenTaskText").style.fontSize = "24px";
        document.getElementById("taskDescText").style.fontSize = "22px";
        document.getElementById("enterAnswerText").style.fontSize = "21px";
        document.getElementById("confirmBtn").style.fontSize = "20px";
        document.getElementById("info1").style.fontSize = "19px";
        document.getElementById("info2").style.fontSize = "19px";
        document.getElementById("accessP").style.fontSize = "22px";
        document.getElementById("accessWord").style.fontSize = "21px";
        document.getElementById("accessWord2").style.fontSize = "21px";
        document.getElementById("smallerTextBtn").style.fontSize = "20px";
        document.getElementById("largerTextBtn").style.fontSize = "20px";
        document.getElementById("boldTextBtn").style.fontSize = "20px";
        document.getElementById("readTaskBtn").style.fontSize = "20px";
        document.getElementById("largerTextBtn").style.pointerEvents = "all";
        document.getElementById("largerTextBtn").style.opacity = "1";
        document.getElementById("body").style.paddingBottom = "325px";
    }
    else{
        
    }
}