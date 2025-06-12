import { PrismaClient } from "@/generated/prisma";
import { PartialBlock } from "@blocknote/core";
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<RespinseType | { error: string }>,
) {
    const { id } = req.query;

    console.log("id", id)

    if (req.method === 'GET') {
        try {
            console.log("id", id)
            const tutorial = await prisma.master_tutorial.findFirst({
                where: { url_presentation: String(id) },
                include: {
                    tutorial_detail: {
                        orderBy: { order: "asc" },
                    },
                },
            });
            console.log(tutorial)

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
    } else {
        res.status(405).end(); // Method Not Allowed
    }



}
