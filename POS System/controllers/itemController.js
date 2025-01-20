import Item from "../models/Item.js";

export const getItemController = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).send(items);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const addItemController = async (req, res) => {
  try {
    const item = await Item.create(req.body);
    await item.save();
    res.status(200).send("Item create Successfully");
  } catch (error) {
    console.log(error);
  }
};
