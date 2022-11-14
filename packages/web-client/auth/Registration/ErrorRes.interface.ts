export interface ErrorRes {
    message: string,
    code?: string,
    response?: {
        status?: number,
    }
}

