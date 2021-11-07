import { Injectable } from '@nestjs/common';
import { GqlModuleOptions, GqlOptionsFactory } from '@nestjs/graphql';
import { join } from 'path';

@Injectable()
export class GraphQLConfig implements GqlOptionsFactory {
  createGqlOptions(): Promise<GqlModuleOptions> | GqlModuleOptions {
    return {
      typePaths: []['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql/graphql.definitions.ts'),
      },
    };
  }
}
