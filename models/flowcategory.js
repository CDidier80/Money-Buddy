'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {

    class Flowcategory extends Model {

      static associate(models) {

          Flowcategory.belongsTo(models.Month, {
            foreignKey: 'month_id',
            as: 'flowcategories',
            constraints: true,
          }),  

          Flowcategory.hasMany(models.Outflow, {
            foreignKey: 'flowcategory_id',
            as: 'outflows',
          })
        }
      }
      Flowcategory.init({
        monthId: {
          type: DataTypes.INTEGER,
          onDelete: 'cascade',
          field: 'month_id',
          allowNull: false,
          references: {
              model: 'months',
              key: 'id'
          }
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, 
    {
        sequelize,
        modelName: 'Flowcategory',
        tableName: 'flowcategories'
    })

    return Flowcategory
}