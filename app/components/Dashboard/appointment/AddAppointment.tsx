"use client";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface AddAppointmentProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const AddAppointment = ({ open, setOpen }: AddAppointmentProps) => {
  return (
    <Drawer direction="right" open={open} onOpenChange={setOpen}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Book Appointment</DrawerTitle>
          <DrawerDescription>
            Book your doctor appointment by filling up the form.
          </DrawerDescription>
        </DrawerHeader>
        <div className="no-scrollbar overflow-y-auto px-7">
          {/*  */}
          <div className="border rounded-md p-3 flex items-center gap-5">
            <div className="w-12 h-12 rounded-full bg-amber-700 text-white text-center">
              K
            </div>
            <div>
              <h3 className="text-lg font-semibold">Koshish Khadka</h3>
              <p className="text-[12px] font-light">Male</p>
            </div>
          </div>
          {/* Forms */}
          <form action="" className="mt-6 flex flex-col gap-8">
            <Field>
              <FieldLabel htmlFor="checkout-exp-month-ts6">
                Appointment Type
              </FieldLabel>
              <Select defaultValue="">
                <SelectTrigger id="checkout-exp-month-ts6">
                  <SelectValue placeholder="Select appointment type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="01">01</SelectItem>
                    <SelectItem value="02">02</SelectItem>
                    <SelectItem value="03">03</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel htmlFor="checkout-exp-month-ts6">
                Physician
              </FieldLabel>
              <Select defaultValue="">
                <SelectTrigger id="checkout-exp-month-ts6">
                  <SelectValue placeholder="Select an Physician" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="01">01</SelectItem>
                    <SelectItem value="02">02</SelectItem>
                    <SelectItem value="03">03</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
            <div className="grid grid-cols-2 gap-4">
              <Field>
                <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                  Date
                </FieldLabel>
                <Input
                  type="date"
                  id="checkout-7j9-card-name-43j"
                  placeholder="Evil Rabbit"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                  Time
                </FieldLabel>
                <Input
                  type="time"
                  id="checkout-7j9-card-name-43j"
                  placeholder="Evil Rabbit"
                  required
                />
              </Field>
            </div>
            <Field>
              <FieldLabel htmlFor="checkout-7j9-card-name-43j">Note</FieldLabel>
              <Textarea placeholder="Type your message here." />
            </Field>
          </form>
        </div>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default AddAppointment;
