import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {City, Resident} from "./schema";
import {Model} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";

@Controller()
export class AppController {
  constructor(
      @InjectModel(City.name) private cityModel: Model<City>,
      @InjectModel(Resident.name) private residentsModel: Model<Resident>,
      private readonly appService: AppService
  ) {}

  @Get("/city")
  async getCity(): Promise<any> {
    return this.cityModel.find();
  }

  @Get("/residents")
  async getResidents(): Promise<any> {
    return this.residentsModel.find()
  }
}
