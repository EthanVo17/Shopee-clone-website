import mongoose from 'mongoose';

interface CategoryType {
  name: string;
  slug: string;
  parent_Id: mongoose.Types.ObjectId;
}

export default CategoryType;
