const solicitud = fetch('https://raw.githubusercontent.com/samuelchvez/todos-fake-json-api/master/db.json');
solicitud
  .then(resultado => resultado.json())
  .then(resultadoJSON => console.log("lmao", resultadoJSON[1].title))
  .catch(error => console.log("Lel Error", error));