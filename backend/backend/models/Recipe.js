module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define(
    'Recipe',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      spoonacularId: { 
        type: DataTypes.INTEGER,
        unique: true, 
        allowNull: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      totalTime: {
        type: DataTypes.INTEGER,
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        field: 'UserId',
      },
      imageUrl: { 
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      tableName: 'Recipes',
      timestamps: true,
    }
  );

  Recipe.associate = (models) => {
    Recipe.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId',
    });
    Recipe.belongsToMany(models.User, {
      as: 'wishlistUsers',
      through: 'UserWishlist',
      foreignKey: 'recipeId',
      otherKey: 'userId',
    });
  };

  return Recipe;
};