let students = [
    {
        name: "Amna",
        gender: "f",
        dob: new Date("02-04-1990"),
        address: {
            ilaqa: "Gulistan-e-Johar",
            city: "Karachi",
            country: "Pakistan",
            postalCode: 47114
        },
        phoneNo: "0331-2324243",
        admissionTestScore: 56,
        hasInternet: true,
        hasComputer: false,
        hasJob: true,
        hasSchoolBefore: false
    },
    {
        name: "Hadia",
        gender: "f",
        dob: new Date("05-15-1984"),
        address: {
            ilaqa: "Lyari",
            city: "Karachi",
            country: "Pakistan",
            postalCode: 75660
        },
        phoneNo: "0345-3452953",
        admissionTestScore: 48,
        hasInternet: false,
        hasComputer: false,
        hasJob: false,
        hasSchoolBefore: true
    },
    {
        name: "Ahmed",
        gender: "m",
        dob: new Date("06-27-2002"),
        address: {
            ilaqa: "University Road",
            city: "Quetta",
            country: "Pakistan",
            postalCode: 82215
        },
        phoneNo: "0333-0124325",
        admissionTestScore: 33,
        hasInternet: true,
        hasComputer: false,
        hasJob: false,
        hasSchoolBefore: false
    },
    {
        name: "Fariha",
        gender: "f",
        dob: new Date("09-13-1998"),
        address: {
            ilaqa: "University Road",
            city: "Karachi",
            country: "Pakistan",
            postalCode: 82215
        },
        phoneNo: "0331-9432532",
        admissionTestScore: 33,
        hasInternet: true,
        hasComputer: false,
        hasJob: false,
        hasSchoolBefore: false
    },
    {
        name: "Abdullah",
        gender: "m",
        dob: new Date("01-24-1972"),
        address: {
            ilaqa: "Bazar Colony",
            city: "Lahore",
            country: "Pakistan",
            postalCode: 32212
        },
        phoneNo: "0345-9912121",
        admissionTestScore: 33,
        hasInternet: false,
        hasComputer: false,
        hasJob: true,
        hasSchoolBefore: true
    }
];

//Q2.Print each student in this format:

// for (let i = 0; i < students.length; i++) {

//     if (students[i].gender === "f") {
//         console.log(students[i].name);
//     }
// }
//Q3.Print names of male students only.
//for (let i = 0 ; i < students.length ; i++) {
//if (students[i]. gender==="m"){
//  console.log(students[i].name);
//}
//}
//Q4.Print names of students who have passed the admission test. Passing marks are 50.
// for(let i = 0 ; i < students.length ; i++){
// if (students[i].admissionTestScore >=50){
//     console.log(students[i].name);
// }
// }
//Q5. Print names of eligible students only (students who have internet and live in Karachi are eligible)
// for (let i = 0; i < students.length; i++) {
//     if (students[i].hasInternet == true && students[i].address.city == "Karachi") {
//         console.log(students[i].name);
//     }
// }
//Q6.Print address of each student in this format:
// Amna's address:
// Gulistan-e-Johar in Karachi, Pakistan

// for (let i = 0; i < students.length; i++) {
//     console.log (students[i].name + "'s Address: \n" + students[i].address.ilaqa + "in" + students[i].address.city + " , " + students[i].address.country)
//     console.log(" ");
// }
//    Q7.Print names and phone number of students who have Ufone.

// for (let i = 0; i < students.length; i++) {
//     if (students[i].phoneNo.charAt(2) == "3") {
//         console.log(students[i].name + "\n" + students[i].phoneNo + "\n" + "ufon\n")
//     }
// }

//Q8.Students who have a job or a class are placed in Group B. Print the names of students in Group A, and in Group B, in the below format:
// let groupA = [];
// let groupB = [];
//  for(let i = 0 ; i < students.length ; i++) {
// if(students[i].hasJob=== true || students[i].hasSchoolBefore===true){
//      groupB.push(students[i].name)
// }
// else{
//     groupA.push(students[i].name)
// }
//  }
//  console.log("group")
//Q9.Print age of each student in the below format:
// for (let i = 0; i < students.length; i++) {
//       if(students[i].dob.getFullYear()  )
//       console.log(students[i].name);
// }

// Q10.Print the name of the oldest student

let today = new Date()
for( let i = 0; i < students.length; i++){
  let age = today.getFullYear() - students[i].dob.getFullYear();

  console.log(students[i].name + "'s age is " + age +  " years");
}