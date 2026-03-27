import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { SignJWT } from 'jose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService) { }

    async login(email: string, password: string) {
        const user = await this.usersService.findByEmail(email);

        if (!user || !(await bcrypt.compare(password, user.password))) {
            throw new UnauthorizedException();
        }

        const secret = new TextEncoder().encode(process.env.JWT_SECRET);

        const token = await new SignJWT({ userId: user.id })
            .setProtectedHeader({ alg: 'HS256' })
            .setExpirationTime('1h')
            .sign(secret);

        return { access_token: token };
    }
}