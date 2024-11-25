import HomePage from "@/app/Pages/HomePage";
import ScrollableCards from "@/components/Cards/ScrollableCards";
import Testimonial from "@/components/Cards/Testimonial";
import CardDaftar from "@/components/ui/CardDaftar";
// import EventOrganizer from "@/components/ui/EventOrganizer";
import { cardData } from "@/data/cardData";

export default function Home() {
  return (
    <>
      <HomePage />
      <CardDaftar />
      {/* <EventOrganizer /> */}
      <section>
        <h2 className="text-2xl font-bold px-12">Event Organizer</h2>
        <ScrollableCards type="eo" data={cardData.eo} />
      </section>

      <section>
        <h2 className="text-2xl font-bold px-12">Vendor</h2>
        <ScrollableCards type="vendor" data={cardData.vendor} />
      </section>

      <section>
        <h2 className="text-2xl font-bold px-12">Makeup Artist</h2>
        <ScrollableCards type="mua" data={cardData.mua} />
      </section>

      <section>
        <Testimonial />
      </section>
    </>
  );
}
