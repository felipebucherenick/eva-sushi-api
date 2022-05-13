import { Injectable, NotFoundException } from '@nestjs/common';
import { Category } from 'src/products/entities/category.entity';
import {
  CreateCategoryDto,
  UpdateCategoryDto,
} from 'src/products/dtos/categories.dto';

@Injectable()
export class CategoriesService {
  private counterId = 1;
  private categories: Category[] = [
    {
      id: 1,
      title: 'Home',
      description: 'Home category',
      image: 'www.category-image.com',
    },
  ];

  create(payload: CreateCategoryDto) {
    this.counterId++;
    const newCategory = {
      id: this.counterId,
      ...payload,
    };
    this.categories.push(newCategory);
    return newCategory;
  }

  findAll() {
    return this.categories;
  }

  findOne(id: number) {
    const category = this.categories.find((category) => category.id === id);
    if (!category) {
      throw new NotFoundException(`The category #${id} doesn't exist`);
    }
    return category;
  }

  update(id: number, payload: UpdateCategoryDto) {
    const category = this.findOne(id);
    const index = this.categories.findIndex((category) => category.id === id);
    this.categories[index] = {
      ...category,
      ...payload,
    };
    return this.categories[index];
  }

  delete(id: number) {
    const category = this.findOne(id);
    const index = this.categories.findIndex((category) => category.id === id);
    this.categories.splice(index, 1);
    return category.id;
  }
}
