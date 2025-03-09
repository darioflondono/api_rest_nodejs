const mongoose = require("mongoose");

const StorageScheme = new mongoose.Schema(
  {
    url: {
      type: String,
    },
    filename: {
      type: String,
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

/**
 * Implementar metodo propio con relacion a storage
 */

const Storage = mongoose.model('Storage', StorageScheme);
module.exports = Storage;