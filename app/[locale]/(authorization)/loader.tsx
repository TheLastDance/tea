export default function Loading() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center relative bg-[#2b2b2b]">
      {" "}
      <div className="ring italic">
        Loading
        <span className="loader-ring"></span>
      </div>
    </section>
  );
}

export { Loading };
