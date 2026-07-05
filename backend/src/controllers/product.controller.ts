import slugify from 'slugify';
import express from 'express';

import { Product } from '../models';
import { AppControllerType, ProductFilterQuery, ProductType } from '../types';
import mongoose from 'mongoose';

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

const getProduct = async (
  req: express.Request<{}, {}, {}, ProductFilterQuery>,
  res: express.Response
): Promise<void> => {
  try {
    const { page = '1', limit = '10', category, minPrice, maxPrice, sort, keyword } = req.query;
    const filter: mongoose.QueryFilter<ProductType> = {};

    if (keyword) {
      filter.name = { $regex: keyword, $options: 'i' };
    }

    if (category) {
      filter.category ? category : `${category} does not exist`;
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
      message: 'Lấy danh sách sản phẩm thành công.',
      data: products,
      pagination: {
        currentPage: pageNumber,
        totalPages: Math.ceil(totalItems / limitNumber),
        totalItems,
        itemsPerPage: limitNumber,
      },
    });
  } catch (error) {
    res.status(400).json({ message: 'error', error });
  }
};

export { CreateProduct, getProduct };
