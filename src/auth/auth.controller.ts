import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  Get,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    const u=signInDto.username.toString();
    const p=signInDto.password.toString();
    //return this.authService.signIn(u, p);
    return { user: u, pass: p };
  }

  @Get()
  getHello() {
    return this.authService.signIn("john", "changeme");
  }
}
