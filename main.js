

addEventListener("DOMContentLoaded", async(e)=>{
    let peticion = await fetch('./config.json');
    let data = await peticion.json();

    let fragmen = document.createDocumentFragment();
    fragmen.append(document.body.children[0]);
    let div = fragmen.children[0].children;
    
    for(let [id, value] of Object.entries(data.success)){
        if(id==0){
            div.myTitulo.insertAdjacentText('afterbegin', Object.values(value));
        }else{
            div.myParrafo.insertAdjacentText('afterbegin', Object.values(value));
        }
    }
    console.log(data);
    document.body.insertAdjacentElement('afterbegin', fragmen.children[0]);



    // let nombre = "Miguel";
    // let fragmen = document.createDocumentFragment();
    // let h1 = document.querySelector('h1');
    // h1.innerText = `${nombre}`;
    // fragmen.appendChild(h1);
    // document.body.insertAdjacentElement('afterbegin', fragmen.children[0]);
 
})