import {
  Controller,
  Get,
  Body,
  Req,
  Query,
  Header,
  Redirect,
  Param,
  Post,
  Ip,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

type Skill = 'HTML' | 'CSS' | 'JavaScript';

interface UserInfo {
  name: string;
  age: number;
  skills?: Skill[];
}

interface UserPayload {
  name: string;
  email: string;
  password: string;
}

interface RedirectInfo {
  url: string;
  statusCode: number;
}
@Controller('init')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get(['a/:id', 'b/:id/:order'])
  getWorld(
    @Req() req: Request,
    @Param() params,
    @Ip() ip: string,
    @Query('password') password: string,
  ) {
    console.log('req: ', req.body);
    console.log('params: ', params);
    console.log('ip: ', ip);
    console.log('password: ', password);
    return this.appService.getWorld();
  }

  @Get('user')
  // @Redirect('https://www.baidu.com', 301)
  @Header('Cache-Control', 'max-age=10000')
  async getUserInfo(@Query() id: string): Promise<UserInfo | RedirectInfo> {
    console.log('id: ', id);
    const userInfo: UserInfo = {
      name: 'zhaoyiming',
      age: 18,
      skills: ['JavaScript'],
    };

    // 动态决定重定向，返回的值将覆盖传递给 @Redirect()装饰器的所有参数。 例如：
    // return {
    //   url: 'https://www.so.com',
    //   statusCode: 302
    // }

    return Promise.resolve(userInfo);
  }

  @Get('ab*cd')
  async getUsers(@Param() params) {
    console.log('ab*cd params: ', params);
    return 'hello' + JSON.stringify(params);
  }

  @Post()
  async create(
    @Req() req: Request,
    @Body('a') payload: UserPayload,
  ): Promise<boolean> {
    return true;
  }
}
