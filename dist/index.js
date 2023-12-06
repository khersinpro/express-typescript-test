"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = __importDefault(require("./database"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
app.listen(port, async () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
database_1.default.sequelize.sync().then(() => {
    console.log(`⚡️[server]: Database is running at ${process.env.DB_HOST}`);
});
