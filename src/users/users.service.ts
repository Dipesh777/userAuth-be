import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private repo: Repository<User>,
    ) { }

    async create(dto: any) {
        const hashed = await bcrypt.hash(dto.password, 10);
        const user = this.repo.create({ ...dto, password: hashed });
        return this.repo.save(user);
    }

    findAll() {
        return this.repo.find();
    }

    findByEmail(email: string) {
        return this.repo.findOne({ where: { email } });
    }

    update(id: number, dto: any) {
        return this.repo.update(id, dto);
    }

    softDelete(id: number) {
        return this.repo.softDelete(id);
    }

    hardDelete(id: number) {
        return this.repo.delete(id);
    }
}