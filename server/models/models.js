const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    name: {type: DataTypes.STRING},
    lastName: {type: DataTypes.STRING},
    nickname: {type: DataTypes.STRING, unique: true},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
});

const Profile = sequelize.define('profile', {
    born: {type: DataTypes.STRING},
    bio: {type: DataTypes.STRING},
});

const Songs = sequelize.define('songs', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    thumbnail: {type: DataTypes.STRING}
});

const Genre = sequelize.define('genre', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true}
});

const Albums = sequelize.define('albums', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING},
    thumbnail: {type: DataTypes.STRING}
});

const Comments = sequelize.define('comments', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    comment: {type: DataTypes.STRING, allowNull: false}
});

const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rating: {type: DataTypes.INTEGER, allowNull: false}
});


User.hasOne(Profile);
Profile.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User);

User.hasMany(Comments);
Comments.belongsTo(User);

Profile.hasMany(Songs);
Songs.belongsTo(Profile);

Profile.hasMany(Albums);
Albums.belongsTo(Profile);

Albums.hasMany(Songs);
Songs.belongsTo(Albums);

Genre.hasMany(Songs);
Songs.belongsTo(Genre);

Songs.hasMany(Rating);
Rating.belongsTo(Songs);

Songs.hasMany(Comments);
Comments.belongsTo(Songs);

module.exports = {
    User,
    Profile,
    Songs,
    Albums,
    Genre,
    Rating,
    Comments
};



