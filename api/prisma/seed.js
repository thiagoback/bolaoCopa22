import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const games = [
    {
      "gameDate": "2022-11-20T16:00:00Z",
      "teamA": "cat",
      "teamB": "equ",
      "gameStage": "Grupo A"
    },
    {
      "gameDate": "2022-11-21T13:00:00Z",
      "teamA": "ing",
      "teamB": "ira",
      "gameStage": "Grupo B"
    },
    {
      "gameDate": "2022-11-21T16:00:00Z",
      "teamA": "sen",
      "teamB": "hol",
      "gameStage": "Grupo A"
    },
    {
      "gameDate": "2022-11-21T19:00:00Z",
      "teamA": "eua",
      "teamB": "gal",
      "gameStage": "Grupo B"
    },
    {
      "gameDate": "2022-11-22T10:00:00Z",
      "teamA": "arg",
      "teamB": "ara",
      "gameStage": "Grupo C"
    },
    {
      "gameDate": "2022-11-22T13:00:00Z",
      "teamA": "din",
      "teamB": "tun",
      "gameStage": "Grupo D"
    },
    {
      "gameDate": "2022-11-22T16:00:00Z",
      "teamA": "mex",
      "teamB": "pol",
      "gameStage": "Grupo C"
    },
    {
      "gameDate": "2022-11-22T19:00:00Z",
      "teamA": "fra",
      "teamB": "aus",
      "gameStage": "Grupo D"
    },
    {
      "gameDate": "2022-11-23T10:00:00Z",
      "teamA": "mar",
      "teamB": "cro",
      "gameStage": "Grupo F"
    },
    {
      "gameDate": "2022-11-23T13:00:00Z",
      "teamA": "ale",
      "teamB": "jap",
      "gameStage": "Grupo E"
    },
    {
      "gameDate": "2022-11-23T16:00:00Z",
      "teamA": "esp",
      "teamB": "cos",
      "gameStage": "Grupo E"
    },
    {
      "gameDate": "2022-11-23T19:00:00Z",
      "teamA": "bel",
      "teamB": "can",
      "gameStage": "Grupo F"
    },
    {
      "gameDate": "2022-11-24T10:00:00Z",
      "teamA": "sui",
      "teamB": "cam",
      "gameStage": "Grupo G"
    },
    {
      "gameDate": "2022-11-24T13:00:00Z",
      "teamA": "uru",
      "teamB": "cor",
      "gameStage": "Grupo H"
    },
    {
      "gameDate": "2022-11-24T16:00:00Z",
      "teamA": "por",
      "teamB": "gan",
      "gameStage": "Grupo H"
    },
    {
      "gameDate": "2022-11-24T19:00:00Z",
      "teamA": "bra",
      "teamB": "ser",
      "gameStage": "Grupo G"
    },
    {
      "gameDate": "2022-11-25T10:00:00Z",
      "teamA": "gal",
      "teamB": "ira",
      "gameStage": "Grupo B"
    },
    {
  
      "gameDate": "2022-11-25T13:00:00Z",
      "teamA": "cat",
      "teamB": "sen",
      "gameStage": "Grupo A"
    },
    {
      "gameDate": "2022-11-25T16:00:00Z",
      "teamA": "hol",
      "teamB": "equ",
      "gameStage": "Grupo A"
    },
    {
      "gameDate": "2022-11-25T19:00:00Z",
      "teamA": "ing",
      "teamB": "eua",
      "gameStage": "Grupo B"
    },
    {
      "gameDate": "2022-11-26T10:00:00Z",
      "teamA": "tun",
      "teamB": "aus",
      "gameStage": "Grupo D"
    },
    {
  
      "gameDate": "2022-11-26T13:00:00Z",
      "teamA": "pol",
      "teamB": "ara",
      "gameStage": "Grupo C"
    },
    {
      "gameDate": "2022-11-26T16:00:00Z",
      "teamA": "fra",
      "teamB": "din",
      "gameStage": "Grupo D"
    },
    {
      "gameDate": "2022-11-26T19:00:00Z",
      "teamA": "arg",
      "teamB": "mex",
      "gameStage": "Grupo C"
    },
    {
      "gameDate": "2022-11-27T10:00:00Z",
      "teamA": "jap",
      "teamB": "cos",
      "gameStage": "Grupo E"
    },
    {
      "gameDate": "2022-11-27T13:00:00Z",
      "teamA": "bel",
      "teamB": "mar",
      "gameStage": "Grupo F"
    },
    {
      "gameDate": "2022-11-27T16:00:00Z",
      "teamA": "cro",
      "teamB": "can",
      "gameStage": "Grupo F"
    },
    {
      "gameDate": "2022-11-27T19:00:00Z",
      "teamA": "esp",
      "teamB": "sui",
      "gameStage": "Grupo E"
    },
    {
      "gameDate": "2022-11-28T10:00:00Z",
      "teamA": "cam",
      "teamB": "ser",
      "gameStage": "Grupo G"
    },
    {
      "gameDate": "2022-11-28T13:00:00Z",
      "teamA": "cor",
      "teamB": "gan",
      "gameStage": "Grupo H"
    },
    {
      "gameDate": "2022-11-28T16:00:00Z",
      "teamA": "bra",
      "teamB": "sui",
      "gameStage": "Grupo G"
    },
    {
      "gameDate": "2022-11-28T19:00:00Z",
      "teamA": "por",
      "teamB": "uru",
      "gameStage": "Grupo H"
    },
    {
      "gameDate": "2022-11-29T15:00:00Z",
      "teamA": "equ",
      "teamB": "sen",
      "gameStage": "Grupo A"
    },
    {
      "gameDate": "2022-11-29T15:00:00Z",
      "teamA": "hol",
      "teamB": "cat",
      "gameStage": "Grupo A"
    },
    {
      "gameDate": "2022-11-29T19:00:00Z",
      "teamA": "gal",
      "teamB": "ing",
      "gameStage": "Grupo B"
    },
    {
      "gameDate": "2022-11-29T19:00:00Z",
      "teamA": "ira",
      "teamB": "eua",
      "gameStage": "Grupo B"
    },
    {
      "gameDate": "2022-11-30T15:00:00Z",
      "teamA": "aus",
      "teamB": "din",
      "gameStage": "Grupo D"
    },
    {
      "gameDate": "2022-11-30T15:00:00Z",
      "teamA": "tun",
      "teamB": "fra",
      "gameStage": "Grupo D"
    },
    {
      "gameDate": "2022-11-30T19:00:00Z",
      "teamA": "pol",
      "teamB": "arg",
      "gameStage": "Grupo C"
    },
    {
      "gameDate": "2022-11-30T19:00:00Z",
      "teamA": "ara",
      "teamB": "mex",
      "gameStage": "Grupo C"
    },
    {
      "gameDate": "2022-12-01T15:00:00Z",
      "teamA": "cro",
      "teamB": "bel",
      "gameStage": "Grupo F"
    },
    {
      "gameDate": "2022-12-01T15:00:00Z",
      "teamA": "can",
      "teamB": "mar",
      "gameStage": "Grupo F"
    },
    {
      "gameDate": "2022-12-01T19:00:00Z",
      "teamA": "jap",
      "teamB": "esp",
      "gameStage": "Grupo E"
    },
    {
      "gameDate": "2022-12-01T19:00:00Z",
      "teamA": "cos",
      "teamB": "ale",
      "gameStage": "Grupo E"
    },
    {
      "gameDate": "2022-12-02T15:00:00Z",
      "teamA": "gan",
      "teamB": "uru",
      "gameStage": "Grupo H"
    },
    {
      "gameDate": "2022-12-02T15:00:00Z",
      "teamA": "cor",
      "teamB": "por",
      "gameStage": "Grupo H"
    },
    {
      "gameDate": "2022-12-02T19:00:00Z",
      "teamA": "ser",
      "teamB": "sui",
      "gameStage": "Grupo G"
    },
    {
      "gameDate": "2022-12-02T19:00:00Z",
      "teamA": "cam",
      "teamB": "bra",
      "gameStage": "Grupo G"
    }
  ]

async function main() {
    await prisma.game.createMany({
        data: games 
    })
}

main()