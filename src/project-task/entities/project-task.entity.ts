import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
@Schema()
export class task {
   @Prop()
   board_name: string;
   @Prop()
   title: string;
   @Prop()
   description: string;
   @Prop()
   hours: number;
   @Prop()
   comments: string;
   @Prop()
   project_id: string;
}

export const TaskSchema = SchemaFactory.createForClass(task);