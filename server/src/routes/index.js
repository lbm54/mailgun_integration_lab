import { Router } from 'express';
import blogsRouter from './blogs';
import authRouter from './auth';
import usersRouter from './users';
import {isLoggedIn, tokenMiddleware} from '../middleware/auth.mw';
import stripeRouter from './stripeDonations';
import contactRouter from './contactform';

let router = Router();

router.use('/auth', authRouter);
router.use('/blogs', blogsRouter);
router.use('/donate', stripeRouter);
router.use('/contact', contactRouter);
router.use(tokenMiddleware);
router.use(isLoggedIn);
router.use('/users', usersRouter);

export default router;
