let details = document.createElement("div");
details.setAttribute("id", "list");
details.innerHTML =
  "<ul id=list><li id=list1><li id=list2><li id=list3><li id=list4><li id=list5><li id=list6></li></li></li></li></li></li></ul>";
document.getElementById("sub").appendChild(details);

async function getData() {
  let input = document.getElementById("text").value;
  let data = await fetch(`https://api-thirukkural.vercel.app/api?num=${input}`);
  let data1 = await data.json();
  // console.log(data1[0].Bycatch)
  console.log(data1);

  let chapterTamil = data1.chap_tam;
  let chapterGroupTam = data1.chapgrp_tam;
  let line1 = data1.line1;
  let line2 = data1.line2;
  let section = data1.sect_tam;
  let explanation = data1.tam_exp;
  document.getElementById("list1").innerHTML = `அதிகாரம் : ${chapterTamil}`;
  document.getElementById("list2").innerHTML = `இயல் : ${chapterGroupTam}`;
  document.getElementById("list3").innerHTML = `குறள் : ${line1}`;
  document.getElementById("list4").innerHTML = ` ${line2}`;
  document.getElementById("list5").innerText = `பால் : ${section}`;
  document.getElementById("list6").innerText = `விளக்கம் : ${explanation}`;
  //let availability = data1.Availability
}
getData();