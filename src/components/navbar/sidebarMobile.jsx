"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Laptop,
  Settings,
  House,
  Phone,
  User,
  Album,
  Package,
  GraduationCap,
  BookText,
  Link2,
  Headset,
} from "lucide-react";
import Image from "next/image";

// Menu structure
const menuItems = [
  {
    label: "Home",
    href: "/",
    icon: House,
  },
  {
    label: "Profile",
    icon: User,
    children: [
      {
        label: "Visi & Misi",
        href: "/visi-misi",
        icon: Album,
      },
      {
        label: "Tentang STHG",
        href: "/tentang-sthg",
        icon: BookOpen,
      },
      {
        label: "Fasilitas",
        href: "/fasilitas",
        icon: Package,
      },
      {
        label: "Akreditasi",
        href: "/akreditasi",
        icon: GraduationCap,
      },
    ],
  },
  {
    label: "Program Studi",
    icon: GraduationCap,
    children: [
      {
        label: "Sarjana Hukum (S1)",
        href: "/program-studi/sarjana",
        icon: GraduationCap,
      },
      {
        label: "Master Hukum (S2)",
        href: "/program-studi/master",
        icon: GraduationCap,
      },
    ],
  },
  {
    label: "Akademik",
    icon: GraduationCap,
    children: [
      {
        label: "Tracer Study",
        href: "/akademik/tracer-study",
        icon: BookText,
      },
      {
        label: "Perpustakaan",
        href: "https://pustaka.sthg.ac.id/",
        icon: BookText,
      },
      {
        label: "Siakad",
        href: "https://siakadbjbs.sthg.ac.id/",
        icon: Link2,
      },
    ],
  },
  {
    label: "PMB",
    href: "/",
    icon: Headset,
  },
  {
    label: "E-journal",
    href: "https://jurnal.sthg.ac.id/index.php/jurnal/index",
    icon: Link2,
  },
];

export default function SidebarMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState({});
  const pathname = usePathname();

  const toggleSidebar = () => setIsOpen(!isOpen);

  const toggleSubmenu = (label) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <>
      {/* Topbar (mobile only) */}
      <div className="lg:hidden fixed w-full top-0 left-0 z-50 flex items-center justify-between px-4 py-3 bg-black text-yellow-300">
        <button onClick={toggleSidebar} aria-label="Toggle Menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        <div className="flex items-center gap-2">
          <Image
            src="/gambar/newLogo.png"
            alt=""
            width={80}
            height={80}
            className="w-14"
          />
          <Image
            src="/MBKM-logo.png"
            alt=""
            width={80}
            height={80}
            className="w-14"
          />
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[999]"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:hidden top-0 left-0 z-[1000] h-full w-64 bg-white dark:bg-gray-900 shadow transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <Image
              src="/gambar/newLogo.png"
              alt=""
              width={80}
              height={80}
              className="w-14"
            />
            <Image
              src="/MBKM-logo.png"
              alt=""
              width={80}
              height={80}
              className="w-14"
            />
          </div>
          <button onClick={toggleSidebar} aria-label="Close Menu">
            <X size={24} className="text-black dark:text-yellow-300" />
          </button>
        </div>

        <nav className="flex flex-col p-4 space-y-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isSubmenuOpen = openSubmenus[item.label] || false;

            if (item.children) {
              return (
                <div key={item.label}>
                  <button
                    onClick={() => toggleSubmenu(item.label)}
                    className="w-full flex items-center justify-between text-left text-black dark:text-yellow-300 hover:text-blue-500"
                  >
                    <span className="flex items-center gap-2">
                      <Icon size={18} />
                      {item.label}
                    </span>
                    {isSubmenuOpen ? (
                      <ChevronUp size={18} />
                    ) : (
                      <ChevronDown size={18} />
                    )}
                  </button>

                  <div
                    className={`ml-6 mt-2 overflow-hidden transition-all duration-300 ease-in-out ${
                      isSubmenuOpen
                        ? "max-h-60 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {item.children.map((subItem) => {
                      const SubIcon = subItem.icon;
                      const isActive = pathname === subItem.href;
                      return (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          onClick={toggleSidebar}
                          className={`flex items-center gap-2 text-sm py-2 hover:text-blue-500 ${
                            isActive
                              ? "text-blue-600 font-semibold"
                              : "text-black dark:text-yellow-300"
                          }`}
                        >
                          <SubIcon size={16} />
                          {subItem.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            }

            const isActive = pathname === item.href;

            return (
              <Link
                key={item.label}
                href={item.href || "#"}
                onClick={toggleSidebar}
                className={`flex items-center gap-2 hover:text-blue-500 ${
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-black dark:text-yellow-300"
                }`}
              >
                <Icon size={20} />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
