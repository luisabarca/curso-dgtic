import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function createUser() {
    const user = await prisma.user.create({
        data: {
            name: "Vicente Guerrero",
            email: "vicente@guerrero.gob.mx",
        }
    });
}

async function createUserAndContent() {
    const user = await prisma.user.create({
        data: {
            name: "Nicolas Bravo",
            email: "nicolas@guerrero.gob.mx",
            posts: {
                create: {
                    title: "Noticias de Nicolas",
                    content: "Contenido de noticia"
                },
            }
        }
    });

    console.log(user);
}

async function createPost() {
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
        ]
    })
}

async function getUsuarios() {
    const usuarios = await prisma.user.findMany({
        include: {
            posts: true,
        },
    });

    console.log(usuarios);
    console.log(usuarios[0].posts);
}

async function update() {
    await prisma.user.update({
        data: {
            email: "luis@bplux.mx",
        },
        where: {
            id: 1,
        }
    });
}

async function deleteUser() {
    await prisma.user.delete({
        where: {
            id: 4,
        }
    });
}

createUserAndContent();
getUsuarios();
// createPost();
// update();
// deleteUser();