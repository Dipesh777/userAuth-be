import { Request } from 'express';

export interface AuthRequest extends Request {
  user: any; // you can type this better later
}