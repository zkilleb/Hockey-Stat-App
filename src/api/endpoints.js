const baseURL = "statsapi.web.nhl.com/api/vi";

const endpoints = {
    teams: `${baseURL}/teams`,
    divisions: `${baseURL}/divisons`,
    conferences: `${baseURL}/conferences`,
    people: `${baseURL}/people`
}

const currTeamIDs = [
    {name: 'Devils', id: 1 },
    {name: 'Islanders', id: 2},
    {name: 'Rangers', id: 3},
    {name: 'Flyers', id: 4},
    {name: 'Penguins', id: 5},
    {name: 'Bruins', id: 6},
    {name: 'Sabres', id: 7},
    {name: 'Canadiens', id: 8},
    {name: 'Senators', id: 9},
    {name: 'Maple Leafs', id: 10},
    {name: 'Hurricanes', id: 12},
    {name: 'Panthers', id: 13},
    {name: 'Lightning', id: 14},
    {name: 'Capitals', id: 15},
    {name: 'Blackhawks', id: 16},
    {name: 'Red Wings', id: 17},
    {name: 'Predators', id: 18},
    {name: 'Blues', id: 19},
    {name: 'Flames', id: 20},
    {name: 'Avalanche', id: 21},
    {name: 'Oilers', id: 22},
    {name: 'Canucks', id: 23},
    {name: 'Ducks', id: 24},
    {name: 'Stars', id: 25},
    {name: 'Kings', id: 26},
    {name: 'Sharks', id: 28},
    {name: 'Blue Jackets', id: 29},
    {name: 'Wild', id: 30},
    {name: 'Jets', id: 52},
    {name: 'Coyotes', id: 53},
    {name: 'Golden Knights', id: 54}
]

const otherTeamIDs = {
    Thrashers: 11,
    Coyotes: 27,
    NorthStars: 31,
    Nordiques: 32,
    Jets: 33,
    Whalers: 34,
    Rockies: 35,
    Senators: 36,
    Tigers: 37,
    Pirates: 38,
    Quakers: 39,
    Cougars: 40,
    Wanderers: 41,
    Bulldogs: 42,
    Maroons: 43,
    NYAmericans: 44,
    Eagles: 45,
    Seals: 46,
    Flames: 47,
    Scouts: 48,
    Barons: 49,
    Falcons: 50,
    BrklynAmericans: 51,
    Seattle: 55,
    GoldenSeals: 56,
    Arenas: 57,
    StPats: 58
}

export {
    endpoints,
    currTeamIDs,
    otherTeamIDs
}