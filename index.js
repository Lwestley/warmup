import generateUsers from './script';
import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:27017/TodoApp');
generateUsers(50)


