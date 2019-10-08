function add (left, right) {
    return createMultiplyTable(left, right);
}
module.exports = add;

function createMultiplyTable(left, right){
    if(checkRange(left, right)){
        if(compareNumbers(left, right)){
            return computeNumbers(left, right);
        }
    }
    return null;
}

function checkRange(left, right){
    return (left <= 1000 && left >= 1) && (right <= 1000 && right >= 1);
}

function compareNumbers(left, right){
    return left <= right;
}

function computeNumbers(left, right){
    var results = [];
    var actualValue = '';
    var totalLines = right - left;
    var currentIndex = left;
    for(var x = left; x <= right; x++){
        for(var y = x; y <= right; y++){
            results.push({multiplicand: y, computation: x + '*' + y + '=' + (x * y)}); 
        }
    }
    for(var a = 0; a <= totalLines; a++){
        var filteredResult = results.filter(result => result.multiplicand == currentIndex);
        if(filteredResult.length == 1){
            actualValue += filteredResult[0].computation + '\n'; 
        } else{
            for(var b = 0; b < filteredResult.length; b++){
                actualValue += filteredResult[b].computation;
                if(b + 1 == filteredResult.length){
                    actualValue += '\n';
                } else{
                    actualValue += ' ';
                } 
            }
        }
        currentIndex++;
    }
    return actualValue.trim();
}

