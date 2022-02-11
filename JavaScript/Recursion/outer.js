function outer(input) {

    let outerScopedVariable = []

    function helper(helperInput) {
        if(helperInput.length === 0) {
            return;
        }
        
        if(helperInput[0] % 2 !== 0) {
            outerScopedVariable.push(helperInput[0])
        }
        helper(helperInput.slice(1))
    }

    helper(input)

    return outerScopedVariable;
}

outer([1,2,3,4,5,6,7,8,9]);