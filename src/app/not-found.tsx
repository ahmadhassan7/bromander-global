import Link from 'next/link';

export default function NotFound() {
  return (
    <html>
      <body>
        <div className="min-h-screen bg-black text-white flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Not Found</h2>
            <p className="text-gray-400 mb-8">Could not find requested resource</p>
            <Link href="/en" className="text-blue-500 hover:text-blue-400 transition-colors">
              Return Home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}