import Divider from "@/components/ui/divider";
import Image from "next/image";
export default function Events() {
  const events = [
    {
      title: "Event 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      image: "https://humble-cup-images.s3.us-east-1.amazonaws.com/book.png",
      date: "Last Friday of the Month",
    },
  ];

  return (
    <section className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-primary text-center">
        Events
      </h2>
      <Divider />
      <div className="mt-8">
        {events.map((event, index) => (
          <div key={`event-${index}`} className="grid grid-cols-2 gap-8 mb-8">
            <Image
              src={event.image}
              alt={event.title}
              width={300}
              height={300}
              className="rounded-lg w-full"
            />
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                {event.title}
              </h3>
              <p className="text-lg">{event.description}</p>
              <p className="text-md text-primary font-bold mt-4">
                When: {event.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
