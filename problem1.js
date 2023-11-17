function problem1(inventery){

    let ans=inventery.filter(function(element){
        return element.id===33;
    })
    console.log(ans["car_make"]);
    return ans;
}
module.exports=problem1;