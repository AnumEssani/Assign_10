function add() {
    var main_div = document.getElementById("mainDiv")
    var input = document.getElementById("text")
    if(input.value == ''){
        alert('Kinldy enter your Task')
    } else{
        var card_div = document.createElement('div')
        var card_body = document.createElement('div')
        var h5 = document.createElement('h5')
        var compelete = document.createElement('button')
        compelete.setAttribute('class','btn btn-success')
        var edit = document.createElement('button')
        edit.setAttribute('class','btn btn-warning')
        var delet =  document.createElement('button')
        delet.setAttribute('class','btn btn-danger')
        var h5_txt = document.createTextNode(input.value)
        var comp_icon = document.createElement('i')
        var edit_icon = document.createElement('i')
        var delet_icon = document.createElement('i')
        comp_icon.setAttribute('class','fas fa-clipboard-check')
        edit_icon.setAttribute('class','fas fa-edit')
        delet_icon.setAttribute('class','fas fa-trash-alt')
        delet.setAttribute('onClick', `remove(this.parentElement.id);`)
        compelete.setAttribute('onClick',`comTask(this.parentElement.id);`)
        edit.setAttribute('onClick', `edit(this.parentElement.id);`)
        compelete.appendChild(comp_icon)
        edit.appendChild(edit_icon)
        delet.appendChild(delet_icon)
        h5.appendChild(h5_txt)
        card_body.appendChild(h5)
        card_body.appendChild(compelete)
        card_body.appendChild(edit)
        card_body.appendChild(delet)
        card_body.setAttribute('id',input.value)
        card_div.appendChild(card_body)
        main_div.appendChild(card_div)
        card_body.setAttribute('class','card-body')
        card_div.setAttribute('class','card fade-in')
        input.value = ''
    }
}
function remove(id) {
    var card_body = document.getElementById(id);
    var card_div = card_body.parentElement
    card_div.className='card fade-out'
    setTimeout(()=>{
        card_div.remove()
    },4000)
} 
function comTask(id){
    var compTask = document.getElementById('compTask')
    
    var get= document.getElementById(id)
    var getTask = get.parentElement
    getTask.className = 'card fade-out'
    setTimeout(()=>{
        get.childNodes[1].remove()
        get.childNodes[1].remove()
        getTask.className = 'card fade-in'
        compTask.appendChild(getTask)
    },1500)
    
}
function edit(id){
    var get = document.getElementById(id)
    var txt = get.childNodes[0];
    var button = get.childNodes[2];
    var parent = get.parentElement;
    var foter = document.createElement('div')
    var input = document.createElement('input')
    var update = document.createElement('button')
    var cancel =  document.createElement('button')
    var update_icon = document.createElement('i')
    var cancel_icon = document.createElement('i')
    input.setAttribute('value',txt.textContent)
    input.setAttribute('type','text')
    button.setAttribute('disabled','disabled')
    input.setAttribute('class','form-control')
    update_icon.setAttribute('class','fas fa-check')
    cancel_icon.setAttribute('class','fas fa-times')
    update.appendChild(update_icon)
    cancel.appendChild(cancel_icon)
    update.setAttribute('class','btn btn-success float-right')
    cancel.setAttribute('class','btn btn-danger float-right')
    update.setAttribute('onClick','upd(this.parentElement.id);')
    cancel.setAttribute('onClick','exit(this.parentElement.id);')
    foter.setAttribute('id','update')
    foter.appendChild(input)
    foter.appendChild(cancel)
    foter.appendChild(update)
    foter.setAttribute('class','card-footer fade-in')
    parent.appendChild(foter)
}
function upd(id){
    var footer = document.getElementById(id)
    var card_body = footer.previousSibling
    var button = card_body.childNodes[2]
    var h5 = card_body.childNodes[0]
    var txt = footer.childNodes[0]
    var upd_txt = document.createTextNode(txt.value) 
    console.log(h5.innerHTML,txt.value)
    h5.className = 'fade-in'
    h5.innerHTML = txt.value
    footer.className='card-footer fade-out'
    setTimeout(()=>{
        footer.remove()
        button.removeAttribute("disabled")
    },1500)
}
function exit(id){
    var footer = document.getElementById(id)
    var card_body = footer.previousSibling
    var button = card_body.childNodes[2]
    footer.className='card-footer fade-out'
    setTimeout(()=>{
        footer.remove()
        button.removeAttribute("disabled")
    },1500)
}