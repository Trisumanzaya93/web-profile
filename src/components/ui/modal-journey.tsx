import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog"

type ModalProps = {
  open: boolean;
  setter: (value: boolean) => void;
  content: object | null;
};

export default function ModalJourney(props: ModalProps) {
  return (
    <Dialog open={props.open}>
      <DialogOverlay className="opacity-0 w-full" onClick={() => props.setter(false)}>
        <DialogContent className="[&>button:last-child]:hidden font-geist w-[90%] md:w-1/2 max-w-none overflow-scroll rounded-xl max-h-[90%]">
        <DialogTitle className="text-3xl font-bold mb-5">My Journey</DialogTitle>
          <DialogDescription className="px-5">
            {props.content && Array.isArray(props.content) && props.content.map((item, index) => (
              <li key={index} className=" text-md md:text-lg">
                {item}
              </li>
            ))}
          </DialogDescription>
        </DialogContent>

      </DialogOverlay>
    </Dialog>
  )
}
