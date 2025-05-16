"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const SuccessPage = () => {
  const route = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-screen bg-green-100 p-6 text-center"
    >
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
        <h2 className="text-2xl font-bold text-green-600">
          🎉 Form Berhasil Dikirim!
        </h2>
        <p className="mt-4 text-gray-700">
          Terima kasih! Data Anda telah berhasil kami terima.
        </p>

        <button
          onClick={() => route.push("/")}
          className="mt-6 px-6 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition"
        >
          Kembali ke Beranda
        </button>
      </div>
    </motion.div>
  );
};

export default SuccessPage;
