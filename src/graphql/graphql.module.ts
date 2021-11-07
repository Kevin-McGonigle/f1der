import { Module } from '@nestjs/common';
import { GraphQLModule as NestGraphQLModule } from '@nestjs/graphql';
import { GraphQLConfig } from './graphql.config';

@Module({
  imports: [
    NestGraphQLModule.forRootAsync({
      useClass: GraphQLConfig,
    }),
  ],
})
export class GraphQlModule {}
