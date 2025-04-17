import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,

    DropdownMenuSeparator,
    
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import MoreIcon from "../icons/more-icon"
import Link from "next/link"

interface DropdownDocumentProps {
    finishedUrl?: string
    presentationUrl?: string
}

const DropdownDocument: React.FC<DropdownDocumentProps> = ({
    finishedUrl,
    presentationUrl,
}) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="active:bg-transparent"> <MoreIcon /> </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuGroup>
                    <Link href={presentationUrl ?? "/example"}>
                        <DropdownMenuItem>
                            Presentation
                        </DropdownMenuItem>
                    </Link>
                    <Link href={finishedUrl ?? "/example"}>
                    <DropdownMenuItem>
                        Finished
                    </DropdownMenuItem>
                    </Link>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                       Copy Link Presentation
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                       Copy Link Finished
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>Export to PDF</DropdownMenuItem>
                    <DropdownMenuSeparator />
                </DropdownMenuGroup>
                <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default DropdownDocument