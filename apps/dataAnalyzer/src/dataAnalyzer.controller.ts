import { Controller, Get } from "@nestjs/common"
import { DataAnalyzerService } from "./dataAnalyzer.service"

@Controller()
export class DataAnalyzerController {
  constructor(private readonly dataAnalyzerService: DataAnalyzerService) {}

  @Get()
  getHello(): string {
    return this.dataAnalyzerService.getHello()
  }
}
