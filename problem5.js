function problem5(inventery){
    let ans=inventery.filter(function(element){
        return element.car_year < 2000
    })
    return ans;
}
module.exports=problem5;