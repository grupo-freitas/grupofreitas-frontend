const buttonPCDTrue = document.querySelector(".true");
const buttonPCDFalse = document.querySelector(".false");
const buttonChildrenTrue = document.querySelector(".trueChildren");
const buttonChildrenFalse = document.querySelector(".falseChildren");
const buttonExperienceTrue = document.querySelector(".trueExperience");
const buttonExperienceFalse = document.querySelector(".falseExperience");
const buttonAvailabilityTrue = document.querySelector('.trueAvailability');
const buttonAvailabilityFalse = document.querySelector('.falseAvailability');
const buttonRelativesTrue = document.querySelector(".trueRelatives");
const buttonRelativesFalse = document.querySelector(".falseRelatives");
const buttonAlreadyworkTrue = document.querySelector('.trueAlreadywork');
const buttonAlreadyworkFalse = document.querySelector('.falseAlreadywork');
const buttonParticipatedTrue = document.querySelector('.trueParticipated');
const buttonParticipatedFalse = document.querySelector('.falseParticipated');
const buttonAvailabilityweekTrue = document.querySelector('.trueAvailabilityweek');
const buttonAvailabilityweekFalse = document.querySelector('.falseAvailabilityweek');
// Declare
const form = document.querySelector('form');
const declare = document.querySelector('#declare');

buttonPCDFalse.addEventListener('click', () => {
    buttonPCDTrue.className = 'true';
    buttonPCDFalse.className = "activeFalse";
    document.querySelector("input#pcd").value = 0
});
buttonPCDTrue.addEventListener('click', () => {
    buttonPCDFalse.className = 'false';
    buttonPCDTrue.className = "activeTrue";
    document.querySelector("input#pcd").value = 1
});


buttonChildrenFalse.addEventListener('click', () => {
    buttonChildrenTrue.className = 'trueChildren';
    buttonChildrenFalse.className = 'activeFalse';
    document.querySelector("input#children").value = 0
});
buttonChildrenTrue.addEventListener('click', () => {
    buttonChildrenFalse.className = 'falseChildren';
    buttonChildrenTrue.className = 'activeTrue';
    document.querySelector("input#children").value = 1
});


buttonExperienceFalse.addEventListener('click', () => {
    buttonExperienceTrue.className = 'trueExperience';
    buttonExperienceFalse.className = 'activeFalse';
    document.querySelector("input#experience").value = 0
});
buttonExperienceTrue.addEventListener('click', () => {
    buttonExperienceFalse.className = 'falseExperience';
    buttonExperienceTrue.className = 'activeTrue';
    document.querySelector("input#experience").value = 1
});


buttonAvailabilityFalse.addEventListener('click', () => {
    buttonAvailabilityTrue.className = 'trueAvailability';
    buttonAvailabilityFalse.className = 'activeFalse';
    document.querySelector("input#availability").value = 0
});
buttonAvailabilityTrue.addEventListener('click', () => {
    buttonAvailabilityFalse.className = 'falseAvailability';
    buttonAvailabilityTrue.className = 'activeTrue';
    document.querySelector("input#availability").value = 1
});


buttonRelativesFalse.addEventListener('click', () => {
    buttonRelativesTrue.className = 'trueRelatives';
    buttonRelativesFalse.className = 'activeFalse';
    document.querySelector("input#relatives").value = 0
});
buttonRelativesTrue.addEventListener('click', () => {
    buttonRelativesFalse.className = 'falseRelatives';
    buttonRelativesTrue.className = 'activeTrue';
    document.querySelector("input#relatives").value = 1
});


buttonAlreadyworkFalse.addEventListener('click', () => {
    buttonAlreadyworkTrue.className = 'trueAlreadywork';
    buttonAlreadyworkFalse.className = 'activeFalse';
    document.querySelector("input#alreadywork").value = 0
});
buttonAlreadyworkTrue.addEventListener('click', () => {
    buttonAlreadyworkFalse.className = 'falseAlreadywork';
    buttonAlreadyworkTrue.className = 'activeTrue';
    document.querySelector("input#alreadywork").value = 1
});


buttonParticipatedFalse.addEventListener('click', () => {
    buttonParticipatedTrue.className = 'trueParticipated';
    buttonParticipatedFalse.className = 'activeFalse';
    document.querySelector("input#participated").value = 0
});

buttonParticipatedTrue.addEventListener('click', () => {
    buttonParticipatedFalse.className = 'falseParticipated';
    buttonParticipatedTrue.className = 'activeTrue';
    document.querySelector("input#participated").value = 1
});


buttonAvailabilityweekFalse.addEventListener('click', () => {
    buttonAvailabilityweekTrue.className = 'trueAvailabilityweek';
    buttonAvailabilityweekFalse.className = 'activeFalse';
    document.querySelector("input#availabilityweek").value = 0
});

buttonAvailabilityweekTrue.addEventListener('click', () => {
    buttonAvailabilityweekFalse.className = 'falseAvailabilityweek';
    buttonAvailabilityweekTrue.className = 'activeTrue';
    document.querySelector("input#availabilityweek").value = 1
});


// Declare
declare.addEventListener('click', () => {
    document.querySelector("#declare").value == 0 ?
        document.querySelector("#declare").value = 1 :
        document.querySelector("#declare").value = 0
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (document.querySelector("#declare").value == 1) {
        // axios.post()
    }
})


// Change File
