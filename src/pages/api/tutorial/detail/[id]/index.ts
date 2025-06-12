import { PrismaClient } from "@/generated/prisma";
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<RespinseType | { error: string }>,
) {
    const { id } = req.query;

    if( req.method === 'PATCH') {
        try {
            const { status } = req.body;
            const updated = await prisma.tutorial_detail.update({
                where: { id: id as string },
                data: { 
                    status: status,
                 },
            });
            await prisma.master_tutorial.update({
                where: { id: updated.master_tutorial_id },
                data: {
                    updated_at: new Date(),
                }
            });
            return res.status(200).json({ success: true, data: updated });
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    } else {
        res.status(405).end(); // Method Not Allowed
    }



}
