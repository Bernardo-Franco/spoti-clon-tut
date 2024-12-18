import { Song } from '../models/song.model.js';

export const getAllSongs = async (req, res, next) => {
  try {
    const allSongs = await Song.find().sort({ createdAt: -1 });
    res.json(allSongs);
  } catch (error) {
    next(error);
  }
};

export const getFeaturedSongs = async (req, res, next) => {
  try {
    // get 6 random songs using mongodb's aggregation pipeline
    const songs = await Song.aggregate([
      {
        $sample: { size: 6 },
      },
      {
        $project: { _id: 1, title: 1, artist: 1, imageUrl: 1, audioUrl: 1 },
      },
    ]);
    res.json(songs);
  } catch (error) {
    next(error);
  }
};

export const getMadeForYouSongs = async (req, res, next) => {
  try {
    // get 4 random songs using mongodb's aggregation pipeline
    const songs = await Song.aggregate([
      {
        $sample: { size: 4 },
      },
      {
        $project: { _id: 1, title: 1, artist: 1, imageUrl: 1, audioUrl: 1 },
      },
    ]);
    res.json(songs);
  } catch (error) {
    next(error);
  }
};

export const getTrendingSongs = async (req, res, next) => {
  try {
    // get 4 random songs using mongodb's aggregation pipeline
    const songs = await Song.aggregate([
      {
        $sample: { size: 4 },
      },
      {
        $project: { _id: 1, title: 1, artist: 1, imageUrl: 1, audioUrl: 1 },
      },
    ]);
    res.json(songs);
  } catch (error) {
    next(error);
  }
};

export const getSongById = async (req, res, next) => {
  try {
    const { songId } = req.params;
    const song = await Song.findById(songId);
    res.json(song);
  } catch (error) {
    console.log('Error getting song: ', error.message);
    next(error);
  }
};