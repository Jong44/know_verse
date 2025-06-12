
import { PrismaClient } from '@/generated/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse<RespinseType | { error: string }>,
) {
  if (req.method === 'POST') {
    try {
      const { judul, kode_matakuliah, createor_email } = req.body;
      const randomIdPresentation = Math.floor(Math.random() * 1000);
      const randomIdFinished = Math.floor(Math.random() * 1000);
      // create slug from judul
      const slug = judul
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '')
        .slice(0, 50);

      const newTutorial = await prisma.master_tutorial.create({
        data: {
          judul,
          kode_matakuliah,
          createor_email,
          url_presentation: `${slug}-${randomIdPresentation}`,
          url_finished: `${slug}-${randomIdFinished}`,
        },
      });

      res.status(201).json({
        status: 'success',
        message: 'Tutorial created successfully',
      }
      );
    } catch (error) {
      console.error('Error creating tutorial:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } 
  else if (req.method === 'GET') {
    try {
      const tutorials = await prisma.master_tutorial.findMany();
      res.status(200).json({
        status: 'success',
        data: tutorials,
      });
    } catch (error) {
      console.error('Error fetching tutorials:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  else {
    res.status(405).end(); // Method Not Allowed
  }
}
