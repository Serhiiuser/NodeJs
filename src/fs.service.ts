import fs  from 'node:fs/promises';
import path  from 'node:path';

const dbPath = path.join(process.cwd(),'dataBase','users.json');
module.exports = {
    reader: async () => {
        const buffer = await fs.readFile(dbPath);
        const data = buffer.toString();
        return data ? JSON.parse(data): [];
    },
    writer: async (users:any) => {
        await fs.writeFile(dbPath, JSON.stringify(users))

    }


};
