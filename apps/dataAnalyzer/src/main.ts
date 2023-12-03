import { NestFactory } from "@nestjs/core"
import { DataAnalyzerModule } from "./dataAnalyzer.module"

async function bootstrap() {
  const app = await NestFactory.create(DataAnalyzerModule)
  await app.listen(3000)
}
bootstrap()
