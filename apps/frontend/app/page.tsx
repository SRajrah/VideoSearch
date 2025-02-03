"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const [message, setMessage] = useState<string>("");

  const fetchMessage = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/hello");
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error("Error fetching data:", error);
      setMessage("Failed to fetch data.");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <Button onClick={fetchMessage}>Click Me</Button>
      {message && <p className="text-lg text-gray-700">{message}</p>}
    </main>
  );
}