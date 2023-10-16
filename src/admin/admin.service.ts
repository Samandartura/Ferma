import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Admin, AdminDocument } from './schemas/admin.schema';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin.name) private adminModel:Model<AdminDocument>,
    private readonly jwtService:JwtService
  ){}

  // generate token
  async generateToken(admin:AdminDocument){
    const jwtPayload = {
      id:admin._id,
      is_creator:admin.is_owner,
      is_active:admin.is_active,
    };

    const [accessToken,refreshToken] = await Promise.all([
      this.jwtService.signAsync(jwtPayload,{
        secret:process.env.ACCESS_TOKEN_KEY,
        expiresIn:process.env.ACCESS_TOKEN_TIME,
      }),
      this.jwtService.signAsync(jwtPayload,{
        secret:process.env.REFRESH_TOKEN_KEY,
        expiresIn:process.env.REFRESH_TOKEN_TIME
      }),
    ]);

    const response = {
      access_token:accessToken,
      refresh_token:refreshToken
    };
    return response;
  }

  // crete or register

  async create(createAdminDto: CreateAdminDto) {
    const {password,confirm_password} = createAdminDto;
    if(password !== confirm_password){
      return new BadRequestException('password is not match')
    }

    const hashed_password = await bcrypt.hash(password,7);

    const createAdmin = await this.adminModel.create({
      ...createAdminDto,
      hashed_password,
    });

    const token = await this.generateToken(createAdmin);

    const hashed_token = await bcrypt.hash(token.refresh_token,7);
    const updatedAdmin = await this.adminModel.findByIdAndUpdate( createAdmin._id,{hashed_token},{new:true});

    return updatedAdmin;
  }

  // find all

  async findAll() {
    const admins = await this.adminModel.find();
    return admins;
  }


  //get one
  findOne(id: string) {
    const admin = this.adminModel.findById(id).exec();
    return admin;
  }


  //update
  async update(id: string, updateAdminDto: UpdateAdminDto) {
    const existingAdmin = await this.adminModel.findByIdAndUpdate(id,updateAdminDto,{new:true}).exec();

    if(!existingAdmin){
      throw new NotFoundException(`Admin #${id} not found`)
    };

    return existingAdmin;
  }


  //remove
  remove(id: string) {
    return this.adminModel.findByIdAndDelete(id);
  }
}
