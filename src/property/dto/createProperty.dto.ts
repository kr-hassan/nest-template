import { IsNumber, IsString, Length } from 'class-validator';

export class CreatePropertyDto{
  @IsString({ always: true })
  @Length(3, 10, {
    message: 'Name must be between 3 and 10 characters',
    groups: ['create'],
  })
  @Length(3, 10, {
    message: 'Name must be between 3 and 10 characters',
    groups: ['update'],
  })
  name: string;
  @IsString()
  description: string;
  @IsNumber()
  price: number;
  location: string;
  image: string;
}