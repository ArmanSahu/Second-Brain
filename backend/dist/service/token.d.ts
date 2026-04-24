import { type JwtPayload } from 'jsonwebtoken';
import type { UserType } from '../models/user-model.js';
export declare const generateToken: (user: UserType) => string;
export declare const verifyToken: (token: string) => JwtPayload;
//# sourceMappingURL=token.d.ts.map