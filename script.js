function gethistory(){
    document.getElementById("history-value").innerText;
}
function printhistory(num){
    document.getElementById("history-value").innerText=num;

}
function getoutput(num){
   return document.getElementById("output -value").innerText;
}
function printoutput(num){
    if(num=""){
        document.getElementById("output- value").innerText=num;

    }

    else 
    {

    document.getElementById("output- value").innerText=getformattenumber(num)
}}
function getformattenumber(num){
    var n=number(num);
    var value=n.tolocalestring(en);
    return value;

}
function reversenumberformat(num){
    return number(num.replace(/,/g,''));
}
 var operator=document.getElementsByClassName("operator");
 for(var i=0;i<operator.length;i++){
     operator[i].addEventListener('click',function(){
         if(this.id="clear"){
             printhistory("");
             printoutput("");
         }
        else if(this.id="backspace"){
             var output=reversenumberformat(getoutput).tostring();
             output=output.substr(0,output,length-1);
             getintoutput(output);
         }}
         else
     });
 }
 var number=document.getElementsByClassName("number");
 for(var i=0;i<number.length;i++){
     operator[i].addEventListener('click',function(){
         var output=( reversenumberformat(getoutput));
         if(output !=null){
             output=output.this.id;
             printoutput(output);

         }
     });
 }
printoutput("");