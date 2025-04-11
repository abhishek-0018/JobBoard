const Footer = () => {
    return (
        <footer className="bg-violet-950 text-white py-6 mt-10 w-[100%]">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between">
                {/* Column 1 - Branding */}
                <div className="mb-6 md:mb-0">
                    <h2 className="text-2xl font-bold">JobVenture Hub</h2>
                    <p className="text-sm mt-2">Find the job that fits your life!</p>
                </div>

                {/* Column 3 - Contact */}
                <div className="mb-6 md:mb-0">
                    <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                    <p className="text-sm">📍 I-278/8 Gujaini, Kanput</p>
                    <p className="text-sm">📧 abhisheksingh18017@gmail.com</p>
                    <p className="text-sm">📞 +91 99367 30698</p>
                </div>

                {/* Column 4 - Social Media */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-blue-400">🔵 LinkedIn</a>
                        <a href="#" className="hover:text-blue-600">📘 Facebook</a>
                        <a href="#" className="hover:text-blue-300">🐦 Twitter</a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-sm mt-6 border-t border-gray-700 pt-4">
                &copy; {new Date().getFullYear()} JobVenture Hub. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
