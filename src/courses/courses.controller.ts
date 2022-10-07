import { Controller,Get, Param } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
@Get()
findAll(){
  return 'Listagen de cursos';
}

@Get(':id')
findOne(
    @Param() params
){
  return `Curso numeto ${params.id}`;
}


}
