function problem4(inventery){
   let ans=inventery.map(function(element){
    return element.car_year;
   }) 
   return ans;
}
module.exports=problem4;