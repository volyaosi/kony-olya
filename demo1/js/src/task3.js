export function sortByArea(triangles) {
    const input = validate(triangles);
    if (!input.valid) return input.msg;

    triangles.sort((obj1, obj2) => {
        return calcArea(obj2.side1,obj2.side2, obj2.side3)- calcArea(obj1.side1,obj1.side2, obj1.side3);    
    });

    let output = triangles.map(el => el.vertices);
    console.log(output);
    return output.join(' ');
} 

function calcArea (...sides) {
    let numSides = sides.map(str => Number(str));
    let p = numSides.reduce((acc, side) => acc += side)/2;
    let area = Math.sqrt(p * numSides.reduce((acc, side) => {
        return acc *= (p - side);
    }, 1));
    console.log(numSides, p);
    return area;
}

function validate(objList) {
    const res = {valid: false, msg: ''};
    for (let obj of objList) {
        if(obj.vertices.length !== 3) {
            res.msg = "Please provide 3 length string to name all triangle vertices (e.g. ABC)";
            return res;
        } else if (obj.side1.trim() === '' || obj.side2.trim() === '' || obj.side3.trim() === ''){
            res.msg = "Please fill in all fields";
            return res;
        } else if (obj.side1 <= 0 || obj.side2 <= 0 || obj.side3<= 0){
            res.msg = "Please provide only positive numbers";
            return res;
        } else if ((obj.side1 >= obj.side2 + obj.side3) || (obj.side2 >= obj.side1 + obj.side3) || (obj.side3 >= obj.side1+ obj.side2)){
            res.msg = `Such triangle does not exist: ${obj.vertices}`;
            return res;
        } else {
            res.valid = true;
            return res;
        }
    }
}







export function addTriangle(btn) {
    let div = document.createElement('div');
    div.innerHTML = `<div class='inputObj pad20'>
    <h4>Triangle data:</h4>
    <input type="text" name="vertices"  placeholder="Name your veltices" class='wide-field'>
    <input type="text" name="x"  placeholder="side 1" class='xs-field'> X
    <input type="text" name="y"  placeholder="side 2" class='xs-field'> X
    <input type="text" name="z"  placeholder="side 3" class='xs-field'>                  
</div>`
    btn.before(div);

}

