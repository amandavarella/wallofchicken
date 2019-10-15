const seedrandom = require("seedrandom")

const MILLISECONDS_IN_A_DAY = 1000 * 60 * 60 * 24
const AU_TIMEZONE_OFFSET_MILLISECONDS = -10 * 60 * 60 * 1000

function daysSinceEpoch(day) {
  const now = new Date()
  const daysSinceEpoch = Math.floor(
    (now.getTime() - AU_TIMEZONE_OFFSET_MILLISECONDS) / MILLISECONDS_IN_A_DAY
  )
  const epochDayOfTheWeek = (daysSinceEpoch - 3) % 7
  const movement = day ? (7 + day - epochDayOfTheWeek) % 7 : 0
  return daysSinceEpoch + movement
}

const potentialChickens = [
  { id: "U0286USDZ", name: "riley" },
  { id: "U027CLUME", name: "gstamp" },
  { id: "U0A51Q7E2", name: "lucas" },
  { id: "U02DERN4E", name: "khayman" },
  { id: "U0274DF37", name: "asellitt" },
  { id: "U0K8Z1KD1", name: "kelle" },
  { id: "U44G2GD4M", name: "damien.adermann" },
  { id: "UFM0UL2GG", name: "claire.grooby" },
  { id: "U07271PS5", name: "prasanna.joshi" },
//  { id: "U0G1LM222", name: "stacey" },
  { id: "U1SG7A284", name: "bakes" },
  { id: "UDWHM1JTZ", name: "riana.ferreira" },
  { id: "U029C4B5Z", name: "mario" },
  { id: "U02PS4KKA", name: "bordo" },
  { id: "UD8UGSBMZ", name: "ben.vilnis" },
  { id: "U5G7D3MK7", name: "grant.tibbey" },
  { id: "UDWR5TJLR", name: "ali.graham" },
  { id: "UEAR25K88", name: "amanda.varella" },
  { id: "U56LKECMR", name: "tanya.fonina" },
  { id: "UF72FC073", name: "Viv" },
  { id: "UGP1W254P", name: "jason.jun" },
  { id: "UGWEUTNH5", name: "Izzy" },
  { id: "U0ZFZGJVA", name: "ray.grasso"},
  { id: "U025K202K", name: "notahat"},
  { id: "UB51XE67J", name: "gizotti" }, 
]

function getChickens(day) {
  const seed = daysSinceEpoch(day)
  const rng = seedrandom(seed * 1e5)

  return potentialChickens
    .map(x => [rng(), x])
    .sort(([a, _a], [b, _b]) => (a > b ? 1 : -1))
    .map(([_, x]) => x)
    .slice(0, 5)
}

module.exports = getChickens
