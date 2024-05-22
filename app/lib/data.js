import { Product, User } from './models';
import { connectDB } from './utils';

export const fetchUsers = async (searchQuery, pageQuery) => {
  const regex = new RegExp(searchQuery, 'i');
  const itemsPerPage = 4;

  try {
    connectDB();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(itemsPerPage)
      .skip(itemsPerPage * (pageQuery - 1));
    return { count, users };
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch users!');
  }
};

export const fetchUser = async (id) => {
  // console.log(id);
  try {
    connectDB();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch user!');
  }
};

export const fetchProducts = async (searchQuery, pageQuery) => {
  // console.log(searchQuery);
  const regex = new RegExp(searchQuery, 'i');

  const itemsPerPage = 5;

  try {
    connectDB();
    const count = await Product.find({ title: { $regex: regex } }).count();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(itemsPerPage)
      .skip(itemsPerPage * (pageQuery - 1));
    return { count, products };
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch products!');
  }
};

export const fetchProduct = async (id) => {
  try {
    connectDB();
    const product = await Product.findById(id);
    return product;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch product!');
  }
};

// DUMMY DATA

export const cards = [
  {
    id: 1,
    title: 'Total Users',
    number: 10.928,
    change: 12,
  },
  {
    id: 2,
    title: 'Stock',
    number: 8.236,
    change: -2,
  },
  {
    id: 3,
    title: 'Revenue',
    number: 6.642,
    change: 18,
  },
];
