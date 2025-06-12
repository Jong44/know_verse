
import React, { useEffect } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { useForm } from 'react-hook-form'
import { DialogClose } from '@radix-ui/react-dialog'
import { DocumentService } from '@/services/document-service'
import { toast } from "sonner"
 


interface DialogEditDocumentProps {
  documentId: string
  documentTitle: string
  documentSubject: string
}

const FormSchema = z.object({
  judul: z.string().min(1, 'Judul tidak boleh kosong'),
  kode_matakuliah: z.string().min(1, 'Mata kuliah tidak boleh kosong'),
})
const DialogEditDocument = ({
  documentId,
  documentTitle,
  documentSubject,
}: DialogEditDocumentProps) => {
const form = useForm<z.infer<typeof FormSchema>>({
  resolver: zodResolver(FormSchema),
});

useEffect(() => {
  form.reset({
    judul: documentTitle,
    kode_matakuliah: documentSubject,
  });
}, [documentTitle, documentSubject]);

  const { register, handleSubmit, formState: { errors } } = form


  async function onSubmit(data: z.infer<typeof FormSchema>)   {
    const { judul, kode_matakuliah } = data

    const response = fetch('/api/tutorial', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        judul,
        kode_matakuliah,
        createor_email: 'johnDoe', 
      }),
    })
    .then((res) => {
      if (res.status === 201) {
        toast.success('Dokumen berhasil dibuat')
        return res.json()
      } else {
        toast.error('Gagal membuat dokumen')
        throw new Error('Gagal membuat dokumen')
      }
    })

    

    form.reset()
  }


  return (
    <DialogContent className="sm:max-w-[725px] fixed w-full sm:rounded-lg sm:top-1/2 sm:-translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2 bg-white shadow-md p-6 border border-slate-200">
      <DialogHeader>
        <DialogTitle>Buat Dokumen</DialogTitle>
        <DialogDescription>
          Buat dokumen baru untuk presentasi Anda. Silakan isi judul dan mata kuliah yang sesuai.
        </DialogDescription>
      </DialogHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="judul" className="text-right">Judul</Label>
            <div className="col-span-3">
              <FormField
                control={form.control}
                name="judul"
                render={({ field }) => (
                  <FormItem className='w-full'>
                    <FormControl>
                      <Input
                        readOnly={false}
                        disabled={false}
                        id="judul"
                        placeholder="Judul dokumen"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="judul" className="text-right">Mata Kuliah</Label>
            <div className="col-span-3">
              <FormField
                control={form.control}
                name="kode_matakuliah"
                render={({ field }) => (
                  <FormItem className='w-full'>
                    <Select
                      defaultValue={field.value}
                      onValueChange={(value) => field.onChange(value)}
                    >
                      <SelectTrigger id="kode_matakuliah" className='w-full'>
                        <SelectValue placeholder="Pilih mata kuliah" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Daftar Mata Kuliah</SelectLabel>
                          <SelectItem value="pbo">Pemrograman Berorientasi Objek</SelectItem>
                          <SelectItem value="ai">Kecerdasan Buatan</SelectItem>
                          <SelectItem value="ml">Machine Learning</SelectItem>
                          <SelectItem value="network">Jaringan Komputer</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <DialogFooter className="pt-2">
          <DialogClose asChild>
            <Button type="submit">Edit Dokumen</Button>
          </DialogClose>
        </DialogFooter>
        </form>
      </Form>

    </DialogContent>
  )
}

export default DialogEditDocument