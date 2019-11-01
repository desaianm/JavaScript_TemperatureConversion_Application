/* 
 * Anmol Desai
 * Student ID:991515637
 * SYST10199 - Web Programming
 */

        var num = document.getElementById("num");    
        var btnceltofah = document.getElementById("btnceltofah");
        var btnfahtocel = document.getElementById("btnfahtocel");
        var btnfeettomet = document.getElementById("btnfeettomet");
        var btnmettofeet = document.getElementById("btnmettofeet");
        var btninhtocent = document.getElementById("btninhtocent");
        var btncenttoinh = document.getElementById("btncenttoinh");
        var btnpoutokil = document.getElementById("btnpoutokilo");
        var btnkiltopou = document.getElementById("btnkilotopou");
        var label = document.getElementById("label");
        var clear = document.getElementById("clear");
        var result = document.getElementById("result");
        
        var celtofah = function(cel){
            return cel*1.8 +32;
            
        };
        var fahtocel = function(fah){
            return (fah - 32)/1.8;
        };
        var feettomet = function(met){
            return met/3.281;
        };
        var mettofeet = function(feet){
            return feet*1.8;
        };
        var inhtocent = function(cent){
            return cent*2.54;
        };
        var centtoinh = function(inh){
            return inh/2.54  ;
        };
        var poutokilo = function(kilo){
            return kilo/2.05;
        };
        var kilotopou = function (pou){
            return pou*2.05;
        };
        
        
        
        btnceltofah.onclick = function(){
            var n = parseInt(num.value);
            var round = Math.round(celtofah(n));
            result.innerHTML =" Fahrenheit of "+n+"is"+round;
        };
        
         btnfahtocel.onclick = function(){
            var n = parseInt(num.value);
            var round = Math.round(fahtocel(n))
            result.innerHTML =" Celsius of "+n+" is "+round;
        };
        
        btnfeettomet.onclick = function(){
            var n = parseInt(num.value);
            var round = Math.round(feettomet(n));
            result.innerHTML =" Meters "+n+" is "+round;
        };
        btnmettofeet.onclick = function(){
            var n = parseInt(num.value);
            var round = Math.round(mettofeet(n));
            result.innerHTML =" Feet "+n+" is "+round;
        };
        btninhtocent.onclick = function(){
            var n = parseInt(num.value);
            var round = Math.round(inhtocent(n));
            result.innerHTML =" Centimeters "+n+" is "+round;
        };
        btncenttoinh.onclick = function(){
            var n = parseInt(num.value);
            var round = Math.round(centtoinh(n));
            result.innerHTML =" Inches "+n+"is"+round;
        };
        btnpoutokilo.onclick = function(){
            var n = parseInt(num.value);
            var round = Math.round(poutokilo(n));
            result.innerHTML =" Kilograms "+n+"is"+round;
        };
        btnkilotopou.onclick = function(){
            var n = parseInt(num.value);
            var round = Math.round(kilotopou(n));
            result.innerHTML =" Pounds  "+n+" is "+round;
        };
        
        clear.onclick = function(){ 
            num.value="";
            result.innerHTML="";
            
        };
        
        
        


