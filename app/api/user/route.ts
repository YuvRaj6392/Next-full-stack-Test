import { NextRequest } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function POST(req:NextRequest){
  //extract the body

  //store the body 
  const body= await req.json()

  await prisma.user.create({
    data:{
      username:body.username,
      password:body.password
    }
  })

  console.log(body)

  return Response.json({
    message:"You are logged in"
  })
}



export async function GET() {
  const user = await prisma.user.findFirst({
    where:{
      username:"yuvraj"
    }
  })
  return Response.json({ user })
}