import { Module } from '@nestjs/common';
import { KnexModule } from 'nestjs-knex';
import { EntryModule } from './entry/entry.module';
import { CommonModule } from './common/common.module';
import env from './app.env';
import { CategoryModule } from './category/category.module';
import { WalletModule } from './wallet/wallet.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    KnexModule.forRoot({
      config: {
        client: 'pg',
        connection: {
          host: env.DATABASE_HOST,
          port: Number(env.DATABASE_PORT),
          user: env.DATABASE_USER,
          password: env.DATABASE_PASSWORD,
          database: env.DATABASE,
        },
      },
    }),
    EntryModule,
    CommonModule,
    CategoryModule,
    WalletModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
