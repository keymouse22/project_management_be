import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
@Schema()
export class task {
   @Prop()
   project_id: number;
   @Prop()
   title: string;
   @Prop()
   description: string;
   @Prop()
   hours: number;
   @Prop()
   comments: string;
}
export const TaskSchema = SchemaFactory.createForClass(task);