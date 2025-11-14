import { connectedToDB } from "@/lib/mongodb";
import Product from "../../../../models/Product";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    await connectedToDB();
    const { id } = params;
    const product = await Product.findOne({ _id: id });
    return NextResponse.json(product, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
