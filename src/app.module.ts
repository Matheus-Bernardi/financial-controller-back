import { Module } from '@nestjs/common';
import { KnexModule } from 'nestjs-knex';
import { EntryModule } from './entry/entry.module';
import env from './app.env';

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
    EntryModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
