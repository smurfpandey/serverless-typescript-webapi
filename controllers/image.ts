import { Request, Response } from 'express';
/**
 * POST /images
 * Create a new image entry
 */
export const createImageEntry = (req: Request, res: Response) => {    
    let newImage = req.body;
    
    // some logic to save the image

    return res.status(201).send(newImage);
};

/**
 * GET /images/:id
 * Create a new image entry
 */
export const getImageEntry = (req: Request, res: Response) => {
    const imageId = req.params.id;
    
    // some logic to retrieve the data
    
    res.send({ status: 'Ok', data: imageId });
}