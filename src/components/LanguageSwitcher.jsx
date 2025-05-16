"use client"; // ✅ WAJIB di Next.js karena ini komponen interaktif

import useLanguageStore from "@/store/useLanguageStore";
import { Option, Select } from "@material-tailwind/react";
import { useState } from "react";

const languages = [
  { name: "Indonesia", code: "id", flag: "https://flagcdn.com/w40/id.png" },
  { name: "English", code: "en", flag: "https://flagcdn.com/w40/us.png" },
];

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguageStore();
  const [selectedLanguage, setSelectedLanguage] = useState(
    languages.find((lang) => lang.code === language) || languages[0]
  );

  return (
    <div className=" w-36">
      <Select
        value={selectedLanguage.name}
        onChange={(value) => {
          const selected = languages.find((lang) => lang.name === value);
          if (selected) {
            setSelectedLanguage(selected);
            setLanguage(selected.code); // Ubah bahasa di global state
          }
        }}
        className="bg-black border-black w-36"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
        menuProps={{ className: "h-26" }}
        selected={(element) => (
          <div className="flex items-center gap-x-2 text-white">
            <img
              src={selectedLanguage.flag}
              alt={selectedLanguage.name}
              className="h-4 w-4 rounded-full object-cover"
            />
            {selectedLanguage.name}
          </div>
        )}
      >
        {languages.map(({ name, flag }) => (
          <Option key={name} value={name}>
            <div className="flex items-center gap-x-2">
              <img
                src={flag}
                alt={name}
                className="h-4 w-4 rounded-full object-cover"
              />
              {name}
            </div>
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default LanguageSwitcher;
