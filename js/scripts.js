
var cSharp = 0;
var Java = 0;
var php = 0;
var ruby = 0;

$("#question1").submit(function(event) {
  event.preventDefault();
  var answer1 = $("input:radio[class=answer1]:checked").val();

  if (answer1 === "design") {
    $("#question1").hide();
    $("#trackDesign").show(); }
    else {
      $("#question1").hide();
      $("#question2").show(); }
});

$("#question2").submit(function(event) {
  event.preventDefault();
  var answer2 = $("input:radio[class=answer2]:checked").val();

  if (answer2 === "c") {
    cSharp++;
    console.log("C#: " + cSharp);
    $("#question2").hide();
    $("#question3").show();
    return cSharp}
  else if (answer2 === "p") {
    php++;
    $("#question2").hide();
    $("#question3").show(); }
  else {
    Java++;
    ruby++;
    console.log(Java);
    $("#question2").hide();
    $("#question3").show(); }
});

$("#question3").submit(function(event) {
  event.preventDefault();
  var answer3 = $("input:radio[class=answer3]:checked").val();

  if (answer3 === "cp") {
    cSharp++;
    php++;
    $("#question3").hide();
    $("#question4").show();
    return cSharp, php}
  else if (answer3 === "jr") {
    Java++;
    ruby++;
    $("#question3").hide();
    $("#question4").show(); }
  else {
    Java++;
    console.log(Java);
    $("#question3").hide();
    $("#question4").show(); }
});

$("#question4").submit(function(event) {
  event.preventDefault();
  var answer4 = $("input:radio[class=answer4]:checked").val();

  if (answer4 === "c") {
    cSharp++;
    $("#question4").hide();
    $("#question5").show();
    return cSharp}
  else if (answer4 === "r") {
    ruby++;
    $("#question4").hide();
    $("#question5").show(); }
  else if (answer4 === "p") {
    php++;
    $("#question4").hide();
    $("#question5").show(); }
  else {
    Java++;
    console.log(Java);
    $("#question4").hide();
    $("#question5").show(); }
});

$("#question5").submit(function(event) {
  event.preventDefault();
  var answer5 = $("input:radio[class=answer5]:checked").val();

  if (answer5 === "yes") {
    php = 10;
    $("#question5").hide();
    $("#trackPHP").show();
    return php; }
  else {
    $("#question5").hide();
    if ((cSharp > Java) && (cSharp > ruby) && (cSharp > php)) {
      $("#trackCSharp").show(); }
    else if ((ruby > Java) && (ruby > cSharp) && (ruby > php)) {
      $("#trackRuby").show(); }
    else if ((php > Java) && (php > ruby) && (php > cSharp)) {
      $("#trackPHP").show(); }
    else {
      $("#trackJava").show(); }}
});

// $("#question5").submit(function(event) {
//   event.preventDefault();
//
//   if ((cSharp > Java) && (cSharp > ruby) && (cSharp > php)) {
//     $("#question5").hide();
//     $("#trackCSharp").show(); }
//   else if ((ruby > Java) && (ruby > cSharp) && (ruby > php)) {
//     $("#question5").hide();
//     $("#trackruby").show(); }
//   else if ((php > Java) && (php > ruby) && (php > cSharp)) {
//     $("#question5").hide();
//     $("#trackphp").show(); }
//   else {
//     $("#question5").hide();
//     $("#trackJava").show(); }
// });
