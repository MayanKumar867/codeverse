"use client";

import React from "react";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";
import { toast } from "sonner";

export default function Page() {
  const phone = "6299751356";
  const email = "mayankumar867@gmail.com";
  const whatsappLink = `https://wa.me/91${phone}`;

  const handleToast = (msg: string) => {
    toast.success(msg);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-zinc-900 to-black text-white px-6 py-20">

      {/* Header */}
      <section className="max-w-4xl mx-auto text-center mb-20">
        <h1 className="font-game text-5xl md:text-6xl mb-6 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          Support
        </h1>
        <p className="text-lg text-zinc-300">
          Reach us via call, WhatsApp, or email. We’re here to help.
        </p>
      </section>

      {/* Contact Cards */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 mb-24">

        {/* Phone */}
        <a
          href={`tel:${phone}`}
          onClick={() => handleToast("Calling support…")}
          className="rounded-2xl border border-zinc-700 bg-zinc-900/60 p-6 text-center cursor-pointer
          hover:border-pink-500 hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] transition"
        >
          <Phone className="mx-auto mb-4 text-pink-400" size={36} />
          <h3 className="text-xl font-semibold mb-2">Call Us</h3>
          <p>+91 {phone}</p>
        </a>

        {/* WhatsApp */}
        <a
          href={whatsappLink}
          target="_blank"
          onClick={() => handleToast("Opening WhatsApp…")}
          className="rounded-2xl border border-zinc-700 bg-zinc-900/60 p-6 text-center cursor-pointer
          hover:border-green-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] transition"
        >
          <MessageCircle className="mx-auto mb-4 text-green-400" size={36} />
          <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
          <p>Chat with us</p>
        </a>

        {/* Email */}
        <a
          href={`mailto:${email}`}
          onClick={() => handleToast("Opening email…")}
          className="rounded-2xl border border-zinc-700 bg-zinc-900/60 p-6 text-center cursor-pointer
          hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition"
        >
          <Mail className="mx-auto mb-4 text-purple-400" size={36} />
          <h3 className="text-xl font-semibold mb-2">Email</h3>
          <p>{email}</p>
        </a>
      </section>

      {/* Location */}
      <section className="max-w-3xl mx-auto text-center mb-24">
        <MapPin className="mx-auto mb-4 text-blue-400" size={36} />
        <h2 className="font-game text-3xl mb-4">Location</h2>
        <p className="text-zinc-300">
          India <br /> Online Support Available
        </p>
      </section>

      {/* Floating WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full
        shadow-[0_0_30px_rgba(34,197,94,0.8)] hover:scale-110 transition z-50"
      >
        <MessageCircle className="text-black" size={28} />
      </a>

    </div>
  );
}


