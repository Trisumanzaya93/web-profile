'use client';
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog"
import Image from "next/image";

type ModalProps = {
  open: boolean;
  setter: (value: boolean) => void;
  images: string[];
  title: string;
};

export default function ModalProject(props: ModalProps) {
  return (
    <Dialog open={props.open}>
      <DialogOverlay className="opacity-0 w-full" onClick={()=> props.setter(false)} >
        <DialogContent className="[&>button:last-child]:hidden font-geist w-[90%] max-w-none max-h-[90%] overflow-scroll rounded-xl">
          <DialogTitle className="text-3xl font-bold mb-5">{props.title}</DialogTitle>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 lg:px-20 mb-16">
            {props.images && Array.isArray(props.images) && props.images.map((item, index) => (

              <div key={index} className="flex items-center justify-center rounded-xl bg-neutral-100 h-[260px]">
                <Image
                  src={item}
                  alt={item}
                  width={800}
                  height={600}
                  className="max-h-full w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </DialogContent>

      </DialogOverlay>
    </Dialog>
  )
}
