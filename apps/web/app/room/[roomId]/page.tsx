import { InputBox } from "@repo/ui/input";

export default async function Room({
  params,
}: {
  params: Promise<{ roomId: string }>;
}) {
  const roomId = (await params).roomId;
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
      <h1>Welcom to chat room -{roomId}</h1>
      <InputBox placeholder="send message " />
      <button style={{ padding: "1rem" }}>Send</button>
    </div>
  );
}
