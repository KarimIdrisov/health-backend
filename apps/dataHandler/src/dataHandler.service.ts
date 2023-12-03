import { Injectable } from "@nestjs/common"

@Injectable()
export class DataHandlerService {
  getHello(): string {
    return "Hello World!"
  }
}
