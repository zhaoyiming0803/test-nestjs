import { Controller, Get, Body, Req, Query, Header, Redirect, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

type Skill = 'HTML' | 'CSS' | 'JavaScript'

interface UserInfo{
  name: string
  age: number
  skills?: Skill[]
}

interface UserPayload {
  name: string
  email: string
  password: string
}

@Controller('init')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get([
    'a/:id',
    'b/:id/:order'
  ])
  getWorld(@Param() params): string {
    console.log('params', params)
    return this.appService.getWorld()
  }

  @Get('user')
  // @Redirect('https://www.baidu.com', 301)
  @Header('Cache-Control', 'max-age=10000')
  async getUserInfo(@Query() id: string): Promise<UserInfo> {
    console.log('id: ', id)
    const userInfo: UserInfo = {
      name: 'zhaoyiming',
      age: 18,
      skills: ['JavaScript']
    }
    return Promise.resolve(userInfo)
  }

  @Post()
  async create(@Body() payload: UserPayload): Promise<boolean> {
    return true
  }
}
