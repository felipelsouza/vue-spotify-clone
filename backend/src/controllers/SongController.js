const Song = require('../models/Song')
const Artist = require('../models/Artist')

module.exports = {
    async show (req, res) {
        const { song_id } = req.params

        const song = await Song.findByPk(song_id)

        if(!song){
            return res.status(400).json({ error: 'Não foi possível encontrar essa música!' })
        }

        return res.json(song)
    },

    async index (req, res) {
        const song = await Song.findAll()

        return res.json(song)
    },

    async store (req, res) {
        const { artist_id } = req.params
        const { name, duration, img_url } = req.body

        const artist = await Artist.findByPk(artist_id)
        const music = await Song.findOne({ where: { name, artist_id} })
        if(!artist){
            return res.status(401).json({ error: 'Esse artista não existe!' })
        }
        if(music){
            return res.status(401).json({ error: 'Essa música já está associada a esse artista!' })
        }
        if(name == '' || duration == ''){
            return res.status(401).json({ error: 'Preencha todos os campos!' })
        }

        const song = await Song.create({
            name,
            duration,
            img_url,
            artist_id
        })

        return res.json({song, success: 'Música criada com sucesso!' })
    },
}