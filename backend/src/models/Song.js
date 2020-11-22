const { Model, DataTypes } = require('sequelize');

class Song extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            img_url: DataTypes.STRING,
            duration: DataTypes.INTEGER,
        },{
            sequelize
        })
    }
        
    static associate(models){
        this.belongsTo(models.Artist, { foreignKey: 'artist_id', as: 'artists' })
    }
}

module.exports = Song;