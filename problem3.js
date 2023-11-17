function problem3(inventery){
    let ans=inventery.map(function(element){
        return element.car_model;
    });

    let carModel=ans.sort(function(a,b){
        let modelA=a.trim().toLowerCase();
        let modelB=b.trim().toLowerCase();
        if(modelA>modelB){
            return 1;
        }
        else if(modelB>modelA){
            return -1;
        }
        else if(modelA === modelB){
            return 0;
        }
    });

    let uniqarray=carModel.filter(function(value,index){
        return carModel.indexOf(value)===index;
    });

    return uniqarray.map(carModel=>{
        return inventery.filter(row=>row.car_model===carModel)
    });
}
module.exports=problem3;