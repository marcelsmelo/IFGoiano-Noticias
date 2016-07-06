module.exports = (url)=>{
    return url.split('/')
       .pop() //Or slice(-1) return last item on array
       .split('-')[0]
}
