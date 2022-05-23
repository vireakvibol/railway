import { Query, Resolver } from '@nestjs/graphql';
import { AppModel } from './app.model';

@Resolver('app')
export class AppResolver {

  @Query(() => AppModel)
  async app(): Promise<AppModel> {
    return {id: 'test', name: 'test'}
  }

}
