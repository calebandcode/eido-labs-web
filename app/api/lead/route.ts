import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DEMO_APK_URL =
  "https://github.com/calebandcode/ajodigital-demo/releases/download/v0.1.0-demo/Ajo-v0.1.apk";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const contact = (body.contact || "").trim();

    if (!contact) {
      return NextResponse.json(
        { error: "Contact (email or phone) is required" },
        { status: 400 }
      );
    }

    const leadEntry = {
      contact,
      timestamp: new Date().toISOString(),
      userAgent: req.headers.get("user-agent") || "unknown",
      ip: req.headers.get("x-forwarded-for") || "unknown",
    };

    // 1. Local backup to data/leads.json so NO lead is ever lost
    try {
      const dataDir = path.join(process.cwd(), "data");
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }

      const filePath = path.join(dataDir, "leads.json");
      let currentLeads = [];
      if (fs.existsSync(filePath)) {
        try {
          const raw = fs.readFileSync(filePath, "utf-8");
          currentLeads = JSON.parse(raw);
        } catch {
          currentLeads = [];
        }
      }
      currentLeads.push(leadEntry);
      fs.writeFileSync(filePath, JSON.stringify(currentLeads, null, 2), "utf-8");
    } catch (fsErr) {
      console.error("[Leads File Error]:", fsErr);
    }

    // 2. Forward to Google Sheets Webhook if configured in .env.local
    const googleSheetWebhook = process.env.GOOGLE_SHEET_WEBHOOK_URL;
    if (googleSheetWebhook && googleSheetWebhook.startsWith("http")) {
      try {
        await fetch(googleSheetWebhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contact: leadEntry.contact,
            timestamp: leadEntry.timestamp,
            source: "Ajo Digital Website Demo Form",
          }),
        });
      } catch (sheetErr) {
        console.error("[Google Sheet Sync Error]:", sheetErr);
      }
    }

    return NextResponse.json({
      success: true,
      downloadUrl: DEMO_APK_URL,
    });
  } catch (error) {
    console.error("[API Lead Error]:", error);
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      { error: "Failed to process lead", details: message },
      { status: 500 }
    );
  }
}

