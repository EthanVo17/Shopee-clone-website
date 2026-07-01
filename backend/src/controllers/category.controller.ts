import slugify from 'slugify';

import { AppControllerType } from '../types';
import { CategoryModel } from '../models';

const CreateCategory: AppControllerType = async (req, res) => {
  try {
    const { name, parent_Id, slug } = req.body;

    const slugName = slugify(name, { lower: true, strict: true, locale: 'vi' });

    const existingCate = await CategoryModel.findOne({ slug });

    if (existingCate) {
      res.status(400).json('This category has existed');
    }

    if (parent_Id) {
      const parentExisted = await CategoryModel.findOne({ parent_Id });
      if (!parentExisted) {
        res.status(400).json(`The ${parentExisted} does not exist or has been deleted`);
        return;
      }
    }

    const newCategory = await CategoryModel.create({
      name,
      parent_Id: parent_Id || null,
      slug: slugName,
    });

    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ message: 'create new category fail! Please try again', error });
  }
};

export { CreateCategory };
