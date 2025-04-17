import { BlockNoteView } from '@blocknote/mantine'
import { AddBlockButton, DragHandleButton, SideMenu, SideMenuController, useCreateBlockNote } from '@blocknote/react';
import React, { use, useEffect, useMemo, useState } from 'react'
import { HideBlockButton } from './hide-block-button';
import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";
import { BlockNoteEditor, PartialBlock } from '@blocknote/core';
import { DocumentService } from '@/services/document-service';



const ViewBlock = () => {
  const [initialContent, setInitialContent] = useState<
    PartialBlock[] | undefined | "loading"
  >("loading");

  useEffect(() => {
    DocumentService().getDetailDocument().then((content) => {
      setInitialContent(content);
    });
  }, []);

  const editor = useMemo(() => {
    if (initialContent === "loading") {
      return undefined;
    }
    return BlockNoteEditor.create({ initialContent });
  }, [initialContent]);
 
  if (editor === undefined) {
    return "Loading content...";
  }
  return (
    <BlockNoteView editor={editor} theme={"light"} className='max-w-[1150px]' formattingToolbar={false} editable={false}>
    </BlockNoteView>
  )
}

export default ViewBlock