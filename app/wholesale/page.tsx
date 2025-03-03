import Divider from "@/components/ui/divider";

export default function Wholesale() {
  return (
    <main>
      <div className="container mx-auto px-4 my-8">
        <h2 className="text-3xl font-bold text-primary mt-12 mb-4 text-center">
          Wholesale
        </h2>
        <Divider />
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <p>
            We offer wholesale pricing for cafés, boutiques, and businesses. Please contact us for more information on wholesale pricing.
          </p>
          <p>
            <a className="underline" href="mailto:nick@humblecupcoffeeco.com">
              nick@humblecupcoffeeco.com
            </a>
          </p>
          <p>
            <a className="underline" href="tel:+61422777333">(704) 564-2933</a>
          </p>
          <p>
            <a className="underline" href="https://www.instagram.com/humblecupcoffeeco/">Instagram</a>
          </p>
          <p>
            <a className="underline" href="https://www.facebook.com/HumbleCupCoffeeCo/">
              Facebook
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
