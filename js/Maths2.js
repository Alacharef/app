
// always copy this

var A, B, C,a, b, c,sNam;     
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
{grade:"A", comment: sName +" demonstrates excellent achievement of what is expected for this year level.&nbsp;"},
{grade:"B", comment: sName +" demonstrates high achievement of what is expected for this year level.&nbsp;"},
{grade:"C", comment: sName +" demonstrates satisfactory achievement of what is expected for this year level.&nbsp;"},
{grade:"D", comment: sName +" demonstrates limited achievement of what is expected for this year level.&nbsp;"},
{grade:"E", comment: sName +" demonstrates low achievement of what is expected for this year level.&nbsp;"}
];
one.name="opening ";

let two = [    {grade:"no select", comment:""},
{grade:"A", comment: A +" fluently counts and orders numbers to and from 1000 and beyond from any starting point.&nbsp;"},
{grade:"B", comment: A +" fluently counts and orders numbers to and from 1000 from any starting point.&nbsp;"},
{grade:"C", comment: A +" counts to and from 1000.&nbsp;"},
{grade:"D", comment: A +" counts to 1000 in order most of the time.&nbsp;"},
{grade:"E", comment: A +" does not meet the requirements of a D grade.&nbsp;"}
];
two.name="num and place value ";

let three = [    {grade:"no select", comment:""},
{grade:"A", comment: C +" performs addition and subtraction calculations using a range of mental and written strategies and explains why a strategy is more efficient.&nbsp;"},
{grade:"B", comment: C +" performs addition and subtraction calculations using a range of mental and written strategies.&nbsp;"},
{grade:"C", comment: C +" performs simple addition and subtraction calculations using a range of strategies.&nbsp;"},
{grade:"D", comment: C +" performs simple addition and subtraction calculations using counting strategies.&nbsp;"}

];
three.name="add and sub";

let four = [    {grade:"no select", comment:""},
{grade:"A", comment: sName +" represents multiplication and division problems flexibly in a variety of ways, including grouping into equal sized groups or sets.&nbsp;"},
{grade:"B", comment: sName +" represents multiplication and division problems in more than one way, including grouping into equal sized groups or sets.&nbsp;"},
{grade:"C", comment: sName +" represents multiplication and division by grouping into equal sized groups or sets.&nbsp;"},
{grade:"D", comment: "With guidance, "+ sName +" represents multiplication and division by grouping into equal sized groups or sets.&nbsp;"}

];
four.name="multiplication";

let five = [    {grade:"no select", comment:""},
{grade:"A", comment: A +" divides collections and shapes to show halves, quarters and eighths and explains them using appropriate fractional language.&nbsp;"},
{grade:"B", comment: A +" divides collections and shapes to show halves, quarters and eighths and describes the fraction and the number of parts.&nbsp;"},
{grade:"C", comment: A +" divides collections and shapes into halves, quarters and eighths.&nbsp;"},
{grade:"D", comment: A +" identifies halves, quarters or eighths of a collection or shape.&nbsp;"},
{grade:"E", comment: A +" does not meet the requirements of a D grade.&nbsp;"}
];
five.name="fraction and decimals";

let six = [    {grade:"no select", comment:""},
{grade:"A", comment: C +" connects and creates collections of Australian coins and notes according to a value.&nbsp;"},
{grade:"B", comment: C +" connects collections of Australian coins and notes according to their value.&nbsp;"},
{grade:"C", comment: C +" connects collections of Australian coins according to their value.&nbsp;"},
{grade:"D", comment: C +" identifies the value of Australian coins and counts small collections.&nbsp;"},
{grade:"E", comment: C +" does not meet the requirements of a D grade.&nbsp;"}
];
six.name="money and finance";

let seven = [    {grade:"no select", comment:""},
{grade:"A", comment: A +" creates, describes and continues increasing and decreasing number sequences, from different starting points, involving twos, threes and fives.&nbsp;"},
{grade:"B", comment: A +" recognises, describes and continues increasing and decreasing number sequences involving twos, threes and fives.&nbsp;"},
{grade:"C", comment: A +" recognises increasing and decreasing number sequences involving twos, threes and fives.&nbsp;"},
{grade:"D", comment: A +" identifies some increasing number sequences involving twos, threes and fives.&nbsp;"},
{grade:"E", comment: A +" does not meet the requirements of a D grade.&nbsp;"}
];
seven.name="Patterns and algebra1";

let eigth = [    {grade:"no select", comment:""},
{grade:"A", comment: C +" dentifies the missing element in a number sequence and creates and describes number sequences.&nbsp;"},
{grade:"B", comment: C +" identifies the missing element in a number sequence and describes the sequence.&nbsp;"},
{grade:"C", comment: C +" identifies the missing element in a number sequence.&nbsp;"},
{grade:"D", comment: C +" continues a number sequence.&nbsp;"},
{grade:"E", comment: C +" does not meet the requirements of a D grade.&nbsp;"}
];
eigth.name="patterns and algebra2";

let nine = [    {grade:"no select", comment:""},
{grade:"A", comment: A +" chooses appropriate uniform, informal units to order shapes. Explains reasoning behind choice of unit and order.&nbsp;"},
{grade:"B", comment: A +" chooses appropriate uniform, informal units to order shapes and objects by length, area, volume and capacity.&nbsp;"},
{grade:"C", comment: A +" orders shapes and objects by length, area, volume and capacity using uniform, informal units.&nbsp;"},
{grade:"D", comment: A +" orders shapes and objects using informal units.&nbsp;"},
{grade:"E", comment: A +" does not meet the requirements of a D grade.&nbsp;"}
];
nine.name="uni of measurements";

let ten = [    {grade:"no select", comment:""},
{grade:"A", comment: C +" tells the time to the quarter-hour, compares times and uses the features of a clock to explain reasoning.&nbsp;"},
{grade:"B", comment: C +" tells the time to the quarter-hour using features of a clock to explain reasoning.&nbsp;"},
{grade:"C", comment: C +" tells the time to the quarter-hour.&nbsp;"},
{grade:"D", comment: C +" tells half-past and some quarter-to the hour times.&nbsp;"}
];
ten.name="measurements (time)";

let eleven = [    {grade:"no select", comment:""},
                  {grade:"A", comment: sName +" interprets calendars to solve problems involving dates, months and seasons.&nbsp;"},
                  {grade:"B", comment: sName +" interprets a calendar to identify the dates and the months included in seasons.&nbsp;"},
                  {grade:"C", comment: sName +" uses a calendar to identify the date and the months included in seasons.&nbsp;"},
                  {grade:"D", comment: " With guidance,"+sName +" uses a calendar to identify the date and names the months and seasons.&nbsp;"}
          ];
eleven.name="measurements(calendar)";

let twelve = [    {grade:"no select", comment:""},
{grade:"A", comment: A +" draws and represents a range of two-dimensional shapes and three-dimensional objects and compares the features of two-dimensional shapes and three-dimensional objects.&nbsp;"},
{grade:"B", comment: A +" draws and represents two-dimensional shapes and describes the features of three-dimensional objects.&nbsp;"},
{grade:"C", comment: A +" draws two-dimensional shapes and recognises the features of three-dimensional objects.&nbsp;"},
{grade:"D", comment: A +" draws some two-dimensional shapes and describes some features of three-dimensional objects.&nbsp;"},
{grade:"E", comment: A +" does not meet the requirements of a D grade.&nbsp;"}
];
twelve.name="shapes (2D,3D)";

let thirteen = [    {grade:"no select", comment:""},
{grade:"A", comment: C +" interprets simple maps of familiar locations and uses directional terms to explain the position of key features.&nbsp;"},
{grade:"B", comment: C +" interprets simple maps of familiar locations to describe the position of key features.&nbsp;"},
{grade:"C", comment: C +" interprets simple maps of familiar locations.&nbsp;"},
{grade:"D", comment: C +" identifies some features on maps of familiar locations.&nbsp;"},
{grade:"E", comment: C +" does not meet the requirements of a D grade.&nbsp;"}
];
thirteen.name="Location & Transfor..1";

let fourteen = [    {grade:"no select", comment:""},
{grade:"A", comment: sName +" explains the effects of one-step transformations of shapes using the language of flip, slide and turn, explains the differences between the types of transformations and creates their own.&nbsp;"},
{grade:"B", comment: sName +" explains the effects of one-step transformations of shapes using the language of flip, slide and turn and explains the differences between the types of transformations.&nbsp;"},
{grade:"C", comment: sName +" explains the effects of one-step transformations of shapes using the language of flip, slide and turn.&nbsp;"},
{grade:"D", comment: sName +" describes one-step transformations of shapes.&nbsp;"}

];
fourteen.name="Location & Transfor..2";

let fifteen = [    {grade:"no select", comment:""},
{grade:"A", comment: A +" describes the outcomes for everyday events using the language of chance and compares the likelihood of outcomes occurring, giving reasons.&nbsp;"},
{grade:"B", comment: A +" describes the outcomes for everyday events using the language of chance, giving reasons.&nbsp;"},
{grade:"C", comment: A +" describes the outcomes for everyday events using the language of chance.&nbsp;"},
{grade:"D", comment: A +" describes the outcomes for everyday events using everyday language.&nbsp;"},
{grade:"E", comment: A +" does not meet the requirements of a D grade.&nbsp;"}
];
fifteen.name="Chance";

let sixteen = [    {grade:"no select", comment:""},
{grade:"A", comment: C +" collects, organises, classifies and represents data in more than one way, relevant to the question.&nbsp;"},
{grade:"B", comment: C +" collects, organises, classifies and represents data appropriately, relevant to the question.&nbsp;"},
{grade:"C", comment: C +" makes sense of collected data and organises and represents data appropriately.&nbsp;"},
{grade:"D", comment: C +" collects and represents data appropriately.&nbsp;"},
{grade:"E", comment: C +" does not meet the requirements of a D grade.&nbsp;"}
];
sixteen.name="Data Representation1";

let seventeen = [    {grade:"no select", comment:""},
{grade:"A", comment: sName +" uses data displays to support inferences, and draw reasonable conclusions.&nbsp;"},
{grade:"B", comment: sName +" interprets the data by making relevant inferences.&nbsp;"},
{grade:"C", comment: sName +" makes simple inferences from collected data.&nbsp;"},
{grade:"D", comment:" With guidance, "+ sName+" makes simple inferences from collected data.&nbsp;"},
{grade:"E", comment: sName +" does not meet the requirements of a D grade.&nbsp;"}
];
seventeen.name="Data Representation2";








let Maths2 = new Array(one, two, three, four, five, six, seven, eigth, nine, ten,eleven ,twelve, thirteen, fourteen, fifteen, sixteen, seventeen);



// change this to the year level (don't forget)
document.getElementById('theYear').innerText='YEAR-2 MATHS';
           
           
           // console.log(Maths2);
           // console.log(Object.keys({Maths2})[0]);


           Maths2.forEach(function(year, index){

             
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
            //  var v = justNum.slice(-1);
             console.log("this is the number",justNum);
             console.log("this is sliced number",e);
             var info = e.options[e.selectedIndex].text;
             // console.log(info); 
             
             
                                                                           
             var pos = Maths2[v].map(function(e) { return e.grade;}).indexOf(info);                                                                       
             // console.log(info,pos, Maths2[v][pos].comment );                                                                      
             document.getElementById("j"+v).innerHTML= Maths2[v][pos].comment;                                                                                                                                  
             
             }            
