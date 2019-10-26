const baseURL = "statsapi.web.nhl.com/api/vi";

const endpoints = {
    teams: `${baseURL}/teams`,
    divisions: `${baseURL}/divisons`,
    conferences: `${baseURL}/conferences`,
    people: `${baseURL}/people`
}

const currTeamIDs = {
    Devils: 1,
    Islanders: 2,
    Rangers: 3,
    Flyers: 4,
    Penguins: 5,
    Bruins: 6,
    Sabres: 7,
    Canadiens: 8,
    Senators: 9,
    Leafs: 10,
    Hurricanes: 12,
    Panthers: 13,
    Lightning: 14,
    Capitals: 15,
    Blackhawks: 16,
    RedWings: 17,
    Predators: 18,
    Blues: 19,
    Flames: 20,
    Avalanche: 21,
    Oilers: 22,
    Canucks: 23,
    Ducks: 24,
    Stars: 25,
    Kings: 26,
    Sharks: 28,
    BlueJackets: 29,
    Wild: 30,
    Jets: 52,
    Coyotes: 53
}

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
    GoldenKnights: 54,
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