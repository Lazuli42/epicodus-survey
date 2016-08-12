
var cSharp = 0;
var Java = 0;
var php = 0;
var ruby = 0;

$("#question1").submit(function(event) {
  event.preventDefault();
  var answer1 = $("input:radio[class=answer1]:checked").val();

  if (answer1 === "design") {
    $("#question1").hide();
    $("#header").hide();
    $("#trackDesign").slideToggle(); }
  else {
    $("#question1").hide();
    $("#question2").show(); }
});

$("#question2").submit(function(event) {
  event.preventDefault();
  var answer2 = $("input:radio[class=answer2]:checked").val();

  if (answer2 === "c") {
    cSharp += 1;
    $("#question2").hide();
    $("#question3").show(); }
  else if (answer2 === "p") {
    php += 1;
    $("#question2").hide();
    $("#question3").show(); }
  else {
    Java += 1;
    ruby += 1;
    $("#question2").hide();
    $("#question3").show(); }
});

$("#question3").submit(function(event) {
  event.preventDefault();
  var answer3 = $("input:radio[class=answer3]:checked").val();

  if (answer3 === "cp") {
    cSharp += 2;
    php += 2;
    $("#question3").hide();
    $("#question4").show(); }
  else if (answer3 === "jr") {
    Java += 2;
    ruby += 2;
    $("#question3").hide();
    $("#question4").show(); }
  else {
    Java += 1;
    $("#question3").hide();
    $("#question4").show(); }
});

$("#question4").submit(function(event) {
  event.preventDefault();
  var answer4 = $("input:radio[class=answer4]:checked").val();

  if (answer4 === "c") {
    cSharp  += 3;
    $("#question4").hide();
    $("#question5").show(); }
  else if (answer4 === "r") {
    ruby  += 3;
    $("#question4").hide();
    $("#question5").show(); }
  else if (answer4 === "p") {
    php  += 3;
    $("#question4").hide();
    $("#question5").show(); }
  else if (answer4 === "j") {
    Java  += 3;
    $("#question4").hide();
    $("#question5").show(); }
  else {
    Java += 1;
    $("#question4").hide();
    $("#question5").show(); }
});

$("#question5").submit(function(event) {
  event.preventDefault();
  var answer5 = $("input:radio[class=answer5]:checked").val();
  console.log(cSharp + ", " + Java + ", " + php + ", " + ruby)

  if (answer5 === "yes") {
    $("#question5").hide();
    $("#header").hide();
    $("#trackPHP").slideToggle(); }
  else {
    $("#question5").hide();
    $("#header").hide();
    if ((cSharp > Java) && (cSharp > ruby) && (cSharp > php)) {
      $("#trackCSharp").slideToggle(); }
    else if ((ruby > Java) && (ruby > cSharp) && (ruby > php)) {
      $("#trackRuby").slideToggle(); }
    else if ((php > Java) && (php > ruby) && (php > cSharp)) {
      $("#trackPHP").slideToggle(); }
    else {
      $("#trackJava").slideToggle(); }}
});

$(".reload").click(function(){
  location.reload();
})
