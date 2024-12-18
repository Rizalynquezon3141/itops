import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Users = db.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED, // Unsigned integer for the ID
      autoIncrement: true, // Auto-incrementing ID
      primaryKey: true, // Set as the primary key
      allowNull: false, // Cannot be null
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    designation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Virtual field for full name
    fullName: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${this.firstname} ${this.lastname}`;
      },
    },
    refresh_token: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    termsAccepted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    status: {
<<<<<<< Updated upstream
      type: DataTypes.ENUM("inactive", "active"), // ENUM field for status
      allowNull: false, // Cannot be null
      defaultValue: "active", // Default value is 'active'
=======
      type: DataTypes.ENUM('inactive', 'active'), // ENUM field for status
      allowNull: false, // Cannot be null
      defaultValue: 'active', // Default value is 'active'
>>>>>>> Stashed changes
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);
export default Users;



// Sync the model with the database
// (async () => {
//   try {
//     await db.sync({ alter: true }); // Use alter to modify the table with new column
//     console.log(
//       "Database synchronized with status column and ID as primary key"
//     );
//   } catch (error) {
//     console.error("Error syncing database:", error);
//   }
// })();