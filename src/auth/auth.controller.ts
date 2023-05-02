import { Body, Controller, Post, HttpCode, HttpStatus, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  
  @Get()
  getHello(){
    return this.authService.signIn('john', 'changeme');
  }
}