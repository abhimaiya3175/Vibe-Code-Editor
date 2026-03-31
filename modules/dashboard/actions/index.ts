"use server";

import { db } from "@/lib/db";
import { currentUser } from "@/modules/auth/actions";
import { revalidatePath } from "next/cache";

export const toggleStarMarked = async (
  playgroundId: string,
  isChecked: boolean
) => {
  const user = await currentUser();
  const userId = user?.id;
  if (!userId) {
    throw new Error("User Id is Required");
  }

  try {
    if (isChecked) {
      await db.starMark.create({
        data: {
          userId: userId!,
          playgroundId,
          isMarked: isChecked,
        },
      });
    } else {
        await db.starMark.delete({
        where: {
          userId_playgroundId: {
            userId,
            playgroundId: playgroundId,

          },
        },
      });
    }

     revalidatePath("/dashboard");
    return { success: true, isMarked: isChecked };
  } catch (error) {
       console.error("Error updating problem:", error);
    return { success: false, error: "Failed to update problem" };
  }
};

export const getAllPlaygroundForUser = async () => {
  const user = await currentUser();

  try {
    const playground = await db.playground.findMany({
      where: {
        userId: user?.id,
      },
      include: {
        user: true,
        Starmark:{
            where:{
                userId:user?.id!
            },
            select:{
                isMarked:true
            }
        }
      },
    });

    return playground;
  } catch (error) {
    console.log(error);
  }
};

export const createPlayground = async (data: {
  title: string;
  template: "REACT" | "NEXTJS" | "EXPRESS" | "VUE" | "HONO" | "ANGULAR";
  description?: string;
}) => {
  const user = await currentUser();

  const { template, title, description } = data;

  try {
    const playground = await db.playground.create({
      data: {
        title: title,
        description: description,
        template: template,
        userId: user?.id!,
      },
    });

    return playground;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProjectById = async (id: string) => {
  try {
    await db.playground.delete({
      where: {
        id,
      },
    });
    revalidatePath("/dashboard");
  } catch (error) {
    console.log(error);
  }
};

export const editProjectById = async (
  id: string,
  data: { title: string; description: string }
) => {
  try {
    await db.playground.update({
      where: {
        id,
      },
      data: data,
    });
    revalidatePath("/dashboard");
  } catch (error) {
    console.log(error);
  }
};

export const duplicateProjectById = async (id: string) => {
  try {
    const originalPlayground = await db.playground.findUnique({
      where: { id },
      include: { templateFiles: true }
    });
    if (!originalPlayground) {
      throw new Error("Original playground not found");
    }

    const duplicatedPlayground = await db.playground.create({
      data: {
        title: `${originalPlayground.title} (Copy)`,
        description: originalPlayground.description,
        template: originalPlayground.template,
        userId: originalPlayground.userId,
        templateFiles: {
           create: originalPlayground.templateFiles.map(file => ({
              content: file.content as any
           }))
        }
      },
    });

    revalidatePath("/dashboard");
    return duplicatedPlayground;
  } catch (error) {
    console.error("Error duplicating project:", error);
  }
};

export const togglePlaygroundVisibility = async (id: string, isPublic: boolean) => {
  const user = await currentUser();
  if (!user || !user.id) throw new Error("Unauthorized");

  try {
    const updated = await db.playground.update({
      where: { id, userId: user.id },
      data: { isPublic }
    });
    revalidatePath("/dashboard");
    revalidatePath("/playgrounds");
    return { success: true, isPublic: updated.isPublic };
  } catch (error) {
    console.error("Error toggling playground visibility:", error);
    return { success: false, error: "Failed to update visibility" };
  }
};

export const getPublicPlaygrounds = async () => {
  try {
    const playgrounds = await db.playground.findMany({
      where: {
        isPublic: true,
      },
      include: {
        user: true,
        Starmark: {
          select: { isMarked: true }
        }
      },
      orderBy: {
        createdAt: 'desc',
      }
    });
    return playgrounds;
  } catch (error) {
    console.error("Error fetching public playgrounds:", error);
    return [];
  }
};

export const forkPublicProject = async (id: string) => {
  const user = await currentUser();
  if (!user || !user.id) throw new Error("Unauthorized");

  try {
    const originalPlayground = await db.playground.findUnique({
      where: { id, isPublic: true },
      include: { templateFiles: true }
    });
    
    if (!originalPlayground) {
      throw new Error("Public playground not found");
    }

    const newPlayground = await db.playground.create({
      data: {
        title: `${originalPlayground.title} (Forked)`,
        description: originalPlayground.description,
        template: originalPlayground.template,
        userId: user.id,
        isPublic: false,
        templateFiles: {
           create: originalPlayground.templateFiles.map(file => ({
              content: file.content as any
           }))
        }
      }
    });

    revalidatePath("/dashboard");
    revalidatePath("/playgrounds");
    return newPlayground;
  } catch (error) {
    console.error("Error forking project:", error);
  }
};
