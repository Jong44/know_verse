import React, { use, useEffect, useRef, useState } from 'react'
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { AddBlockButton, DragHandleButton, SideMenu, SideMenuController, useBlockNoteEditor, useComponentsContext, useCreateBlockNote } from "@blocknote/react";
import { TrashIcon } from 'lucide-react';
import { HideBlockButton } from './hide-block-button';
import { PartialBlock } from '@blocknote/core';
import { debounce, set } from 'lodash';
import { getFileUrlSupabase, uploadFileSupabase } from '@/lib/supabase';

interface Document {
  id: string | undefined;
  initialContent: PartialBlock[];
  onChange?: (blocks: PartialBlock[]) => void;
}

const Editor: React.FC<Document> = ({
  id,
  initialContent,
  onChange,
}) => {
  const editor = useCreateBlockNote({
    initialContent: initialContent.length > 0 ? initialContent : [
      {
        type: "paragraph",
        content: "Start writing here...",
      },
    ],
    uploadFile,
  })

  const [blocks, setBlocks] = useState<PartialBlock[]>(initialContent);

  async function uploadFile(file: File) {
    if (!file) {
      throw new Error("No file provided");
    }

    const publicUrl = await uploadFileSupabase(file, `note/notes-${file.name}`);
    console.log("File uploaded successfully:", publicUrl);
    return publicUrl;
  }

  const onChanges = (blocks: PartialBlock[]) => {
    setBlocks(blocks);
    if (onChange) {
      onChange(blocks);
    }
  }

  const handleSave = async () => {
    onChanges(editor.document);
    const blocks = editor.document.map((block) => ({
      ...block,
      status: block.status || "visible",
    }));

    const formatted = blocks.map((block, index) => ({
      type: block.type,
      order: index,
      status: block.status || "visible",  // default
      content_json: block,
    }));

    try {
      const res = await fetch(`/api/tutorial/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formatted),
      });

      if (!res.ok) {
        throw new Error("Failed to save");
      }
      console.log("Saved to server");
    } catch (err) {
      console.error("Save error:", err);
    }
  };



  const debouncedSave = useRef(debounce(handleSave, 1000)).current;

  return (
    <BlockNoteView editor={editor} theme={"light"} className='max-w-[1150px]' onChange={debouncedSave}>
      <SideMenuController
        sideMenu={(props) => (
          <SideMenu {...props} >
            <HideBlockButton {...props} />
            <AddBlockButton {...props} />
            <DragHandleButton {...props} />
          </SideMenu>
        )
        }
      />
    </BlockNoteView>
  )
}

export default Editor