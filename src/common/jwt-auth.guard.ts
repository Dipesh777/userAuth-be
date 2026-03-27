import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { jwtVerify } from 'jose';

@Injectable()
export class JwtAuthGuard implements CanActivate {
    async canActivate(context: ExecutionContext) {
        const req = context.switchToHttp().getRequest();
        const auth = req.headers.authorization;

        if (!auth) return false;

        const token = auth.split(' ')[1];

        const secret = new TextEncoder().encode(process.env.JWT_SECRET);

        try {
            const { payload } = await jwtVerify(token, secret);
            req.user = payload;
            return true;
        } catch {
            return false;
        }
    }
}