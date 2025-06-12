import { PrismaClient } from "@/generated/prisma";
import { PartialBlock } from "@blocknote/core";
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<RespinseType | { error: string }>,
) {
    const { id } = req.query;

    if (req.method === 'GET') {
        try {
            const tutorial = await prisma.master_tutorial.findUnique({
                where: { id: Number(id) },
                include: {
                    tutorial_detail: {
                        orderBy: { order: "asc" },
                    },
                },
            });

            if (!tutorial) {
                return res.status(404).json({ status: 'error', message: "Not found" });
            }

            // Extract content_json array
            const initialContent = tutorial.tutorial_detail.map(detail => detail.content_json);

            const response = {
                ...tutorial,
                detail_document: initialContent,
            };

            return res.status(200).json({ status: 'success', data: response });
        } catch (err) {
            return res.status(500).json({ status: 'error', message: err.message });
        }
    } else if (req.method === 'POST') {
        try {
            const details = req.body;

            // Optional: hapus dulu detail lama untuk id ini (jika overwrite total)
            await prisma.tutorial_detail.deleteMany({
                where: { master_tutorial_id: Number(id) },
            });

            const createdDetails = await prisma.$transaction(
                details.map((detail) =>
                    prisma.tutorial_detail.create({
                        data: {
                            id: detail.content_json.id,
                            master_tutorial_id: Number(id),
                            type: detail.type,
                            order: detail.order,
                            status: detail.status,
                            content_json: detail.content_json,
                        },
                    })
                )
            );

            await prisma.master_tutorial.update({
                where: { id: Number(id) },
                data: {
                    updated_at: new Date(),
                },
            });

            return res.status(201).json({
                status: 'success',
                data: createdDetails,
            });
        } catch (error) {
            return res.status(500).json({ error: 'Save failed', message: error.message });
        }
    } else {
        res.status(405).end(); // Method Not Allowed
    }



}
