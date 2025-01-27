import BookInfo from "../models/bookInfoModel.js";

const getBookInfo = async (req, res) => {
  try {
    const bookInfo = await BookInfo.find();
    res.status(200).json(bookInfo);
  } catch (error) {
    res.status(500).json(error);
    console.error(error);
  }
};

const createNewBookInfo = async (req, res) => {
  const {
    title,
    author,
    genre,
    publicationYear,
    pages,
    ISBN,
    image,
    description,
    reviews,
  } = req.body;

  try {
    // Direkt mit create() das neue Buch speichern
    const newBookInfo = await BookInfo.create({
      title,
      author,
      genre,
      publicationYear,
      pages,
      ISBN,
      image,
      description,
      reviews,
    });

    res.status(200).json(newBookInfo);
  } catch (error) {
    res.status(500).json(error);
    console.error(error);
  }
};

export { getBookInfo, createNewBookInfo };
