import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
@Schema()
export class projects {
   @Prop()
   project_name: string;
   @Prop()
   project_id: string;
   @Prop()
   created_at: string
}
export const ProjectsSchema = SchemaFactory.createForClass(projects);