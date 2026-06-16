import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // TODO: integrar com Supabase ou serviço de e-mail (Resend, etc.)
    console.log("[Héstia] Nova mensagem:", body);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Erro ao processar" }, { status: 500 });
  }
}
