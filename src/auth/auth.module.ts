import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    JwtModule.register({
      secret: `g'^})|£>Bz3$O7~l8STD£8kzg(/>~q[|`,
    }),
    UserModule,
    PrismaModule,
  ],
})
export class AuthModule {}
