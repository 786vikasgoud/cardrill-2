function problem3(inventery)
{
    inventery.sort(function(a,b){
        let modelA = a.car_model.toLowerCase();
        let modelB = b.car_model.toLowerCase();
            if(modelA<modelB){
                return -1;
            }
            else if(modelA>modelB){
                return 1;
            }
            else if(modelA === modelB){
                return 0;
            }

            
        });
    return inventery;
}
module.exports=problem3;