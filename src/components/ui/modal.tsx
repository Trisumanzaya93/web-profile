import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { IoIosWarning } from "react-icons/io";

type ModalProps = {
  open: boolean
};

export default function Modal(props: ModalProps) {
  return (
    <Dialog open={props.open}>
      {/* <DialogTrigger>Open</DialogTrigger> */}
      <DialogOverlay className="bg-black">
        <DialogContent className="[&>button:last-child]:hidden font-mono">
          <DialogTitle>
            <IoIosWarning className="text-yellow-500 text-7xl text-center w-full" />
          </DialogTitle>
          <DialogDescription>
            Please open the website on a desktop for the best experience.
          </DialogDescription>
        </DialogContent>

      </DialogOverlay>
    </Dialog>
  )
}
