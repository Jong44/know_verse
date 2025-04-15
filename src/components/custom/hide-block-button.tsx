import {
    SideMenuProps,
    useBlockNoteEditor,
    useComponentsContext,
  } from "@blocknote/react";
  import { EyeIcon } from "lucide-react";
  import useHiddenBlock from "@/store/hidden-block";
  import { MdDelete } from "react-icons/md";
   
  export function HideBlockButton(props: SideMenuProps) {
    const {hiddenBlocks, updateItems} = useHiddenBlock();
    const editor = useBlockNoteEditor();
   
    const Components = useComponentsContext()!;
   
    return (
      <Components.SideMenu.Button
        label="Hide block"
        icon={
          <EyeIcon
            size={24}
            onClick={() => {
                const block = editor.getBlock(props.block.id)!;
                updateItems(block.id);
                console.log(hiddenBlocks)
            }}

          />
        }
      />
    );
  }
   