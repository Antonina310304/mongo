import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import {Injectable} from "@nestjs/common";

@Injectable()
export class CitiesService {
    constructor(@InjectConnection() private readonly connection: Connection) {}

    async startTransaction() {
        const session = await this.connection.startSession();
        session.startTransaction();
    }
}
