
/* ============================================================
   Week 5 — Arrays & Objects
   ------------------------------------------------------------
   Open the browser console to see your output.
   ============================================================ */


/* ------------------------------------------------------------
   Task 1: Array Basics 📋

   Start with this array:

   1. Add "mango" to the end.
   2. Remove the FIRST item using .shift().
   3. Log the final array.
   4. Log fruits.length.
   ------------------------------------------------------------ */

const fruits = ["apple", "banana", "orange"];

fruits.push("mango");
fruits.shift();
console.log(fruits);
console.log(fruits.length);


/* ------------------------------------------------------------
   Task 2: forEach Loop 🔁

   Use .forEach() to log each city as:

   1. Mogadishu
   2. Hargeisa
   3. Bosaso
   4. Garowe
   ------------------------------------------------------------ */

const cities = ["Mogadishu", "Hargeisa", "Bosaso", "Garowe"];

cities.forEach((city, index) => {
    console.log(`${index + 1}. ${city}`);
});


/* ------------------------------------------------------------
   Task 3: Build an Object 👤

   1. Create an object called student.
   2. Add name, age, and isEnrolled properties.
   3. Log student.name.
   4. Increase student.age by 1.
   5. Log the whole student object.
   ------------------------------------------------------------ */

const student = {
    name: "Ali",
    age: 20,
    isEnrolled: true
};


console.log(student.name);
student.age += 1;
console.log(student);


/* ------------------------------------------------------------
   Task 4: Array of Objects 🎓

   Use .forEach() to log each student as:

   Fatuma scored 92
   Asha scored 68
   Khadija scored 85
   ------------------------------------------------------------ */

const students = [
    { name: "Fatuma", score: 92 },
    { name: "Asha", score: 68 },
    { name: "Khadija", score: 85 }
];

students.forEach((student) => {
    console.log(`${student.name} scored ${student.score}`);
});


/* ------------------------------------------------------------
   Task 5: STRETCH CHALLENGE 🚀

   Use .forEach() to log ONLY the names of students
   whose scores are greater than or equal to 70.
   ------------------------------------------------------------ */

students.forEach((student) => {

    if (student.score >= 70) {
        console.log(student.name);
    }

});
