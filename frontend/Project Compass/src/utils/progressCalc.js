
function progressCalc(tasks) {
    const n=tasks.length
    let comp=0
    if (n==0) return 0
    tasks.forEach(obj => {
        if (obj.completed) comp++
    });

    const prog= (comp/n)*100

    return Math.round(prog)

}

export {progressCalc}