import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { UserAttributes } from '../../../types/models/user.interface';

export type UserCreationAttributes = Optional<UserAttributes, 'id'>;

export class User extends Model<UserAttributes, UserCreationAttributes> implements User {
    public id!: number;
    public email!: string;
    public password!: string;
    public firstname!: string;
    public lastname!: string;
    public age!: number;
    public readonly createdAt!: Date;
    public updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof User {
    User.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            email: {
                type: DataTypes.STRING(128),
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING(128),
                allowNull: false,
            },
            firstname: {
                type: DataTypes.STRING(128),
                allowNull: false,
            },
            lastname: {
                type: DataTypes.STRING(128),
                allowNull: false,
            },
            age: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            tableName: 'user',
            sequelize,
        },
    );

    return User;
}