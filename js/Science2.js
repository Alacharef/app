
// always copy this

      var A, B, C,a, b, c,sNam ;     
     while (!sNam) {
       sNam = prompt("please provide student name");  
     }
            
      var sAlert = document.getElementById('alert'); 
      while (!sGender) {
        var sGender = prompt("please provide a gender (boy or girl)");
      }
      var sName= sNam[0].toUpperCase()+sNam.slice(1).toLowerCase();
      // _____________________________________ switch variabls______________________________________
                                                                            switch(sGender) {
                                                                              case "boy":
                                                                                case "BOY":
                                                                                  
                                                                                A = "He";
                                                                                a = "he";

                                                                                B ="His";
                                                                                b ="his";

                                                                                C ="Your son";
                                                                                c ="your son";

                                                                                sAlert.innerHTML="it's a boy";
                                                                                sAlert.className="alert alert-primary";

                                                                                break;
                                                                              case "girl":
                                                                                case "GIRL":
                                                                                A = "She";
                                                                                a = "she";

                                                                                B ="Her";
                                                                                b ="her";

                                                                                C ="Your daughter";
                                                                                c ="your daughter";
                                                                                sAlert.innerHTML="it's a girl";
                                                                                sAlert.className="alert alert-success";
                                                                                break;
                                                                              
                                                                              default:
                                                                                A = "Please provide a gender";
                                                                                a = "Please provide a gender";

                                                                                B ="Please provide a gender";
                                                                                b ="Please provide a gender";

                                                                                C ="Please provide a gender";
                                                                                c ="Please provide a gender";

                                                                                sAlert.innerHTML="please provide a gender";
                                                                                sAlert.className="alert alert-danger";
                                                                                break;
                                                                                
                                                                            }
// until here

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// console.log(sName);
// console.log(A,B,C,a,b,c);

       
      let one = [     {grade:"no select", comment:""},
                        {grade:"A", comment: sName +" demonstrates excellent achievement of what is expected for this year level."},
                        {grade:"B", comment: sName +" demonstrates high achievement of what is expected for this year level."},
                        {grade:"C", comment: sName +" demonstrates satisfactory achievement of what is expected for this year level."},
                        {grade:"D", comment: sName +" demonstrates limited achievement of what is expected for this year level."},
                        {grade:"E", comment: sName +" demonstrates low achievement of what is expected for this year level."}
                ];
      one.name="opening";

  

      let two = [    {grade:"no select", comment:""},
                        {grade:"A", comment: A +" describes and compares the growth and change of a number of living things through stages of their life, identifying similarities and differences between parent and offspring and recognising common elements within life cycles."},
                        {grade:"B", comment: A +" describes how living things grow and change through different stages of their life, identifying some similarities between parent and offspring."},
                        {grade:"C", comment: A +" describes how living things grow and change through different stages of their life."},
                        {grade:"D", comment: A +" describes with limited understanding how living things grow and change through different stages of their life."},
                        {grade:"E", comment: A +" does not meet the expected standard."}
                ];
      two.name="Biological sciences";

        let three = [    {grade:"no select", comment:""},
                        {grade:"A", comment: A +" identifies that different materials have different uses, describes their properties and explains how the purpose of materials can change when they are combined."},
                        {grade:"B", comment: A +" identifies that different materials have different uses and explains how the purpose of materials can change when they are combined."},
                        {grade:"C", comment: A +" identifies that different materials have different uses and describes how the purpose of materials can change when they are combined."},
                        {grade:"D", comment: A +" identifies different materials and some of their uses."},
                        {grade:"E", comment: A +" does not meet the expected standard."}
                ];
      three.name="Chemical sciences";

        let four = [    {grade:"no select", comment:""},
                        {grade:"A", comment: A +" identifies a range of resources, describes a variety of ways they can be used and reused, and how this affects other living things."},
                        {grade:"B", comment: A +" identifies a resource and ways in which it can be used, and how the use may affect their daily life."},
                        {grade:"C", comment: A +" identifies a resource, and ways in which it can be used."},
                        {grade:"D", comment: A +" identifies a resource and lists some simple ways it can be used."},
                        {grade:"E", comment: A +" does not meet the expected standard."}
                ];
      four.name="Earth, space sciences";

        let five = [    {grade:"no select", comment:""},
                        {grade:"A", comment: A +" explains the effect of combined forces on an object’s behaviour or shape."},
                        {grade:"B", comment: A +" explains that different forces affect an object’s behaviour or shape in different ways."},
                        {grade:"C", comment: A +" describes how a force affects an object’s behaviour or shape."},
                        {grade:"D", comment: A +" identifies that an object’s behaviour or shape has changed."},
                        {grade:"E", comment: A +" does not meet the expected standard."}
                ];
      five.name="Physical sciences";

        let six = [    {grade:"no select", comment:""},
                        {grade:"A", comment: A +" uses examples from Science Understanding to show how science and scientific events impact on people’s daily lives - living things, materials, resources, forces."},
                        {grade:"B", comment: A +" uses examples from Science Understanding to show where science is used in people’s daily lives - living things, materials, resources, forces."},
                        {grade:"C", comment: A +" uses simple personal examples from Science Understanding to show where science is used in their daily lives - living things, materials, resources, forces."},
                        {grade:"D", comment: A +" requires guidance to use simple personal examples from Science Understanding to show where science is used in people’s daily lives - living things, materials, resources, forces."},
                        {grade:"E", comment: A +" does not meet the expected standard."}
                ];
      six.name="Science Endeavour";

        let seven = [    {grade:"no select", comment:""},
                        {grade:"A", comment: C +" poses specific and relevant questions and responds to questions making detailed predictions about objects and events."},
                        {grade:"B", comment: C +" poses relevant questions, responds to questions and makes predictions about objects and events."},
                        {grade:"C", comment: C +" poses relevant questions, responds to questions and makes simple predictions about familiar objects and events."},
                        {grade:"D", comment: C +" requires guidance to pose and respond to questions and to make predictions."},
                        {grade:"E", comment: C +" does not meet the expected standard."}
                ];
      seven.name="Science Inquiry Skills1";

        let eight = [    {grade:"no select", comment:""},
                        {grade:"A", comment: sName +" records observations using informal measurements, represents, describes and communicates detailed observations in a variety of ways, relating these to their predictions."},
                        {grade:"B", comment: sName +" records observations using informal measurements, represents and describes observations and communicates their ideas in a variety of ways."},
                        {grade:"C", comment: sName +" records observations using informal measurements, represents observations and communicates their ideas in a variety of ways."},
                        {grade:"D", comment: sName +" records and communicates simple observations."}
                        
                ];
      eight.name="Science Inquiry Skills2";

      











               
                

let Science2 = new Array(one, two, three, four, five, six, seven, eight);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////    always copy this ///////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

// change this to the year level (don't forget)
document.getElementById('theYear').innerText='YEAR-2 SCIENCE';
                
                
                // console.log(Science2);
                // console.log(Object.keys({Science2})[0]);


                Science2.forEach(function(year, index){

                  
                  var paraText=document.createElement("p");
                  paraText.setAttribute('id','j'+index)
                  document.getElementById("p1").appendChild(paraText);
                  
                  /////////////////create a div////////////////////////////
                  var elementDiv = document.createElement("div");
                  elementDiv.setAttribute("id","div"+index);
                  elementDiv.setAttribute("class","col-md-2");
                  document.getElementById("divn").appendChild(elementDiv);
                  // console.log(elementDiv.id);
                  
                  ///////////////////:create a label(name)///////////////
                  var namePara = document.createElement("label");
                  namePara.innerText = year.name;
                  // namePara.setAttribute("style", "height:60px ;");
                  document.getElementById("div"+index).appendChild(namePara);
                  
                  /////////////////create a select form/////////////////////////
                  var elementSelect = document.createElement("select");
                  elementSelect.setAttribute("id", "mySelect"+index);
                  elementSelect.setAttribute("class", "custom-select");  
                  document.getElementById("div"+index).appendChild(elementSelect);
                  
                  //////////// loop through the small array////////////////
                  year.forEach(function(ye){
                  // console.log(ye.grade, index);
                  ////////////////////// create an option///////////////////////
                  var z = document.createElement("option");  
                  elementSelect.setAttribute("onclick","myFunction(id)");           
                  var t = document.createTextNode(ye.grade);  
                  z.appendChild(t);
                  document.getElementById("mySelect"+index).appendChild(z);                   
                      });
                      });
                  
                  /////////////////////////////////////////////////////////////my function///////////////////////////////////////
                  function myFunction(id) {
                  var justNum = document.getElementById(id).id;
                  
                  var e = document.getElementById(id);
                  switch (justNum.length) {
                    case 9:
                     var v = justNum.slice(-1);
                      break;
                   case 10:
                     var v = justNum.slice(-2);
                       break;  
                  
                    default:
                      break;
                  }
                  
                  // console.log(e, v);
                  var info = e.options[e.selectedIndex].text;
                  // console.log(info); 
                  
                  
                                                                                
                  var pos = Science2[v].map(function(e) { return e.grade;}).indexOf(info);                                                                       
                  // console.log(info,pos, Science2[v][pos].comment );                                                                      
                  document.getElementById("j"+v).innerHTML= Science2[v][pos].comment;                                                                                                                                  
                  
                  }            
