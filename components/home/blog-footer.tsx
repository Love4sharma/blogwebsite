import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

export function BlogFooter() {
  return (
    <footer className="border-t border-gray-700/20 dark:border-gray-300/10 bg-gradient-to-br from-slate-900 to-gray-800 dark:from-neutral-900 dark:to-zinc-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-72 h-72 bg-purple-500 opacity-10 rounded-full blur-3xl top-[-60px] left-[-60px]"></div>
        <div className="absolute w-96 h-96 bg-indigo-500 opacity-10 rounded-full blur-3xl bottom-[-100px] right-[-100px]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 lg:grid-cols-5">
          {/* Branding */}
          <div className="md:col-span-2 lg:col-span-2">
            <h2 className="text-3xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
                Byte
              </span>
              <span className="text-white">Code</span>
            </h2>
            <p className="mt-4 text-gray-300 max-w-md">
              Where ideas meet innovation. Dive into insightful articles written
              by passionate thinkers and industry experts.
            </p>

            <div className="mt-6 flex gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-white/5 hover:bg-white/10 transition-all hover:scale-110"
              >
                <Twitter className="h-6 w-6 text-white hover:text-blue-400" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-white/5 hover:bg-white/10 transition-all hover:scale-110"
              >
                <Github className="h-6 w-6 text-white hover:text-gray-300" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-white/5 hover:bg-white/10 transition-all hover:scale-110"
              >
                <Linkedin className="h-6 w-6 text-white hover:text-blue-500" />
              </Button>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-lg font-semibold text-white">Explore</h3>
            <ul className="mt-4 space-y-2">
              {["All Articles", "Topics", "Authors", "Podcasts"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-all relative after:block after:h-[2px] after:bg-purple-500 after:w-0 hover:after:w-full after:transition-all after:duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-white">Legal</h3>
            <ul className="mt-4 space-y-2">
              {[
                "Privacy Policy",
                "Terms of Service",
                "Cookie Policy",
                "Licenses",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-all relative after:block after:h-[2px] after:bg-indigo-500 after:w-0 hover:after:w-full after:transition-all after:duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-2 lg:col-span-2 bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
            <form className="flex flex-col gap-4 mt-4">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10 pr-4 py-6 rounded-lg border border-gray-500/30 bg-white/10 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400"
                />
                <Mail className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-700/30 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} ByteCode. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
