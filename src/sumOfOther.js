module.exports = function sumOfOther(firstArray){
    let resultArray=[];
    for(i=0;i<firstArray.length;i++){ 
        let vauleElements=0;
        for(j=0;j<firstArray.length;j++){
             if (j!==i){
                vauleElements=vauleElements+firstArray[j];
             }
        }
         resultArray.push(vauleElements);
    }
    return resultArray;
};
