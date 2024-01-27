import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    const { serial, name, user } = await req.json();

    const pod = await db.pod.findFirst({
        where: { 
            serial: serial
         },
    });

        const updatedPod = await db.pod.update({
           where: { serial },
           data: { name, userId: user },
        })

        return new NextResponse(updatedPod.id)
}