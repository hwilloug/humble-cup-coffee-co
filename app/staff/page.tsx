import Image from "next/image";

export default function Staff() {
  const staff = [
    {
      name: "John Doe",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      image: "https://humble-cup-images.s3.us-east-1.amazonaws.com/staff_1.png",
      drink: "Latte",
    },
    {
      name: "Jane Doe",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      image: "https://humble-cup-images.s3.us-east-1.amazonaws.com/staff_2.png",
      drink: "Cappuccino",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-8 text-primary">Meet Our Staff</h1>
        <div className="relative aspect-square rounded-lg grid grid-cols-2 w-full gap-4">
          {staff.map((member, index) => (
            <>
              <div className="relative p-10" key={`image-${index}`}>
                <Image
                  src="https://humble-cup-images.s3.us-east-1.amazonaws.com/frame.png"
                  alt="Frame"
                  width={300}
                  height={300}
                  className="rounded-lg absolute top-0 left-0"
                />
                <Image
                  src={member.image}
                  alt={`Staff Member ${index + 1}`}
                  width={100}
                  height={100}
                  className="rounded-lg w-full"
                />
              </div>
              <div className="rounded-lg mt-4" key={`bio-${index}`}>
                <h2 className="text-primary mb-4">{member.name}</h2>
                <p>{member.bio}</p>
                <p className="text-primary mt-4">
                  Favorite Drink: <b>{member.drink}</b>
                </p>
              </div>
            </>
          ))}
        </div>
    </div>
  );
}
