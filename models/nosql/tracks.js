const mongoose = require("mongoose");

const TracksSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    album: {
      type: String,
    },
    cover: {
      type: String
    },
    artist: {
      name: {
        type: String,
      },
      nickname: {
        type: String,
      },
      nationality: {
        type: String,
      },
    },
    duration: {
      start: {
        type: Number,
      },
      end: {
        type: Number,
      },
    },
    mediaId: {
      type: String
        },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

/**
 * Implementar metodo propio con relacion a storage
 */

const Track = mongoose.model('Track', TracksSchema);

module.exports = Track;