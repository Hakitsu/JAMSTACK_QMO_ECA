const api_book = "https://api.airtable.com/v0/appvdQXiWanRQYRQR/Books?&api_key=keyMxdH7pbmWt2hHA"
const api_author = "https://api.airtable.com/v0/appvdQXiWanRQYRQR/Authors?&api_key=keyMxdH7pbmWt2hHA"

fetch(api_book)
  .then(res => res.json())
  .then(data => {
    // console.log(data);
    printData(data.records);
  })

const printData = (data) => {
  data.map( (data, i) => {

    const url = data.fields.Cover[0].url;

    const titre = "\r Titre : " + data.fields.Titre + "\r"

    const info = "\r Catégorie : " + data.fields.Topic 
                    + "\r Auteur : " + data.fields.Auteur 

    writeData(titre, info, url);
  })
}

const writeData = (data, info, url) => {
  const newContent = document.createElement("div");
  newContent.classList.add('grid');
  newContent.innerText = data;
  
  var elem = document.createElement("img");
  elem.setAttribute("src", url);

  document.body.appendChild(newContent).appendChild(elem);


  const infor = document.createElement("div");
  infor.classList.add('info');
  infor.innerText = info;

  document.body.appendChild(newContent).appendChild(infor);


}






