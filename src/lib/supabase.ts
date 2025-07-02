
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://udziohrekuseqybcocre.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
if (!supabaseKey) {
    throw new Error('Supabase key is not defined. Please set NEXT_PUBLIC_SUPABASE_KEY in your environment variables.')
}
const supabase = createClient(supabaseUrl, supabaseKey || '')

const uploadFileSupabase = async (file: File, path: string): Promise<string> => {
  try {
    const { data, error } = await supabase.storage
      .from('note')
      .upload(path, file);

    if (error || !data) {
      throw new Error(`Error uploading file: ${error?.message}`);
    }

    const { data: publicData, error: publicError } = supabase.storage
      .from('note')
      .getPublicUrl(path);

    if (publicError || !publicData?.publicUrl) {
      throw new Error('Failed to get public URL for the uploaded file');
    }

    return publicData.publicUrl;
  } catch (err) {
    console.error('Error uploading file to Supabase:', err);
    throw err;
  }
};

const getFileUrlSupabase = (path: string) => {
    const { publicURL, error } = supabase.storage
        .from('note')
        .getPublicUrl(path)

    if (error) {
        throw new Error(`Error getting file URL: ${error.message}`)
    }

    return publicURL
}

export { supabase, uploadFileSupabase, getFileUrlSupabase }