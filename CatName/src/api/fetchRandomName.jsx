// загрузка случайных имен

export const fetchRandomName = async() =>{
    const response = await fetch ('https://randomuser.me/api/')
    const data = await response.json();
    return data.results[0].name.first;
}
