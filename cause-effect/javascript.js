const option = document.getElementById('lista')
const div_infos = document.getElementById('infos')
const peoples = [
    {nome:'...1.1',  birthday: '...1.2',  telephone: '...1.3', city: '...1.4',country: '...1.5', state: '...1.6', street: '...1.7'}, 
    {nome:'...2.1',  birthday: '...2.2',  telephone: '...2.3', city: '...2.4',country: '...2.5', state: '...2.6', street: '...2.7'},
    {nome:'...3.1',  birthday: '...3.2',  telephone: '...3.3', city: '...3.4',country: '...3.5', state: '...3.6', street: '...3.7'}
]


for (let i = 0; i < peoples.length; i ++) {
    const people = document.createElement('option')
    people.text = peoples[i]['nome']
    option.appendChild(people)
}

for (let i = 1; i < div_infos.length -2; i ++) {
    div_infos[i].innerText = ' 1 '
}

function atualizarInfos(index){
    div_infos.children['infoname'].innerText = peoples[index]['nome']
    div_infos.children['infobirday'].innerText = peoples[index]['birthday']
    div_infos.children['infotel'].innerText = peoples[index]['telephone']
    div_infos.children['infocity'].innerText = peoples[index]['city']
    div_infos.children['infocountry'].innerText = peoples[index]['country']
    div_infos.children['infostreet'].innerText = peoples[index]['street']
}

option.addEventListener('click', () => {
    atualizarInfos(option.selectedIndex)
})