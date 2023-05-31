import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserDetailsModule } from './user-details/user-details.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://keymouseit22:Keymouse22@cluster0.ohmk8nu.mongodb.net/testApp?retryWrites=true&w=majority'), UserDetailsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
