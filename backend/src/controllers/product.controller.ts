import slugify from 'slugify';

import { Product } from '../models';
import { AppControllerType } from '../types';

const CreateProduct: AppControllerType = async (req, res) => {
  try {
    const { name, description, price, countInStock, category, brand, slug } = req.body;

    const slugName = slugify(name, { lower: true, strict: true, locale: 'vi' });

    const newProduct = await Product.create({
      name,
      description,
      price,
      countInStock,
      category,
      brand,
      slug: slugName,
    });

    res.status(201).json({
      message: 'Create new product successfully',
      data: newProduct,
    });
  } catch (err) {
    res.status(500).json({ message: 'Create new product failed', error: err });
  }
};

export { CreateProduct };
