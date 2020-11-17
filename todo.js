var ul = document.getElementById('list')
var li;
var addbutton = document.getElementById('add')
addbutton.addEventListener('click',additem)

var removebutton= document.getElementById('remove')
removebutton.addEventListener('click',removeitem)

function additem(){
    var input = document.getElementById('input')
    var myval = input.value
    var li;
    var ul = document.getElementById('list')
    var textnode = document.createTextNode(myval)

    if (myval === '') {
        return false
    }
    else{
        //create li
        li = document.createElement('li')
        //crete checkbox
        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.setAttribute('id','check')
         
        //create label
        var label= document.createElement('label')

        //ADDING ON WEB
        ul.appendChild(label)
        li.appendChild(checkbox)
        label.appendChild(textnode)
        li.appendChild(label)
        ul.insertBefore(li,ul.childNodes[0])
        
       setTimeout(() => {
          li.className = 'visual' ;
       },8);
        input.value = ''

    }


}
  
  

function removeitem(){
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        while (li[index]&& li[index].children[0].checked) {
            ul.removeChild(li[index])
        }
    }
}

var removeallbutton = document.getElementById("removeeverything")
removeallbutton.addEventListener('click',()=>ul.remove())