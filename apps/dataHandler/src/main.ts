import { NestFactory } from "@nestjs/core"
import { DataHandlerModule } from "./dataHandler.module"

async function bootstrap() {
  const app = await NestFactory.create(DataHandlerModule)
  await app.listen(3000)
}
bootstrap()
