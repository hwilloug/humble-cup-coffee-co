import Divider from "@/components/ui/divider";
import Image from "next/image";
export default function OurStoryPage() {
  const timeline = [
    {
      year: 2020,
      title: "The Beginning",
      description:
        "What started as a small team with big dreams has grown into a passionate community of innovators and problem solvers.",
      image: "/our-story/2020.jpg",
      imageAlt: "2020",
    },
    {
      year: 2022,
      title: "Major Milestones",
      description:
        "Through dedication and hard work, we've achieved significant growth and expanded our reach to serve clients globally.",
      image: "/our-story/2022.jpg",
      imageAlt: "2022",
    },
  ];
  return (
    <main>
      {/* History Section */}
      <section>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mt-12 mb-4 text-center">
              Our Story
            </h2>
            <Divider />
            <div className="space-y-24">
              {timeline.map((item) => (
                <div className="grid grid-cols-[auto_1fr] gap-8 items-center">
                  <div className="flex-shrink-0 w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-bold">{item.year}</span>
                  </div>
                  <div>
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      className="rounded-lg"
                      width={100}
                      height={100}
                    />
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                We constantly push boundaries and embrace new technologies to
                deliver cutting-edge solutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of teamwork and building strong
                relationships with our clients.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Trust</h3>
              <p className="text-gray-600">
                We build lasting relationships through transparency,
                reliability, and consistent delivery of quality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
