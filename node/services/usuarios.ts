import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function createUser(name: string, email: string) {
  const user = await prisma.user.create({
    data: {
      name,
      email,
    },
  });

  return user;
}

export async function createUserAndContent() {
  const user = await prisma.user.create({
    data: {
      name: "Nicolas Bravo",
      email: "nicolas@guerrero.gob.mx",
      posts: {
        create: {
          title: "Noticias de Nicolas",
          content: "Contenido de noticia",
        },
      },
    },
  });

  console.log(user);
}

export async function createPost() {
  await prisma.post.createMany({
    data: [
      {
        title: "Noticia 1",
        authorId: 1,
      },
      {
        title: "Noticia 2",
        authorId: 1,
      },
    ],
  });
}

export async function getUsuarios() {
  const usuarios = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });

  return usuarios;
}

export async function getUsuario(id: number) {
    const usuarios = await prisma.user.findUnique({
        where: {
            id,
        },
        include: {
            posts: true,
        },
    });
  
    return usuarios;
  }

export async function update(data: {}, id: number) {
  await prisma.user.update({
    data,
    where: {
      id,
    },
  });
}

export async function deleteUser(id: number) {
  await prisma.user.delete({
    where: { id },
    include: {
        posts: true,
    }
  });
}
