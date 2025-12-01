"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md border rounded-xl p-8 shadow-sm bg-card">

        <h1 className="text-3xl font-bold mb-2">Create an Account</h1>
        <p className="text-muted-foreground mb-6">
          Join LookBack to begin your story.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="border rounded-md p-3 w-full"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="border rounded-md p-3 w-full"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="border rounded-md p-3 w-full"
            required
          />

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Creating Account..." : "Register"}
          </Button>
        </form>

        <p className="text-sm text-center mt-4 text-muted-foreground">
          Already have an account?
          <Link href="/login" className="text-primary ml-1 hover:underline">
            Login
          </Link>
        </p>

        {/* Back to Home */}
        <Link href="/" className="block mt-6">
          <Button variant="outline" className="w-full">
            Back to Home
          </Button>
        </Link>

      </div>
    </main>
  );
}