var mto=0.5;
var menu_score = 0;
var naoh = 25;
var sand = 50;
function dispmenu(val)
{
   val.classList.toggle("change");
  menu_score = menu_score+1;
  if(menu_score==1)
  {
    document.getElementById("navbar").setAttribute("style","display:block");
    document.getElementById("simulation-cont").setAttribute("style","opacity:0.5");
      if(mto!=1)
        document.getElementById("matwork").setAttribute("style","opacity:1");
    menu_score=-1;
    document.body.style.backgroundColor="black";
  }
  else
    {
      if(mto!=1)
        document.getElementById("matwork").setAttribute("style","opacity:10");
         document.body.style.backgroundColor="white";
          document.getElementById("simulation-cont").setAttribute("style","opacity:01");
      document.getElementById("navbar").setAttribute("style","display:none");
	  }
}

function dimension()
{
	document.getElementById("simulation").innerHTML="<img src='images/patternToMake.gif' width='80%'>";
	document.getElementById("dimension").style.display = "none";
	setTimeout(() => {
	document.getElementById("thickPaper").style.display = "block";
	}, 6000);
}

function thickPaper()
{
	document.getElementById("simulation").innerHTML="<img src='images/drawDatterns.gif' width='80%'>";
	document.getElementById("thickPaper").style.display = "none";
	setTimeout(() => {
	document.getElementById("foamCutting").style.display = "block";
	}, 11500);
}

function foamCutting()
{
	document.getElementById("simulation").innerHTML="<img src='images/epsSheet.gif' width='60%'>";
	document.getElementById("foamCutting").style.display = "none";
	setTimeout(() => {
	document.getElementById("pattern300mm").style.display = "block";
	}, 11500);
}

function pattern300mm()
{
	document.getElementById("simulation").innerHTML="<img src='images/pattern300mm.gif' width='80%'>";
	document.getElementById("pattern300mm").style.display = "none";
	setTimeout(() => {
	document.getElementById("pattern600mm").style.display = "block";
	}, 9000);
}

function pattern600mm()
{
	document.getElementById("simulation").innerHTML="<img src='images/pattern600mm.gif' width='80%'>";
	document.getElementById("pattern600mm").style.display = "none";
	setTimeout(() => {
	document.getElementById("pattern900mm").style.display = "block";
	}, 9000);
}

function pattern900mm()
{
	document.getElementById("simulation").innerHTML="<img src='images/pattern900mm.gif' width='80%'>";
	document.getElementById("pattern900mm").style.display = "none";
	setTimeout(() => {
	document.getElementById("finalPattern").style.display = "block";
	}, 6000);
}

function finalPattern()
{
	document.getElementById("simulation").innerHTML="<img src='images/finalPattern.gif' width='40%'>";
	document.getElementById("finalPattern").style.display = "none";
}

function resetfun()
{
	alert("Simulation will get restart.");
	location.reload();
}