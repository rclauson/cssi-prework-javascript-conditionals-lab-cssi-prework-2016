'use strict';

var fizzbuzz = function(num){
 if (num%3 ==0)&&(num%5==0){
  return "fizzbuzz";
 }
 if (num %3 ==0){
  return "Fizz";
 }
 if (num%5 ==0){
  return "Buzz";
 }
 if(num%3 !=0)&&(num%5!=0){
  return num;
 }
  }

