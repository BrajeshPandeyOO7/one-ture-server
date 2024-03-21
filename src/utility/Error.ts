export class BadRequestException extends Error {
    statusCode: number;
    constructor(message: string) {
        super(message);
        this.statusCode = 400;
    }
}

export class NotFoundException extends Error {
    statusCode: number;
    constructor(message: string) {
        super(message);
        this.statusCode = 404;
    }
}

export class InternalServerError extends Error {
    statusCode: number;
    constructor(message: string) {
        super(message);
        this.statusCode = 500;
    }
}

export class Errors extends Error {
    statusCode:number;
    constructor(){
        super('');
        this.statusCode = 0
    }
}

export type ErrorType = BadRequestException | NotFoundException | InternalServerError | Errors 