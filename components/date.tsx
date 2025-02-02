export default function DateWidget({ dateString }: { dateString: string }) {
  // A convoluted way to render the date, without an external library.
  const [year, month, day] = dateString.split("-").map(Number);
  const date = new Date(year, month - 1, day); // Month is 0-based
  return (
    <time dateTime={dateString}>
      {date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    </time>
  );
}
