import { Injectable, NestMiddleware } from '@nestjs/common'
import { Request, Response, NextFunction } from 'express'

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (req.method === 'POST' && req.body.name === '789') {
      req.body.name = 'hello789'
    }
    console.log('Logger Middleware Request...')
    
    // 可以在 middleware 中直接 response
    // res.status(200).send({
    //   a: 1,
    //   b: 2
    // })

    next()
  }
}
