import { Controller, Get } from "@nestjs/common"
import { DataHandlerService } from "./dataHandler.service"

@Controller()
export class DataHandlerController {
  constructor(private readonly dataHandlerService: DataHandlerService) {}

  @Get()
  getHello(): string {
    return this.dataHandlerService.getHello()
  }
}
