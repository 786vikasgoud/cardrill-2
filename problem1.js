function problem1(inventery){

    let ans=inventery.filter(function(element){
        return element.id===33;
    })
    return ans;
}
module.exports=problem1;