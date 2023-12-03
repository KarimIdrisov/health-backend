import { Injectable } from "@nestjs/common"

@Injectable()
export class DataAnalyzerService {
  getHello(): string {
    return "Hello World!"
  }
}
