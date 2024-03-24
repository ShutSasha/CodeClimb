import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
   const app = await NestFactory.create(AppModule)

   // generate config
   const config = new DocumentBuilder().setTitle('Block list').build()

   // create document for documentation API
   const document = SwaggerModule.createDocument(app, config)

   // make host for our documentation, where first parametr is route,
   // second is out app and third is our document that we need to host
   SwaggerModule.setup('api', app, document)

   await app.listen(3000)
}
bootstrap()
