export default function page() {
  return (
    <div className="flex flex-grow items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-4xl">Dashboard</h1>
        <p className="text-sm text-foreground">This is a protected Route</p>
      </div>
    </div>
  );
}
