var date =  new Date();
var dayOfMonth = date.getDate();
var day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
var week=date.getDay();
var months=["January","Feburary","March","April","May","June","July","August","September","Octuber","November","December"]
// Q#1
document.write(date)
document.write("<br>")
// Q#2
document.write("Current Month "+months[date.getMonth()])
document.write("<br>")
// Q#3
document.write("Today is \n"+day[date.getDay()])
document.write("<br>")
// Q#4
if(day===7){
    document.write("Fun day")
}
if(day===0){
    document.write("Fun day")
}
if(week<6){
    document.write("Working day"+day[date.getDay()])
}
document.write("<br>")
// document.write(week)
// Q#5
if(dayOfMonth<16){
document.write("First fifteen days of the month")
}
if(dayOfMonth>15){
    document.write("last fifteen days of the month")
};
document.write("<br>")
// Q#6
var specificDate = new Date(1970, 0, 1);
document.write(specificDate.getTime())
document.write("<br>")
// Q#7
var currentHrs = date.getHours();
if(currentHrs<13){
    document.write(currentHrs+"\n Am")
}if(currentHrs>12){
    document.write(currentHrs+"\n Pm")
}
document.write("<br>")
// Q#8
var Laterdate=new Date(2020 ,11 ,31)
document.write(Laterdate)
document.write("<br>")
// Q#9
var Ramzanrimind=new Date(2015, 6 ,15)
document.write(Ramzanrimind.getDa())

