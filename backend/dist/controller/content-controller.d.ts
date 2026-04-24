import type { Request, Response } from "express";
export declare const createContent: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getContent: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
type Params = {
    contentId: string;
};
export declare const updateContent: (req: Request<Params>, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const deleteContent: (req: Request<Params>, res: Response) => Promise<Response<any, Record<string, any>>>;
export {};
//# sourceMappingURL=content-controller.d.ts.map