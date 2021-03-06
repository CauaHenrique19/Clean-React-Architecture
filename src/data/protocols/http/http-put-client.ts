export interface HttpPutClient{
    put: (params: HttpPutClient.Params) => Promise<any>
}

export namespace HttpPutClient{
    export type Params = {
        url: string
        body?: any 
        headers?: {
            [key: string]: string
        }
    }
}