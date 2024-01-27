import { db } from "@/lib/db";

const page = async ({ params }: { params: { id: string }}) => {
    const pod = await db.pod.findFirst({
        where: {
            id: params.id
        }
    })
    if (!pod) return null;
    return (
        <div>
            
        </div>
    )
}

export default page;