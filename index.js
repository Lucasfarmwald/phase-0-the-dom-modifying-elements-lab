const element = document.createElement("div");
document.body.append(element);
const ul = document.createElement("ul");

for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = (i + 1).toString();
  ul.append(li);

element.append(ul);
}
//function newHeader(){
  let element = document.createElement("<h1>")
   element.id = 'victory'
  //main.innerHTML = '<h1> victory </h1>';
}