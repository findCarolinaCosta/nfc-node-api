module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      emissionDate: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      value: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      orderStatusBuyer: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '0',
      },
      orderNfId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      orderNumber: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      orderPath: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      orderFileName: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      orderOriginalName: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      pdfFile: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      emitedTo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nNf: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      CTE: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      createdAt: {
        type: Sequelize.DATETIME,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATETIME,
        allowNull: false,
      },
      cnpjId: {
        type: Sequelize.INTEGER(11),
        defaultValue: null,
      },
      userId: {
        type: Sequelize.INTEGER(11),
        defaultValue: null,
      },
      buyerId: {
        type: Sequelize.INTEGER(11),
        defaultValue: null,
      },
      providerId: {
        type: Sequelize.INTEGER(11),
        defaultValue: null,
      },
      orderStatusProvider: {
        type: Sequelize.STRING,
        defaultValue: '0',
      },
      deliveryReceipt: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      cargoPackingList: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      deliveryCtrc: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('orders');
  },
};
