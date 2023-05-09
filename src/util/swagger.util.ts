import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from 'src/app.module';

export function setupSwagger(app: INestApplication) {
  const swaggerConfig = new DocumentBuilder()
    .setTitle('ModaResa Agenda')
    .setDescription('ModaResa agenda management')
    .setVersion('1.0')
    .build();

  const apiDocument = SwaggerModule.createDocument(app, swaggerConfig, {
    include: [AppModule],
  });
  SwaggerModule.setup('api/swagger', app, apiDocument);
}
