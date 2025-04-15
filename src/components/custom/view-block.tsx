import { BlockNoteView } from '@blocknote/mantine'
import { AddBlockButton, DragHandleButton, SideMenu, SideMenuController, useCreateBlockNote } from '@blocknote/react';
import React from 'react'
import { HideBlockButton } from './hide-block-button';
import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";

const ViewBlock = () => {
      const editor = useCreateBlockNote({
        initialContent: [
            {
              "id": "0c4087d4-887a-4bbc-82ca-7ebc2fb8a1c4",
              "type": "heading",
              "props": {
                "textColor": "default",
                "backgroundColor": "default",
                "textAlignment": "left",
                "level": 1
              },
              "content": [
                {
                  "type": "text",
                  "text": "asad",
                  "styles": {}
                }
              ],
              "children": []
            },
            {
              "id": "7ec3a04b-30c1-4aa6-adf5-3171f104798f",
              "type": "paragraph",
              "props": {
                "textColor": "default",
                "backgroundColor": "default",
                "textAlignment": "left"
              },
              "content": [],
              "children": []
            }
          ]
      });
  return (
    <BlockNoteView editor={editor} theme={"light"} className='max-w-[1150px]' formattingToolbar={false} editable={false}> 
        </BlockNoteView>
  )
}

export default ViewBlock