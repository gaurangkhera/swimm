"use client";
import { DialogDescription } from "@radix-ui/react-dialog";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
  DialogContent,
  DialogFooter,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { useCurrentUser } from "@/hooks/use-current-user";
import { useState } from "react";
import axios from 'axios'
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const AddPodButton = () => {
  const [serial, setSerial] = useState('');
  const [name, setName] = useState('');
  const [submitting, isSubmitting] = useState(false);
  const currentUser = useCurrentUser();
  const router = useRouter();

  if (!currentUser) return null;

  const sendSerial = async () => {
    isSubmitting(true);
    const res = await axios.post('/api/addPod', {
      'serial': serial,
      'name': name,
      'user': currentUser.id
    })
    if (res.status === 200) {
      router.push(`/pods/${res.data}`);
      toast.success('Pod added successfully.');
    }
    else {
      toast.error('Something went wrong.');
    }
    isSubmitting(false);
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"lg"} className="gap-1.5">
          Add pod
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add pod</DialogTitle>
          <DialogDescription className="text-sm text-zinc-400 mt-4">
            Use your pod's serial number.
          </DialogDescription>
          <Input placeholder="Serial number" autoFocus className="mt-4" onChange={(e) => setSerial(e.target.value)} required/>
          <Input placeholder="Pod name" className="mt-4" onChange={(e) => setName(e.target.value)} required/>
        </DialogHeader>
        <DialogFooter>
            <Button onClick={() => sendSerial()} disabled={submitting}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddPodButton;
