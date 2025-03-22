import Divider from "@/components/ui/divider";
import Image from "next/image";

export default function Staff() {
  const staff = [
    {
      name: "Nick",
      title: "Owner",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      image: "/DSC_3394-2-Enhanced-NR.jpeg",
      drink: "Latte",
    },
    {
      name: "Jennifer",
      title: "Barista",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      image: "/DSC_2201-Enhanced-NR.JPG",
      drink: "Latte",
    },
    {
      name: "Rachel",
      title: "Barista",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      image: "/DSC_1484-2-Enhanced-NR-2.JPG",
      drink: "Latte",
    },
    {
      name: "Kim",
      title: "Barista",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      image: "/DSC_3381-Enhanced-NR.JPG",
      drink: "Latte",
    },
    {
      name: "Macey",
      title: "Barista",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      image: "/DSC_1786-2-Enhanced-NR.JPG",
      drink: "Latte",
    },
    {
      name: "Margo",
      title: "Barista",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      image: "/DSC_2322-Enhanced-NR.jpeg",
      drink: "Latte",
    },
    {
      name: "Brooke",
      title: "Barista",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      image: "/DSC_1777-Enhanced-NR.JPG",
      drink: "Latte",
    },
    {
      name: "Curtis",
      title: "Content Creator",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      image: "/DSC_1501-Enhanced-NR.JPG",
      drink: "Cappuccino",
    },
  ];

  return (
    <div className="container mx-auto p-4 my-8">
      <h2 className="text-3xl font-bold mb-8 text-primary text-center">
        Meet Our Staff
      </h2>
      <Divider />
      <div className="relative rounded-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full sm:gap-16">
        {staff.map((member, index) => (
          <>
            <div className="relative p-6 sm:p-4 md:p-2" key={`image-${index}`}>
              <Image
                src="/gold-frame.png"
                alt="Frame"
                width={300}
                height={300}
                className="rounded-lg absolute top-0 left-0 w-full h-full"
              />
              <Image
                src={member.image}
                alt={`Staff Member ${index + 1}`}
                width={300}
                height={300}
                className="w-full"
              />
            </div>
            <div className="rounded-lg mt-4 mb-16" key={`bio-${index}`}>
              <h2 className="text-primary mb-4">{member.name}</h2>
              <h3 className="text-primary text-sm mb-4">{member.title}</h3>
              <p>{member.bio}</p>
              <p className="text-primary text-sm mt-4">
                Favorite Drink: <b>{member.drink}</b>
              </p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
