const  task1 = str =>{
    let counter = 1
    let result = ""
    for (let i = 0 ; i<str.length; i++){
        if (str[i]=== str[i+1]){
            counter= counter+1
        }
        else {
            result = result+ counter+ str[i]
            counter =1
        }

    }
    return result
}
console.log(task1('AAAAUUUYYGGFH'))