import { AppControllerType } from '../types';

const serverController: AppControllerType = async (req, res) => {
  try {
    res.status(200).json('welcome to express API');
  } catch (error) {
    res.status(500).json('server error!');
  }
};

export default serverController;
