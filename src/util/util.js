const monthAbbrvs = ['January', 'February', 'March', 'April', 'May', 'June', "July", 'August', 'September', 'October', 'November', 'December'];

function formatBirthdate(date) {
  return (`${monthAbbrvs[date.substring(5, 7) - 1]} ${date.substring(8, 10)}, ${date.substring(0,4)}`);
}

function formatBirthplace(birthplace) {
    if(birthplace.birthStateProvince) {
        return (`${birthplace.birthCity}, ${birthplace.birthStateProvince}, ${birthplace.birthCountry}`);
    } else {
        return (`${birthplace.birthCity}, ${birthplace.birthCountry}`)
    }
}

export { formatBirthdate, formatBirthplace };
