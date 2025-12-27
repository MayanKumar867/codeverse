import Link from "next/link";
import React from "react";

const page = () => {
    return (
        <div className="min-h-screen w-full bg-gradient-to-b from-black via-zinc-900 to-black text-white px-6 py-20">

            {/* Hero Section */}
            <section className="max-w-5xl mx-auto text-center mb-20">
                <h1 className="font-game text-5xl md:text-6xl mb-6 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                    About This Platform
                </h1>

                <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
                    Learn coding in a fun, interactive, and game-inspired way.
                    No boring theory — just clear concepts, real code, and instant results.
                </p>
            </section>

            {/* What Makes Us Different */}
            <section className="max-w-6xl mx-auto mb-24">
                <h2 className="font-game text-3xl text-center mb-12">
                    Why This Platform Exists
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="rounded-2xl border border-zinc-700 bg-zinc-900/60 p-6 backdrop-blur-md">
                        <h3 className="text-xl font-semibold mb-3">🎯 Learn by Doing</h3>
                        <p className="text-zinc-300">
                            Every concept comes with real code examples and hands-on practice
                            so you actually understand what you’re learning.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-zinc-700 bg-zinc-900/60 p-6 backdrop-blur-md">
                        <h3 className="text-xl font-semibold mb-3">🕹️ Game-Like Experience</h3>
                        <p className="text-zinc-300">
                            Clean UI, smooth flow, and a fun learning experience inspired by
                            games — learning should never feel boring.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-zinc-700 bg-zinc-900/60 p-6 backdrop-blur-md">
                        <h3 className="text-xl font-semibold mb-3">⚡ Beginner Friendly</h3>
                        <p className="text-zinc-300">
                            Concepts are explained in simple language so even absolute beginners
                            can start confidently.
                        </p>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="max-w-5xl mx-auto mb-24">
                <h2 className="font-game text-3xl text-center mb-10">
                    How It Works
                </h2>

                <div className="flex flex-col items-center gap-6 text-zinc-300 text-base sm:text-lg md:text-xl">

  {/* Step 1 */}
  <div className="grid grid-cols-[40px_40px_1fr] items-center max-w-xl w-full">
    <span className="text-right">①</span>
    <span className="text-center">🎯</span>
    <p className="text-center sm:text-left">
      Choose a course and start from the basics
    </p>
  </div>

  {/* Step 2 */}
  <div className="grid grid-cols-[40px_40px_1fr] items-center max-w-xl w-full">
    <span className="text-right">②</span>
    <span className="text-center">📘</span>
    <p className="text-center sm:text-left">
      Read short, clear explanations
    </p>
  </div>

  {/* Step 3 */}
  <div className="grid grid-cols-[40px_40px_1fr] items-center max-w-xl w-full">
    <span className="text-right">③</span>
    <span className="text-center">💻</span>
    <p className="text-center sm:text-left">
      See code side-by-side with concepts
    </p>
  </div>

  {/* Step 4 */}
  <div className="grid grid-cols-[40px_40px_1fr] items-center max-w-xl w-full">
    <span className="text-right">④</span>
    <span className="text-center">⚡</span>
    <p className="text-center sm:text-left">
      Run code and get instant output
    </p>
  </div>

  {/* Step 5 */}
  <div className="grid grid-cols-[40px_40px_1fr] items-center max-w-xl w-full">
    <span className="text-right">⑤</span>
    <span className="text-center">🚀</span>
    <p className="text-center sm:text-left">
      Upgrade anytime for unlimited access
    </p>
  </div>

</div>



            </section>

            {/* Vision Section */}
            <section className="max-w-4xl mx-auto text-center mb-24">
                <h2 className="font-game text-3xl mb-6">
                    Our Vision
                </h2>

                <p className="text-zinc-300 text-lg leading-relaxed">
                    The goal is simple — make coding easy to understand, enjoyable to learn,
                    and practical to apply.
                    This platform is built for learners who want clarity, not confusion.
                </p>
            </section>

            {/* CTA */}
            <section className="text-center">
                <h2 className="font-game text-3xl mb-6">
                    Ready to Start Learning?
                </h2>

                <p className="text-zinc-300 mb-8">
                    Join now and unlock unlimited access to all courses and features.
                </p>

                <Link href={'/sign-in'}>
                    <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-black font-semibold hover:scale-105 transition">
                        Get Started
                    </button>
                </Link>
            </section>

        </div>
    );
};

export default page;
