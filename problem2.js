function problem2(inventery){
    let ans=inventery.filter(function(element){
        if(element.id===inventery.length){
            return element;
        }
    })
    return ans;
}
module.exports=problem2;