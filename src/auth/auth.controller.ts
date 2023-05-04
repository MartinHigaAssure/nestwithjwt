import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  Get,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UpdateUserDto } from '../users/dto/update-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}


  @Post('login')
  signIn(@Body() signInDto: UpdateUserDto) {
    const u=signInDto.username;
    const p=signInDto.password;
    return this.authService.signIn(u, p);
    //return { user: u, pass: p };
  }

  @Get()
  getHello() {
    return this.authService.signIn("john", "changeme");
  }
}
