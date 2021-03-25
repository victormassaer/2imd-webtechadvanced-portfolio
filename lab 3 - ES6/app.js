class Note {
    constructor(title) {
      this.title = title;
      // HINT🤩 this.element = this.createElement(title);
      this.element = this.createElement(title);
    }
  
    createElement(title) {
      let newNote = document.createElement('li');
      // HINT🤩 newNote.addEventListener('click', this.remove.bind(newNote));
      newNote.innerHTML = title;
      newNote.addEventListener('click', this.remove.bind(newNote));
      return newNote;
    }

    add(note) {
      // HINT🤩
      // this function should append the note to the screen somehow
      let list = document.querySelector('#taskList');
      list.appendChild(note);
    }
  
    saveToStorage(note) {
      // HINT🤩
      // localStorage only supports strings, not arrays
      // if you want to store arrays, look at JSON.parse and JSON.stringify
      let notes = [];
      let ls = window.localStorage;
      if(ls.notes != undefined){
        notes = JSON.parse(ls.getItem("notes"));
        notes.push(note)
        ls.setItem('notes', JSON.stringify(notes));
      }else{
        notes.push(note);
        ls.setItem('notes', JSON.stringify(notes));
      }
    }
  
    remove() {
      // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
      // in this function, 'this' will refer to the current note element
      // .removeChild(this)
      // remove the item from screen and from localstorage
      let list = document.querySelector('#taskList');
      list.removeChild(this)

      const ls = window.localStorage;
      let notes = JSON.parse(ls.getItem("notes"));
      const rNote = this.innerHTML;
      let index = notes.indexOf(rNote);

      notes.splice(index, 1);
      ls.setItem("notes", JSON.stringify(notes));
    }
  }
  
  class App {
    constructor() {
      console.log("👊🏼 The Constructor!");
      
      // HINT🤩
      // pressing the enter key in the text field triggers the createNote function
      // this.txtTodo = ???
      // this.txtTodo.addEventListener("keypress", this.createNote.bind(this));
      // read up on .bind() -> we need to pass the current meaning of this to the eventListener
      // when the app loads, we can show previously saved noted from localstorage
      // this.loadNotesFromStorage();
      this.txtTodo = document.querySelector("#taskInput");
      this.txtTodo.addEventListener("keypress", this.createNote.bind(this));
      this.loadNotesFromStorage();
    }

    loadNotesFromStorage() {
      // HINT🤩
      // load all notes from storage here and add them to the screen
      let ls = window.localStorage;
      let notes = JSON.parse(ls.getItem('notes'));
      if(notes != null){
        notes.forEach(note => {
          const sNote = new Note(note);
          sNote.add(sNote.element);
        });
      }
    }
  
    createNote(e) {
        if(e.key ==="Enter"){
            e.preventDefault();
            let value = this.txtTodo.value;
            this.reset();
            const note = new Note(value);
            note.add(note.element);
            note.saveToStorage(note.title);
        }

        
      // this function should create a new note by using the Note() class
      // HINT🤩
      // note.add();
      // note.saveToStorage();
      // clear the text field with .reset in this class
      // if (e.key === "Enter")
    }
  
    reset() {
      // this function should reset the form / clear the text field
      this.txtTodo.value = "";
    }
  }
  
  let app = new App();
  