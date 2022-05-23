import { join } from 'path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { GraphQLModule } from '@nestjs/graphql';
import { AppResolver } from './app.resolver';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    GraphQLModule.forRoot({
      playground: true,
      debug: false,
      autoSchemaFile: join(__dirname, 'src/schema.gql'),
    }),
  ],
  providers: [AppResolver],
})
export class AppModule { }
