const data = {
    name: 'Reda'
}

const handler = {

    set(target,key,value){
        document.querySelector('#name').innerText= value;
        target[key] = value;
    }

}

const observedData = new Proxy(data, handler)
observedData.name =' Reda'
console.log(observedData.name)