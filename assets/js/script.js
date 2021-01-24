var firstName;
var lastName;
var age;
var job;

firstName = prompt("First Name")
lastName = prompt("Last Name")
age = prompt("Age")
job = prompt("Job")

document.write(`${firstName} ${lastName} ${age} ${job}`)

let BMI = function (weight, height) {
    return weight / (height * height);
}

let personProfile = {
    firstName: "",
    lastName: "",
    birthYear: "",
    job: "",
    age: "",
    isEligibleToVote: false,
    familyMembers: [],
    weight: "",
    height: "",
    ageCalc: function() { return this.age = new Date().getFullYear() - this.birthYear; },
    checkVote: function() {
        let tempAge = this.ageCalc(Number(this.birthYear));
        if (tempAge >= 18) { this.isEligibleToVote = true; } else { this.isEligibleToVote = false; }
    },
    calcBmi: function(weight, height) {
        let bmi = weight / (height * height);
        if (bmi < 18.5) {
            return "Underweight"
        } else if (18.5 <= bmi <= 24.9) {
            return "Normal"
        } else if (25.0 <= bmi <= 29.9) {
            return "Overweight"
        } else {
            return "Obese"
        }
    }
};


(function() {

    console.log("Here is your Profile ")
    console.log("Full Name: " + firstName + " " + lastName);
    console.log("Profession : " + job);
    console.log("Age : " + tempAge + " " + "years old");
    console.log("Is Eligible to Vote : " + isEligibleToVote);

    console.log("Family Members ");

    //Displaying the family member with foreach
    familyMember.forEach(function(member, index) {
        console.log("Family Member  " + (index + 1) + " : " + member);
    });

    // call to bmi calculator 
    calcBmi(weight, height);
})();

