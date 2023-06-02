import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import mongoose from "mongoose";
import { task } from "src/project-task/entities/project-task.entity";
@Schema()
export class projects {
   @Prop()
   project_name: string;
   @Prop()
   project_id: number;
   @Prop({type: [{ type: mongoose.Types.ObjectId, ref: "task"}]})
   task: task;
}
export const ProjectsSchema = SchemaFactory.createForClass(projects);