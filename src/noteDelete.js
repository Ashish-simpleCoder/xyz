export default function noteDeleter(div){
    setTimeout(()=>document.body.classList.remove('body_relative'),100)

    let notes = JSON.parse(localStorage.getItem('notes'))
    notes = notes.filter(note=>note.id != div.id)
    localStorage.setItem('notes',JSON.stringify(notes))
    div.remove()
}