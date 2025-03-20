import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import formLoginSchema from '@/lib/formSchema/formLoginSchema'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { useRouter } from 'next/router'



const Index = () => {
  const router = useRouter()
  const form = useForm<z.infer<typeof formLoginSchema>>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      email: '',
      password: ''
    },
  })



  const onSubmit = (values: z.infer<typeof formLoginSchema>) => {
    router.push('/user/dashboard')
    console.log(values)
  }

  return (
    <>
      <Head>
        <title key="title">Login</title>
      </Head>

      <div className='flex px-[40px] py-[35px] h-screen'>
        <div className="bg-[#F6F3F9] w-1/2 p-16 rounded-2xl max-lg:hidden">
          <Image src={'/images/auth.png'} alt="login" width={0} height={0} sizes='100%' className='w-full h-full object-contain' />
        </div>
        <div className='w-1/2 px-20 py-16 max-lg:w-full max-lg:p-10 max-md:p-2'>
          <div className="px-10 h-full flex flex-col justify-center max-md:p-0">
            <p className='text-2xl font-semibold mb-1'>Perjalanan anda dimulai dari sini</p>
            <p className='text-base text-black-9 mb-6'>Masuk untuk melanjutkan</p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-base'>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Email" {...field} className='text-sm py-4' />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-base'>Password</FormLabel>
                      <FormControl>
                        <Input placeholder="Password" {...field} className='text-sm py-4' type='password' />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex items-center space-x-3">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember" className='text-bas3e font-medium text-black-9'>Ingat saya</Label>
                </div>
                <Button type="submit" className='w-full text-sm py-5'>Login</Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index