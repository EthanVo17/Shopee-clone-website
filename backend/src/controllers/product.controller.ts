import mongoose from 'mongoose';
import { Product } from '../models';
import { AppControllerType, ProductType } from '../types';

const CreateProduct: AppControllerType = async (req, res) => {
  try {
    const { name, description, price, countInStock, category, brand, slug } = req.body;

    const newProduct = await Product.create({
      name,
      description,
      price,
      countInStock,
      category,
      brand,
      slug,
    });

    res.status(201).json({
      message: 'Create new product successfully',
      data: newProduct,
    });
  } catch (err) {
    res.status(400).json({ message: 'Create new product failed', error: err });
  }
};

export { CreateProduct };
