import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;

if (!uri) throw new Error("تنظیمات دیتابیس را وارد کنید.");

let isConnected = false;

export async function connectedToDB() {
  if (isConnected) return console.log("قبلا متصل شده");

  try {
    await mongoose.connect(uri, { dbName: "main" });
    isConnected = true;
    console.log("اتصال موفق به دیتابیس");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}