const apiURL ='htps://codecyprus.org/th/api/list';
fetch(apiURL)
.then(response => response.json())
.then(data => {})
.catch(err => console.log(err));


