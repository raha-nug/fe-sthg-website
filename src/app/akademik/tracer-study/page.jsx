"use client";
import CheckoutForm from "@/components/akademik/form";
import { DefaultStepper } from "@/components/akademik/tracer";
import { useEffect } from "react";

const { default: Jumbotron } = require("@/items/jumbotron");

const TracerStudy = () => {
  useEffect(() => {
    const addScript = document.createElement("script");
    addScript.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    addScript.async = true;
    document.body.appendChild(addScript);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "id",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };
  }, []);

  return (
    <div>
      {/* <Jumbotron judul="Tracer Mahasiswa" /> */}
      <div className="flex flex-col justify-center items-center pt-40">
        {/* <CheckoutForm /> */}
        <h1 className="text-3xl font-bold text-center">Tracer Study</h1>
        <DefaultStepper />
      </div>
    </div>
  );
};

export default TracerStudy;
