import {
    CallHandler,
    ExecutionContext,
    HttpException,
    HttpStatus,
    Injectable,
    NestInterceptor,
  } from '@nestjs/common';
  import { Observable, throwError } from 'rxjs';
  import { catchError } from 'rxjs/operators';
  @Injectable()
  export class RegisterInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
      return next
        .handle()
        .pipe(
          catchError(() =>
            throwError(
              () =>
                new HttpException(
                  'Email is already used',
                  HttpStatus.CONFLICT,
                ),
            ),
          ),
        );
    }
  }