"use client";
import { InputBox } from "@repo/ui/input";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <InputBox placeholder="Enter room Id " />
      <button
        style={{ padding: "1rem" }}
        onClick={() => {
          router.push("/room/123");
        }}
      >
        Join room
      </button>
    </div>
  );
}
