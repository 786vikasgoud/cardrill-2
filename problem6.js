function problem6(inventery){
    let ans=inventery.filter(function(element){
        if(element.car_make === "BMW" || element.car_make === "Audi"){
            return element;
        }
    })
    return ans;
}
module.exports=problem6;