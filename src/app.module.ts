import { Module } from '@nestjs/common';
//import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'
import { UserModule } from './user/user.module';

@Module({
  imports: [
  ConfigModule.forRoot(),
  GraphQLModule.forRoot({
    playground:true,
    debug:true,
   autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  }),
  UserModule,
],
  controllers: [],
  providers: [],
})
export class AppModule {}
