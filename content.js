var data = document.getElementsByTagName('html')[0]; 

var data_new = data.innerHTML.replace(/Create/gi, 'lorem ipsum'); 

data.innerHTML = data_new;