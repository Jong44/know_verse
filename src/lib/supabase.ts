
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://udziohrekuseqybcocre.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY
if (!supabaseKey) {
    throw new Error('Supabase key is not defined. Please set NEXT_PUBLIC_SUPABASE_KEY in your environment variables.')
}
const supabase = createClient(supabaseUrl, supabaseKey || '')

const uploadFileSupabase = async (file: File, path: string) => {
    const { data, error } = await supabase.storage
        .from('uploads')
        .upload(path, file)
    
    if (error) {
        throw new Error(`Error uploading file: ${error.message}`)
    }
    
    return data
    }

const getFileUrlSupabase = (path: string) => {
    const { publicURL, error } = supabase.storage
        .from('uploads')
        .getPublicUrl(path)

    if (error) {
        throw new Error(`Error getting file URL: ${error.message}`)
    }

    return publicURL
}

export { supabase, uploadFileSupabase, getFileUrlSupabase }