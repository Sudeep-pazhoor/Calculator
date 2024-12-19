const btnCli=(e)=>{
    console.log(e.target.innerText)
    console.log("hello")
    inp.value+=e.target.innerText
}

const getresult=()=>{
    try{
        const result=eval(inp.value)
        inp.value=result
    }
    catch{
        inp.value="Invalid Expression !"
    }
}
const backsp=()=>{
    inp.value=inp.value.slice(0,(inp.value.length-1))
}
const clearinp=()=>{
    inp.value=""
}