import AddPodButton from "@/components/AddPodButton";
import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";
import Link from "next/link";
import { BadgeCheck, Ghost } from "lucide-react";
import { format } from "date-fns";
import { Plus, Trash, MessageSquare } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const page = async () => {
  const user = await currentUser();

  if(!user) return null;

  const pods = await db.pod.findMany({
    where: {
      userId: user.id
    }
  })

  return (
    <main className='mx-auto max-w-7xl md:p-10'>
      <div className='sm:mt-8 lg:mt-0 flex flex-col items-start justify-between gap-4 border-b pb-5 sm:flex-row sm:items-center sm:gap-0'>
        <h1 className='mb-3 font-bold text-4xl heading'>
          My pods
        </h1>


        <AddPodButton  />
      </div>
      {/* display all user pods */}
      {pods && pods?.length !== 0 ? (
        <ul className='mt-8 my-24 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {pods
            .sort(
              (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
            )
            .map((file:any) =>
             (
              <Card
                key={file.id}
                className='col-span-1 divide-y rounded-lg shadow transition hover:shadow-lg'>
                <Link
                  href={`/pods/${file.id}`}
                  className='flex flex-col gap-2'>
                  <div className='pt-6 px-6 flex w-full items-center justify-between space-x-6'>
                    <div className='h-10 w-10 flex-shrink-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500' />
                    <div className='flex-1 truncate'>
                      <div className='flex items-center space-x-3'>
                        <h3 className='truncate text-lg font-medium text-white'>
                          {file.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>

                <div className='px-6 mt-4 grid grid-cols-3 place-items-center py-2 gap-6 text-xs text-gray-500'>
                  <div className='flex items-center gap-2'>
                    <Plus className='h-4 w-4' />
                    {format(
                      new Date(file.updatedAt),
                      'MMM yyyy'
                    )}
                  </div>

                  <div className='flex items-center gap-2'>
                    <BadgeCheck className='h-4 w-4 animate-pulse' />
                      Connected
                  </div>

                  <Button
                    size='sm'
                    className='w-full'
                    variant='destructive'>

                      <Trash className='h-4 w-4' />
                  </Button>
                </div>
              </Card>
            ))}
        </ul>
      ) : (
        <div className='mt-16 flex flex-col items-center gap-2'>
          <Ghost className='h-16 w-16' />
          <h3 className='font-medium text-xl text-white'>
            No pods found.
          </h3>
        </div>
      )}
    </main>
  );
};

export default page;
