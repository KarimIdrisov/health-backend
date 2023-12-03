import { Module } from "@nestjs/common"
import { DataAnalyzerController } from "./dataAnalyzer.controller"
import { DataAnalyzerService } from "./dataAnalyzer.service"

@Module({
  imports: [],
  controllers: [DataAnalyzerController],
  providers: [DataAnalyzerService],
})
export class DataAnalyzerModule {}
