import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-footer-bg border-t border-input/20 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-white">DevShelf</h3>
                        <p className="text-sm text-footer-secondary leading-relaxed max-w-xs">
                            The premier platform for discovering and showcasing developer-built
                            tools, libraries, and SaaS products.
                        </p>
                    </div>

                    {/* Links Column 1 */}
                    <div>
                        <h4 className="font-semibold text-white mb-6">Platform</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="#"
                                    className="text-sm text-footer-secondary hover:text-white transition-colors"
                                >
                                    Explore Products
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-sm text-footer-secondary hover:text-white transition-colors"
                                >
                                    Submit Project
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-sm text-footer-secondary hover:text-white transition-colors"
                                >
                                    Featured Today
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div>
                        <h4 className="font-semibold text-white mb-6">Legal</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="#"
                                    className="text-sm text-footer-secondary hover:text-white transition-colors"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-sm text-footer-secondary hover:text-white transition-colors"
                                >
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-sm text-footer-secondary hover:text-white transition-colors"
                                >
                                    Cookie Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-input/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-footer-secondary">
                        &copy; {new Date().getFullYear()} DevShelf. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        {/* Social placeholders */}
                        <div className="w-5 h-5 bg-footer-secondary/20 rounded-full" />
                        <div className="w-5 h-5 bg-footer-secondary/20 rounded-full" />
                        <div className="w-5 h-5 bg-footer-secondary/20 rounded-full" />
                    </div>
                </div>
            </div>
        </footer>
    );
}
