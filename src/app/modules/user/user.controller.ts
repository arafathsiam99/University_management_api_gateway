import { NextFunction, Request,Response } from 'express';
import { FileUploadHelper } from '../../../helpers/fileUploadHelper';

const createStudent = async (req: Request, res: Response, next: NextFunction) => {
  FileUploadHelper.uploadToCloudinary();
};

export const UserController = {
  createStudent
};
