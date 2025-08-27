"use client";

import { useState } from "react";
import { Sun, Play, Image } from "lucide-react"; // Iconos de lucide-react

export default function AppearanceForm() {
  const [theme, setTheme] = useState("light");
  const [accent, setAccent] = useState("purple");
  const [reduceMotion, setReduceMotion] = useState(true);
  const [autoPlay, setAutoPlay] = useState(true);
  const [hqPhoto, setHqPhoto] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-[420px]">
        <h2 className="text-xl font-semibold text-black">Appearance</h2>
        <p className="text-black text-sm">
          Set or customize your preferences for the system
        </p>

        {/* Language */}
        <div className="mt-4">
          <label className="block text-sm font-medium text-black">Language</label>
          <select className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 text-black">
            <option>English</option>
            <option>Español</option>
          </select>
        </div>

        {/* Theme */}
        <div className="mt-6">
          <label className="block text-sm font-medium mb-2 text-black">Interface theme</label>
          <div className="flex justify-between text-black">
            {["auto", "light", "dark"].map((t) => (
              <button
                key={t}
                onClick={() => setTheme(t)}
                className={`flex-1 mx-1 border rounded-lg p-3 transition ${
                  theme === t
                    ? "border-blue-500 ring-2 ring-blue-300"
                    : "border-gray-300"
                }`}
              >
                <span className="capitalize">{t}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Accent color */}
        <div className="mt-6 text-black">
          <label className="block text-sm font-medium mb-2 text-balck">Accent color</label>
          <div className="flex gap-3">
            {["red", "green", "yellow", "blue", "purple", "pink"].map((c) => (
              <button
                key={c}
                onClick={() => setAccent(c)}
                className={`w-6 h-6 rounded-full bg-${c}-500 border-2 ${
                  accent === c ? "border-black" : "border-transparent"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Switches con iconos */}
        <div className="mt-6 space-y-4 text-black">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Sun size={18} className="text-black" />
              <span>Reduce motion</span>
            </div>
            <button
              onClick={() => setReduceMotion(!reduceMotion)}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
                reduceMotion ? "bg-blue-500" : "bg-black"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
                  reduceMotion ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Play size={18} className="text-black" />
              <span>Auto play</span>
            </div>
            <button
              onClick={() => setAutoPlay(!autoPlay)}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
                autoPlay ? "bg-blue-500" : "bg-black"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
                  autoPlay ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Image size={18} className="text-black" />
              <span>High quality photo</span>
            </div>
            <button
              onClick={() => setHqPhoto(!hqPhoto)}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
                hqPhoto ? "bg-blue-500" : "bg-black"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
                  hqPhoto ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-between items-center text-sm">
          <button className="text-black">Reset to default</button>
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-lg border text-black">Cancel</button>
            <button className="px-4 py-2 rounded-lg bg-gray-300 text-black">
              Save Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
