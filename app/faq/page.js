import FAQListItem from "@/components/FAQListItem";

export default function FAQ() {
  return (
    <main className="min-h-screen bg-base-200 text-base-content px-4 py-2 flex justify-center items-center">
      <section className="flex w-full max-w-4xl gap-12">

        <div className="w-2/5 flex justify-end">
          <h1 className="text-5xl font-extrabold text-left">FAQ</h1>
        </div>


        <div className="w-3/5">
          <ul className="space-y-4">
            {[
              { question: "What is your name", answer: "Yuki" },
              { question: "What is my name", answer: "Haizenberg" },
              { question: "What is your name again", answer: "Yuki" },
            ].map((qa) => (
              <FAQListItem key={qa.question} qa={qa} />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
