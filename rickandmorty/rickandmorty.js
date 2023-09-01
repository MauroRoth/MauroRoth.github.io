main = document.getElementById('characters')
fetch('https://rickandmortyapi.com/api/character')
    .then(data => data.json())
    .then(response =>{
        console.log(response.results),
        ul = document.createElement('ul')
        response.results.forEach(element => {
            div = document.createElement('div'),
            div.setAttribute('class', 'border-black-solid grid grid-template-2')
            img = document.createElement('img'),
            img.setAttribute('src', element.image),
            img.setAttribute('class', 'w10em padding-2 border-radius-10'),
            div.appendChild(img),
            p = document.createElement('p'),
            p.innerHTML = 'name: '+'<b>'+element.name+'</b><br>'
                         +'status: '+'<i>'+element.status+'</i><br>'
                         +'species: '+'<i>'+element.species+'</i><br>'
                         +'gender: '+'<i>'+element.gender+'</i><br>'
                         +'origin: '+'<i>'+element.origin.name+'</i><br>'
                         +'location: '+'<i>'+element.location.name+'</i><br>',
            div.appendChild(p)
            main.appendChild(div)
            });
        }
    )