// app/api/print/route.ts
import { NextResponse } from "next/server";
import escpos from "escpos";

// pastikan escpos pakai USB
escpos.USB = require("escpos-usb");
import escposBluetooth from "escpos-bluetooth";

escpos.Bluetooth = escposBluetooth;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { text } = body;

    // deteksi printer USB
    const address = "00:11:22:33:44:55"; // MAC address printer

    const device = new escpos.Bluetooth(address);
    // const device = new escpos.USB();
    console.log(device,'asdas');
    
    const options = { encoding: "GB18030" }; // support charset China/UTF-8
    const printer = new escpos.Printer(device, options);

    device.open((err: any) => {
      if (err) {
        console.error("Failed to open USB printer:", err);
        return;
      }

      printer
        .align("ct")
        .style("b")
        .size(1, 1)
        .text(text)
        .cut()
        .close();
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
