import { BookOpen } from "lucide-react";

const Books = () => {
  const books = [
    "The Art of Not Overthinking",
    "The Art of Being Alone",
    "Don't Believe Everything You Think",
    "Beyond Thoughts",
    "Boundaries = Freedom",
  ];

  return (
    <section id="books" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">Books That Shaped My Thinking</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Reading has been one of the most transformative parts of my journey, helping me grow in perspective and purpose. 
              These books have nurtured mindfulness, inner balance, and emotional intelligence — guiding me to stay grounded and think with calm clarity in every situation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book, index) => (
              <div
                key={index}
                className="p-6 glass rounded-xl flex items-center gap-4 animate-fade-in glow-hover group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <BookOpen className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                <p className="text-foreground font-medium">{book}</p>
              </div>
            ))}
          </div>

          <div className="text-center p-6 glass rounded-xl animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <p className="text-lg text-muted-foreground italic">
              Each of these reads continues to influence my outlook — reminding me that growth begins with awareness and a peaceful mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Books;
