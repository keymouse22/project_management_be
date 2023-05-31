import { Module } from '@nestjs/common';
import { UserDetailsService } from './user-details.service';
import { UserDetailsController } from './user-details.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './entities/user-detail.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[MongooseModule.forFeature([{name: 'Users', schema: UserSchema}]),
  JwtModule.register({
    global: true,
    secret: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    signOptions: { expiresIn: '60d' },
  })],
  controllers: [UserDetailsController],
  providers: [UserDetailsService]
})
export class UserDetailsModule {}
