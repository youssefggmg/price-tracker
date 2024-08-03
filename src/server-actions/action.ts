"use server";
import { PrismaClient } from '@prisma/client';
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

type UserData = {
    name: string;
    email: string;
    password: string;
};
type user = {
    email: string;
    password: string;
};


export const adduser = async (userData: UserData) => {
    try {
        const { name, email, password } = userData;
        const existingUser = await prisma.users.findFirst({
            where: { email }
        });
        if (existingUser) {
            return { success: false, message: "There is a user with the same email in the database" };
        }
        await prisma.users.create({
            data: {
                username: name,
                email,
                password_hash: password
            }
        });
        return { success: true, message: "User created successfully" };
    } catch (error) {
        console.error(error);
        return { success: false, message: "An error occurred while creating the user" };
    }
};

export const logUser = async (user: user) => {
    try {
        const { email, password } = user;
        const existingUser = await prisma.users.findFirst({
            where: {
                email,
                password_hash: password
            }
        })
        if (!existingUser) {
            return { success: false, message: "User not found" };
        } else {
            return { success: true, message: "User found" };
        }
    } catch (error) {
        console.error(error);
        return { success: false, message: "An error occurred while creating the user" };
    }

}
