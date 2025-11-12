export default function Page() {
  return (
    <div>
      <h1 className="text-3xl font-semibold">Privacy Policy</h1>
      <p className="text-slate-300 text-sm mt-3 max-w-2xl">
        This website does not collect or store protected health information
        (PHI). Demo forms are designed for high-level, non-identifying use
        cases only. Any production deployment would run inside the customer&apos;s
        secure environment under appropriate BAAs.
      </p>
    </div>
  );
}
