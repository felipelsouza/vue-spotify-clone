const { Model, DataTypes } = require('sequelize');

class Artist extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            img_url: DataTypes.STRING,
            bio: DataTypes.STRING,
        },{
            sequelize
        })
    }
        
    static associate(models){
        this.hasMany(models.Song, { foreignKey: 'artist_id', as: 'songs' })
    }
}

module.exports = Artist;