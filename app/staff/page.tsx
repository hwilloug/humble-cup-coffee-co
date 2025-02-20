import Image from "next/image";

export default function Staff() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Meet Our Baristas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="aspect-square bg-amber-100 rounded-lg flex items-center justify-center">
          <Image
            src="/staff/staff1.jpg"
            alt="Staff Member 1"
            width={300}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
