import {z} from 'zod';

export const createTaskShema = z.object({
    title : z.string({
        required_error : "Title is requiered"
    }),
    description : z.string({
        required_error : "Description must be a string"
    }),
    date : z.string().datetime().optional()
})