import Link from "next/link";
import Image from "next/image";
import { PenTool, Image as ImageIcon, Video } from "lucide-react";
import { ConnectButton } from "./ConnectButton";

export function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center gap-4">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="relative w-10 h-10 flex items-center justify-center bg-white rounded-lg p-1 transition-transform group-hover:scale-105">
                                <Image src="/icon.png" alt="Chainvas Logo" width={32} height={32} className="object-contain" />
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">
                                Chainvas
                            </span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <NavLink href="/text" icon={<PenTool className="w-4 h-4" />} text="Text Editor" />
                        <NavLink href="/photo" icon={<ImageIcon className="w-4 h-4" />} text="Photo Editor" />
                        <NavLink href="/video" icon={<Video className="w-4 h-4" />} text="Video Editor" />
                    </div>

                    <div className="flex items-center gap-4">
                        <ConnectButton />
                    </div>
                </div>
            </div>
        </nav>
    );
}

function NavLink({ href, icon, text }: { href: string; icon: React.ReactNode; text: string }) {
    return (
        <Link
            href={href}
            className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
        >
            <span className="text-primary">{icon}</span>
            {text}
        </Link>
    );
}
