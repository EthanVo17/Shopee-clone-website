import { AppControllerType } from '../types';

const serverController: AppControllerType = (req, res) => {
  res.status(200).json('welcome to express API');
};

export default serverController;
