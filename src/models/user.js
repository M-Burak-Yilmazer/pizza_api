"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- */

const userSchema = new mongoose.Schema(
  {
    username: {
      type: string,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: string,
      trim: true,
      required: true,
      unique: true,
    },
    isAdmin: {},
  },
  { collection: "users", timestamps: true }
);
