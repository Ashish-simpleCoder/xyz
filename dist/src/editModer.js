export default function editModer(div,c1,c2,e){

    let x = e.clientX - div.getBoundingClientRect().left
    let y = e.clientY - div.getBoundingClientRect().top
    const span = document.createElement('span')
    span.classList.add('ripple_effect')
    span.style.left = x+'px'
    span.style.top = y+'px'
    div.appendChild(span)

    setTimeout(()=>span.remove(),600)
    save_btn.style.display = 'block'


    div.children[0].setAttribute('contenteditable',true)
    div.children[1].setAttribute('contenteditable',true)
    div.classList.add('active_editing')
    document.body.classList.add('body_relative')
}