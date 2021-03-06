const state = {
  tasks: [], 
  filter: ['todas', 'activas', 'completadas'],
  currFilter: 0,
  isLoad: false
};

const solicitud = fetch('https://raw.githubusercontent.com/samuelchvez/todos-fake-json-api/master/db.json');
solicitud
  .then(resultado => resultado.json())
  .then(resultadoJSON =>{
    for (let i = 0; i < resultadoJSON.length; i += 1) {
      state.tasks.push([resultadoJSON[i].title, resultadoJSON[i].isCompleted])
    }
    console.log(state.tasks)
    render(state);});
    
const render = lState =>  {

  if (root.hasChildNodes()) {
    root.innerHTML = null;
  }

  const filters = document.createElement('div');
  filters.className = 'filters';

  root.appendChild(filters);

  const filt1 = document.createElement('button');
  filt1.className = 'filt';
  filt1.innerHTML = 'TODAS';
  const filt2 = document.createElement('button');
  filt2.className = 'filt';
  filt2.innerHTML = 'COMPLETADAS';
  const filt3 = document.createElement('button');
  filt3.className = 'filt';
  filt3.innerHTML = 'ACTIVAS';

  filters.appendChild(filt1);
  filters.appendChild(filt2);
  filters.appendChild(filt3);

  filt1.onclick = () => {
    state.currFilter = 0;
    render(state);
  }
  filt2.onclick = () => {
    state.currFilter = 1;
    render(state);
  }
  filt3.onclick = () => {
    state.currFilter = 2;
    render(state);
  }

  const tasksdiv = document.createElement('div');
  tasksdiv.className = 'tasksdiv';

  root.appendChild(tasksdiv);

  const addbar = document.createElement('div');
  addbar.className = 'addbar';

  root.appendChild(addbar);

  const addtext = document.createElement('input');
  addtext.className = 'addtext';

  const btnadd = document.createElement('button');
  btnadd.className = 'btnadd';
  btnadd.innerHTML = 'AGREGAR';

  addbar.appendChild(addtext);
  addbar.appendChild(btnadd);

  btnadd.onclick = () => {
    state.tasks.push([addtext.value, false])
    render(state);
  }

  if (state.currFilter == 0){
    for (let i = 0; i < state.tasks.length; i +=1){
      const newtask = document.createElement('button');
      newtask.className = `taskname ${state.tasks[i][1]}`;
      newtask.innerHTML = state.tasks[i][0];
      tasksdiv.appendChild(newtask);
    }
  }

  if (state.currFilter == 1){
    for (let i = 0; i < state.tasks.length; i +=1){
      if (state.tasks[i][1] == true){
        const newtask = document.createElement('button');
        newtask.className = `taskname ${state.tasks[i][1]}`;
        newtask.innerHTML = state.tasks[i][0];
        tasksdiv.appendChild(newtask);
      }
    }
  }

  if (state.currFilter == 2){
    for (let i = 0; i < state.tasks.length; i +=1){
      if (state.tasks[i][1] == false){
        const newtask = document.createElement('button');
        newtask.className = `taskname ${state.tasks[i][1]}`;
        newtask.innerHTML = state.tasks[i][0];
        tasksdiv.appendChild(newtask);
      }
    }
  }

}

render(state);