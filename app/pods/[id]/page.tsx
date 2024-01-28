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
            <main className="mx-auto max-w-7xl md:p-10">
                <div className="sm:pt-10 lg:pt-0 flex flex-col items-start justify-between gap-4 border-b pb-5 sm:flex-row sm:items-center sm:gap-0">
                    <h1 className="font-bold text-4xl ">
                        {pod.name}
                    </h1>
                </div>
            </main>
        </div>
    )
}

export default page;