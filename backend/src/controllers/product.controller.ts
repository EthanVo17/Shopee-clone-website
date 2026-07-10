import slugify from 'slugify';
import express from 'express';

import { Product } from '../models';
import { AppControllerType, ProductFilterQuery } from '../types';
import mongoose from 'mongoose';

const CreateProduct: AppControllerType = async (req, res) => {
  try {
    const { name, description, price, countInStock, category, brand, slug, images, variant } =
      req.body;

    if (!name || !description || !price || countInStock === undefined || !category || !brand) {
      res.status(400).json({ message: 'Missing required product fields' });
      return;
    }

    const slugName = slugify(name, { lower: true, strict: true, locale: 'vi' });

    const newProduct = await Product.create({
      name,
      description,
      price,
      countInStock,
      category,
      brand,
      slug: slug || slugName,
      images: images || [],
      variant: variant || [],
    });

    res.status(201).json({
      message: 'Create new product successfully',
      data: newProduct,
    });
  } catch (err) {
    res.status(500).json({ message: 'Create new product failed', error: err });
  }
};

const getProduct = async (
  req: express.Request<{}, {}, {}, ProductFilterQuery>,
  res: express.Response
) => {
  try {
    const { page = '1', limit = '10', category, minPrice, maxPrice, sort, keyword } = req.query;
    const filter: Record<string, any> = {};

    if (keyword) {
      filter.name = { $regex: keyword, $options: 'i' };
    }

    if (category) {
      filter.category = new mongoose.Types.ObjectId(category);
    }

    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    const pageNumber = parseInt(page, 10);
    const limitNumber = parseInt(limit, 10);
    const skip = (pageNumber - 1) * limitNumber;

    let sortOption = '-createdAt';
    if (sort === 'price_asc') sortOption = 'price';
    if (sort === 'price_desc') sortOption = '-price';

    const [products, totalItems] = await Promise.all([
      Product.find(filter)
        .populate('category', 'name slug')
        .sort(sortOption)
        .skip(skip)
        .limit(limitNumber),
      Product.countDocuments(filter),
    ]);

    res.status(200).json({
      message: 'Get products list successfully.',
      data: products,
      pagination: {
        currentPage: pageNumber,
        totalPages: Math.ceil(totalItems / limitNumber),
        totalItems,
        itemsPerPage: limitNumber,
      },
    });
  } catch (error) {
    console.error('[getProduct Error]:', error);
    res.status(400).json({ message: error instanceof Error ? error.message : 'error', error });
  }
};

export { CreateProduct, getProduct };
