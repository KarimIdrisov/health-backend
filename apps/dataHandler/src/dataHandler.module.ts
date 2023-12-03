import { Module } from "@nestjs/common"
import { DataHandlerController } from "./dataHandler.controller"
import { DataHandlerService } from "./dataHandler.service"

@Module({
  imports: [],
  controllers: [DataHandlerController],
  providers: [DataHandlerService],
})
export class DataHandlerModule {}
