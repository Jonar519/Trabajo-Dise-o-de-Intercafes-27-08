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
        <h2 className="text-xl font-semibold">Appearance</h2>
        <p className="text-gray-500 text-sm">
          Set or customize your preferences for the system
        </p>

        {/* Language */}
        <div className="mt-4">
          <label className="block text-sm font-medium">Language</label>
          <select className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500">
            <option>English</option>
            <option>Español</option>
          </select>
        </div>

        {/* Theme */}
        <div className="mt-6">
          <label className="block text-sm font-medium mb-2">Interface theme</label>
          <div className="flex justify-between">
            {["auto", "light", "dark"].map((t) => (
              <button
                key={t}
                onClick={() => setTheme(t)}
                className={`flex-1 mx-1 border rounded-lg p-3 transition ${
                  theme === t
                    ? "border-purple-500 ring-2 ring-purple-300"
                    : "border-gray-300"
                }`}
              >
                <span className="capitalize">{t}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Accent color */}
        <div className="mt-6">
          <label className="block text-sm font-medium mb-2">Accent color</label>
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
        <div className="mt-6 space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Sun size={18} className="text-gray-500" />
              <span>Reduce motion</span>
            </div>
            <button
              onClick={() => setReduceMotion(!reduceMotion)}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
                reduceMotion ? "bg-purple-500" : "bg-gray-300"
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
              <Play size={18} className="text-gray-500" />
              <span>Auto play</span>
            </div>
            <button
              onClick={() => setAutoPlay(!autoPlay)}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
                autoPlay ? "bg-purple-500" : "bg-gray-300"
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
              <Image size={18} className="text-gray-500" />
              <span>High quality photo</span>
            </div>
            <button
              onClick={() => setHqPhoto(!hqPhoto)}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
                hqPhoto ? "bg-purple-500" : "bg-gray-300"
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
          <button className="text-gray-500">Reset to default</button>
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-lg border">Cancel</button>
            <button className="px-4 py-2 rounded-lg bg-purple-600 text-white">
              Save Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
