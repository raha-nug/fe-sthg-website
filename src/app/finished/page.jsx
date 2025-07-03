// pages/thank-you.jsx atau komponen sendiri
export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">
          Terima Kasih!
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Kami sangat menghargai waktu Anda untuk mengisi formulir ini.
        </p>
        <p className="text-base text-gray-500 mb-10">
          Data Anda telah kami terima dan akan segera diproses.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
        >
          Kembali ke Beranda
        </a>
      </div>
    </div>
  );
}
