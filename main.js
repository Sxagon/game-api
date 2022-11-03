const GAPI = require('gamedig');
const express = require('express')
const app = express()
app.listen(3000)



app.get('/api/v1/minecraft/server/:serverId', function (req, res) {
    GAPI.query({
        type: 'minecraft',
        host: req.params.serverId
    }).then((state) => {
        res.json({
            adress: state.connect,
            name: 'ArcoNix.eu',
            motd: state.name,
            position: 2,
            votes: 100,
            rating: 4,
            version: '1.8-1.19.2',
            players: {
                online: state.players.length,
                max: state.maxplayers
            },
        })
    }).catch((error) => {
        res.json({
            error: 'server is offline',
        })
    });
})

app.get('/test', function (req, res) {
    GAPI.query({
        type: 'discord',
        guildId: '447302803463995402'
    }).then((state) => {
        res.json({
            state,
        })
    }).catch((error) => {
        res.json({
            error: 'server is offline',
        })
    });
})