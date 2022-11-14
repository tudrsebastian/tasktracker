import { Injectable } from "@nestjs/common";



@Injectable()
export class ProtectedService{
    getHello(): string{
        return 'Hello World!'
    }
}