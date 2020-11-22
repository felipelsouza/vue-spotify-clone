const Artist = require('../models/Artist')

module.exports = {
    async index (req, res) {
        const artist = await Artist.findAll()

        return res.json(artist)
    },
    async store (req, res) {
        const { name, bio, img_url } = req.body
        
        const check = await Artist.findOne({ where: { name } })
        if(check){
            return res.status(401).json({ error: 'Já existe um artista com esse nome!' })
        }
        if(name == '' || bio == ''){
            return res.status(401).json({ error: 'Preencha todos os campos!' })
        }

        const artist = await Artist.create({
            name,
            img_url,
            bio
        })

        return res.json({artist, success: 'Artista criado com sucesso!' })
    },
}