import { useBlockMetaStore } from "@/store/hidden-block";
import {
  SideMenuProps,
  useBlockNoteEditor,
  useComponentsContext,
} from "@blocknote/react";
import { Eye, EyeIcon, EyeOff } from "lucide-react";
import { MdDelete } from "react-icons/md";

export function HideBlockButton(props: SideMenuProps) {
  const editor = useBlockNoteEditor();




  const toggleVisibility = async (block: any) => {
    const { meta, setStatus } = useBlockMetaStore.getState();

    const currentStatus = meta[block.id]?.status || "visible";
    const newStatus = currentStatus === "hidden" ? "visible" : "hidden";
    const detailId = meta[block.id]?.detailId;

    setStatus(block.id, newStatus);

    if (detailId) {
      await fetch(`/api/tutorial/detail/${detailId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
    }
  };



  const Components = useComponentsContext()!;

  return (

    <Components.SideMenu.Button
      label={
        useBlockMetaStore.getState().meta[props.block.id]?.status === "hidden"
          ? "Show block"
          : "Hide block"
      }
      icon={
        useBlockMetaStore.getState().meta[props.block.id]?.status === "hidden" ? (
          <EyeOff
            size={24}
            className="text-red-500 hover:text-red-700"
            onClick={() => {
              const block = editor.getBlock(props.block.id)!;
              toggleVisibility(block);
            }}
          />
        ) : (
          <Eye
            size={24}
            className="text-green-500 hover:text-green-700"
            onClick={() => {
              const block = editor.getBlock(props.block.id)!;
              toggleVisibility(block);
            }}
          />
        )
      }
    />
  );
}
