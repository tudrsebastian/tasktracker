import { Controller,Get,UseGuards} from '@nestjs/common';
import { ProtectedService } from './protected.service';
import  JwtAuthGuard  from '../auth/jwt-auth.guard';

@Controller('protected')
export default class ProtectedController{
    constructor(private readonly protectedService: ProtectedService){}

    @Get()
    @UseGuards(JwtAuthGuard)
    getHello(): string {
      return this.protectedService.getHello();
    }
}