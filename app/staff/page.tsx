import Divider from "@/components/ui/divider";
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
      <h2 className="text-2xl font-bold mb-8 text-primary text-center">
        Meet Our Staff
      </h2>
      <Divider />
      <div className="relative rounded-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full sm:gap-16">
        {staff.map((member, index) => (
          <>
            <div className="relative p-14" key={`image-${index}`}>
              <Image
                src="https://humble-cup-images.s3.us-east-1.amazonaws.com/gold-frame.png"
                alt="Frame"
                width={300}
                height={300}
                className="rounded-lg absolute top-0 left-0 w-full"
              />
              <Image
                src={member.image}
                alt={`Staff Member ${index + 1}`}
                width={100}
                height={100}
                className="w-full"
              />
            </div>
            <div className="rounded-lg mt-4 mb-16" key={`bio-${index}`}>
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
