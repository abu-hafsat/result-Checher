const myobj1 = {
    name: "musa",
     age: 25,
      class: "level3",
      examnumber: 0012387676,
      grade: "pass",
      subjects: ["english 10", "math 10", "physics 40", "chemistry 30"]
}
  const myobj2 = {
      name: "maryam",
      age:30,
      class: "level3",
      examnumber: 3682901737,
      grade: "good",
      subjects: ["english 10", "math 10", "physics 40", "chemistry 30",]
  
  };
  const myobj3 = {
      name: "jamilu",
      age: 28,
      class: "level3",
      examnumber: 1937652095,
      grade: "excellent",
      subjects: ["english 10", "math 10", "physics 40", "chemistry 30" ]
  
  };
  const template = "sorry you fail this exams, you mus refeat it again";
  
   const input = document.getElementById("input");
  const reply = () => {
      if(input.value == 0012387676 ) {
      document.getElementById("result0").innerText = myobj1.subjects[0];
      document.getElementById("result1").innerText = myobj1.subjects[1];
      document.getElementById("result2").innerText = myobj1.subjects[2];
      document.getElementById("result3").innerText = myobj1.subjects[3];
      document.getElementById("grade").innerText = " Grade : Credit";
      document.getElementById("grade").style.fontSize = " 22px";
      document.getElementById("grade").style.color = " red";
      document.getElementById("result").style.color = " blue";
      } else if (input.value == 3682901737) {
        document.getElementById("result0").innerText = myobj2.subjects[0];
        document.getElementById("result1").innerText = myobj2.subjects[1];
        document.getElementById("result2").innerText = myobj2.subjects[2];
        document.getElementById("result3").innerText = myobj2.subjects[3];
        document.getElementById("grade").innerText = " Grade : Distinction";
        document.getElementById("grade").style.fontSize = " 22px";
        document.getElementById("grade").style.color = " red";
        document.getElementById("result").style.color = " blue";   
       } else if (input.value == 1937652095 ) {
        document.getElementById("result0").innerText = myobj3.subjects[0];
        document.getElementById("result1").innerText = myobj3.subjects[1];
        document.getElementById("result2").innerText = myobj3.subjects[2];
        document.getElementById("result3").innerText = myobj3.subjects[3];
        document.getElementById("grade").innerText = " Grade : pass";
        document.getElementById("grade").style.fontSize = " 22px";
        document.getElementById("grade").style.color = " red";
        document.getElementById("result").style.color = " blue"; 
     } else if (input.value == ""){
        document.getElementById("grade").innerText = "no number entered"
        document.getElementById("grade").style.fontSize = " 22px";
        document.getElementById("grade").style.color = " red";
        document.getElementById("result0").innerText = "";
        document.getElementById("result1").innerText = "";
        document.getElementById("result2").innerText = "";
        document.getElementById("result3").innerText = "";
     } else {
        document.getElementById("grade").innerText = "you did'not enter a valid number!"
        document.getElementById("grade").style.fontSize = " 22px";
        document.getElementById("grade").style.color = " red";
        document.getElementById("result0").innerText = "";
        document.getElementById("result1").innerText = "";
        document.getElementById("result2").innerText = "";
        document.getElementById("result3").innerText = "";
      }
  };
  
  const submit = document.querySelector("#submit");
   submit.addEventListener("click", reply, false);

   function resultdisplay() {
    return myobj1.subjects.split(",");
   }