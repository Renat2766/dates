const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  birthday: { type: DataTypes.INTEGER, allowNull: false },

  img: { type: DataTypes.STRING, allowNull: false },
});
const UserInfo = sequelize.define('user_info', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  about_me: { type: DataTypes.STRING },
});
const Friend = sequelize.define('friend', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
});
const Sex = sequelize.define('sex', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
});
const Country = sequelize.define('country', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
});
const Weight = sequelize.define('weight', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.INTEGER },
});
const Height = sequelize.define('height', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.INTEGER },
});
const EyeColor = sequelize.define('eye_color', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
});
const HairColor = sequelize.define('hair_color', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
});
const Target = sequelize.define('target', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
});

User.hasOne(UserInfo);
UserInfo.belongsTo(User);

UserInfo.hasOne(Sex);
Sex.belongsTo(UserInfo);

UserInfo.hasMany(Country);
Country.belongsTo(UserInfo);

UserInfo.hasOne(Weight);
Weight.belongsTo(UserInfo);

UserInfo.hasOne(Height);
Height.belongsTo(UserInfo);

UserInfo.hasOne(EyeColor);
EyeColor.belongsTo(UserInfo);

UserInfo.hasOne(HairColor);
HairColor.belongsTo(UserInfo);

UserInfo.hasOne(Target);
Target.belongsTo(UserInfo);

User.hasMany(Friend);
Friend.belongsTo(User);

module.exports = {
  User,
  UserInfo,
  Sex,
  Height,
  Weight,
  EyeColor,
  HairColor,
  Target,
  Friend,
};