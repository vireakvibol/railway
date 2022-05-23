import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class AppModel {
  @Field()
  id: string;

  @Field()
  name: string;
}
