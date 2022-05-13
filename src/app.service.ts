import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from './config';

@Injectable()
export class AppService {
  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}
  getHello(): string {
    const dbName = this.configService.database.name;
    const dbPassword = this.configService.database.password;
    const dbPort = this.configService.database.port;
    return `Eva Sushi API ${dbName} --- ${dbPassword} --- ${dbPort}`;
  }
}
