import database from '../database/index';
import { Request, Response, NextFunction } from 'express';
import { UserAttributes } from '../../types/models/user.interface';
const { User } = database.models;


class UserController {
    public async getUsers(req: Request, res: Response, next: NextFunction): Promise<void> {
        try 
        {
            const users: UserAttributes[] = await User.findAll();
            res.status(200).json(users);
        } 
        catch (error) 
        {
            next(error);
        }
    }

    public async getUserById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try 
        {
            const id: number = parseInt(req.params.id, 10);
            const user: UserAttributes = await User.findByPk(id);
            res.status(200).json(user);
        } 
        catch (error) 
        {
            next(error);
        }
    }

    public async createUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        try 
        {   const userData: UserAttributes = req.body;
            const user = await User.create(userData);
            res.status(200).json(user);
        } 
        catch (error) 
        {
            next(error);
        }
    }

    public async updateUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        try 
        {
            const user = await User.update(req.body, {
                where: {
                    id: req.params.id,
                },
            });
            res.status(200).json(user);
        } 
        catch (error) 
        {
            next(error);
        }
    }

    public async deleteUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        try 
        {
            const user = await User.destroy({
                where: {
                    id: req.params.id,
                },
            });
            res.status(200).json(user);
        } 
        catch (error) 
        {
            next(error);
        }
    }
}

export default new UserController();

