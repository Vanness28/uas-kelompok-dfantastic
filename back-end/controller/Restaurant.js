import Travel from '../model/DestinationModel.js';
import path from "path";
import fs from "fs";

export const getDestination = async (req, res) => {
    try {
        const response = await Travel.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getDestinationById = async (req, res) => {
    try {
        const response = await Travel.findOne({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createDestination = (req, res) => {
    // INSERT INTO product VALUES (...)
    if (req.files === null)
      return res.status(400).json({ msg: "No File Uploaded" });
    const { name, price, menuId } = req.body;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = [".png", ".jpg", ".jpeg"];
  
    if (!allowedType.includes(ext.toLowerCase()))
      return res.status(422).json({ msg: "Invalid Images" });
    if (fileSize > 5000000)
      return res.status(422).json({ msg: "Image must be less than 5 MB" });
  
    file.mv(`./public/images/${fileName}`, async (err) => {
      if (err) return res.status(500).json({ msg: err.message });
      try {
        await Product.create({
          name: name,
          price: price,
          image: fileName,
          url: url,
          menuId: menuId,
        });
        res.status(201).json({ msg: "Product Created Successfuly" });
      } catch (error) {
        console.log(error.message);
      }
    });
  };

  export const deleteDestination = async (req, res) => {
    // DELETE FROM product WHERE id = ?
    const product = await Travel.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!product) return res.status(404).json({ msg: "No Data Found" });
  
    try {
      const filepath = `./public/images/${product.image}`;
      fs.unlinkSync(filepath);
      await Product.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json({ msg: "Product Deleted Successfuly" });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const getFood = async (req, res) => {
    try {
      const response = await Travel.findAll({
        where: {
          menuId: 2,
        },
      });
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
    }
  };
  
  export const getDrink = async (req, res) => {
    try {
      const response = await Travel.findAll({
        where: {
          menuId: 1,
        },
      });
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
    }
  };  