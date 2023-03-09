import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

export function createUser({first, last}: {first: string, last: string}) {
    return client.user.create({
        data: {
            firstName: first,
            lastName: last,
            email: `${first.toLowerCase()}.${last.toLowerCase()}@example.com`,
            password: "Secr3t!",
        },
    });
}
