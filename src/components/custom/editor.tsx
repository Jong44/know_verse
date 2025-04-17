import React, { use, useEffect, useRef } from 'react'
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { AddBlockButton, DragHandleButton, SideMenu, SideMenuController, useBlockNoteEditor, useComponentsContext, useCreateBlockNote } from "@blocknote/react";
import { TrashIcon } from 'lucide-react';
import { HideBlockButton } from './hide-block-button';
import { DocumentService } from '@/services/document-service';

const Editor = () => {

  const editor = useCreateBlockNote({
  });

  const handleSave = () => {
    const note = {
      document: editor.document,
    }
    const newDetailDocument = note.document.map((block) => {
      return {
        id: block.id,
        type: block.type,
        content: block.content[0]?.text,
        children: block.children,
      }
    }
    );

    DocumentService().saveDetailDocument(newDetailDocument);

  }
  return (
    <BlockNoteView editor={editor} theme={"light"} className='max-w-[1150px]' onChange={handleSave}>
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