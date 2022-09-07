document.querySelector(".center-btn .submit").addEventListener("click",starter);

document.querySelector(".result-box button").addEventListener("click",function ()
{
 document.querySelectorAll("#calculator .container")[0].classList.toggle("hide-contant");
 
 document.querySelectorAll("#calculator .container")[1].classList.toggle("hide-contant");
});

function starter()
{
 var name_1,name_2;
 var sum="";
 name_1 = document.getElementsByName("getname")[0].value.toLowerCase();
 
 name_2 = document.getElementsByName("getname")[1].value.toLowerCase();
 
 sum = primCal(name_1,name_2);
 console.log(sum);
 sum = secCal(sum);
 console.log(sum);
 resultPrint(sum)
}

function resultPrint(sum)
{
document.querySelector(".result-box h2").innerHTML = sum+"%";

document.querySelector(".result-box p").innerHTML = getmessage(sum);

 document.querySelectorAll("#calculator .container")[0].classList.toggle("hide-contant");
 
 document.querySelectorAll("#calculator .container")[1].classList.toggle("hide-contant");
}
/////////code for calculation////

function primCal(name_1,name_2)
{
 var sum="";
 var temp = name_1 + "love" + name_2;
 var num = 0;
 var getchar;
 
 for(var i=0;i<temp.length;i++)
 { 
  getchar = temp.charAt(i);
   if(getchar>='a' && getchar<='z')
   {
    for(var j=i;j<temp.length;j++)
    {
     if(getchar===temp.charAt(j))
      {
      temp = replaceAt(temp,j,temp.charAt(j).toUpperCase());
      num++;
      }
    }
    sum = sum + num;
   num = 0;
   }
   
 }
 return sum;
}

function secCal(sum)
{
 var final = sum;
 var num;
 while(sum>=100)
{
 num=sum.length;
 sum="";
 if (num%2 !== 0) {
 for (var i = 0; i < Math.floor(num/2); i++) {
  sum = sum + (+final.charAt(i)+ +final.charAt(num-1-i));
 }
 sum = sum + (final.charAt(Math.floor(num/2)));
 final=sum;
 }
 
  if (num%2 === 0) {
 for (var i = 0; i < Math.floor(num/2); i++) {
  sum = sum + (+final.charAt(i)+ +final.charAt(num-1-i));
 }
 final=sum;
}

}
return sum;
}


///////////string function


function replaceAt(temp,index,variable)
{
 temp = temp.substring(0,index)+variable+temp.substring(index+1,temp.length);
 
 return temp;
}

function getmessage(sum)
{
 if (sum>95) {
  return "Steal my heart and I will steal yours. This would be the perfect crime for the both of us.";
 }
 else if (sum<=95 && sum>80) {
  return "If I had a flower for every time I thought of you, I could walk in my garden forever.";
 }
 else if (sum<=80 && sum>65) {
  
  return "You make a lovely pair. The love between you is gentle, caring, and compassionate.";
 }
 else if (sum<=65 && sum>40) {
  return "The best and most beautiful things in the world cannot be seen or even touched. They must be felt with the heart.";
 }
 else if (sum < 40) {
  return "This pair may not make a perfect example. More of an 'I Know' attitude will hinder the relationship.";
 }
}