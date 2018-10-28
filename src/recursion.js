module.exports = function recursion(tree, deep = 0, result = []) { 
    const res = result; 
    if (!tree.value) { 
        return []; 
    } 
    const currentDeep = deep + 1; 
    if (res.length < currentDeep) { 
        res.push([tree.value]); 
    } 
    else { 
        res[deep] = res[deep].concat(tree.value); 
    } 
    if (tree.left) { 
        recursion(tree.left, currentDeep, result); 
    } 
    if (tree.right) { 
        recursion(tree.right, currentDeep, result); 
    } 
    return res; 
};