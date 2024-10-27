import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CityDocument = HydratedDocument<City>;

@Schema()
export class City {
    @Prop()
    data: string;

    @Prop()
    id: number;

    @Prop()
    name: string;
}

export const CitySchema = SchemaFactory.createForClass(City);

export type ResidentsDocument = HydratedDocument<Resident>;

@Schema()
export class Resident {
    @Prop()
    data: string;

    @Prop()
    id: number;

    @Prop()
    name: string;
}

export const ResidentsSchema = SchemaFactory.createForClass(Resident);