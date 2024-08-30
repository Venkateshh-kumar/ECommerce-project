import { Router } from 'express';
import { sample_foods, } from '../data';
import asyncHandler from 'express-async-handler';
import { Food, FoodModel } from '../models/food.model';
import { Document, Types } from 'mongoose';
const router = Router();

router.get('/seed',asyncHandler(async (req: any, res: { send: (arg0: string) => void; }) => {
    const foodsCount = await FoodModel.countDocuments();
    if (foodsCount > 0) {
      res.send('Seed is already done!');
      return;
    }

    await FoodModel.create(sample_foods);
    res.send('Seed Is Done!');
  })
);

router.get(
  '/',
  asyncHandler(async (req: any, res: { send: (arg0: (Document<unknown, {}, Food> & Food & { _id: Types.ObjectId; })[]) => void; }) => {
    const foods = await FoodModel.find();
    res.send(foods);
  })
);

router.get(
  '/search/:searchTerm',
  asyncHandler(async (req: { params: { searchTerm: string | RegExp; }; }, res: { send: (arg0: (Document<unknown, {}, Food> & Food & { _id: Types.ObjectId; })[]) => void; }) => {
    const searchRegex = new RegExp(req.params.searchTerm, 'i');
    const foods = await FoodModel.find({ name: { $regex: searchRegex } });
    res.send(foods);
  })
);

router.get(
  '/tags',
  asyncHandler(async (req: any, res: { send: (arg0: any[]) => void; }) => {
    const tags = await FoodModel.aggregate([
      {
        $unwind: '$tags',
      },
      {
        $group: {
          _id: '$tags',
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 0,
          name: '$_id',
          count: '$count',
        },
      },
    ]).sort({ count: -1 });

    const all = {
      name: 'All',
      count: await FoodModel.countDocuments(),
    };

    tags.unshift(all);
    res.send(tags);
  })
);

router.get(
  '/tag/:tagName',
  asyncHandler(async (req: { params: { tagName: any; }; }, res: { send: (arg0: (Document<unknown, {}, Food> & Food & { _id: Types.ObjectId; })[]) => void; }) => {
    const foods = await FoodModel.find({ tags: req.params.tagName });
    res.send(foods);
  })
);

router.get(
  '/:foodId',
  asyncHandler(async (req: { params: { foodId: any; }; }, res: { send: (arg0: (Document<unknown, {}, Food> & Food & { _id: Types.ObjectId; }) | null) => void; }) => {
    const food = await FoodModel.findById(req.params.foodId);
    res.send(food);
  })
);

export default router;
