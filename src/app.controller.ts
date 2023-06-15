import { LoggerService } from './logger/logger.service';
import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
  forwardRef,
} from '@nestjs/common';
import { plainToClass, plainToInstance } from 'class-transformer';
import { AppService } from './app.service';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';
import { Injectable } from './inject.service';
import { ModuleRef } from '@nestjs/core';
import { Iuser } from './dto/user.interface';
import { StoreService } from './store/store.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService, // private userServices: UserService,
    private userServices: UserService,
    private loggerService: LoggerService,
    @Inject('STORE_SERVICEfile.json')
    private storeService: StoreService,
    @Inject('APP_CONFIG') private appConFig: any,
    @Inject('APP_USER') private userConfig: Iuser, // @Inject('STORE_SERVICES') private storeSer: StoreService,
  ) {
    console.log(this.appService.log() === loggerService);
  }
  // inject = new Injectable([UserService]);
  // userService = this.inject.getProvider(UserService);
  // userServices = this.moduleRef.get('USER_SERVICE');
  @Get()
  getHello() {
    return this.loggerService;
    // return this.userServices.getHello();
    // return this.appService.getHello();
  }
  @UsePipes(new ValidationPipe())
  @Post()
  createUser(@Body() user: UserDto): UserDto {
    this.storeService.getUser(user);
    return this.userServices.createUser(user);
  }
  @Get(':id')
  getUserById(
    @Param(
      'id',
      new ParseIntPipe({
        errorHttpStatusCode: HttpStatus.BAD_REQUEST,
      }),
    )
    id: number,
  ): number {
    return id;
  }
}
