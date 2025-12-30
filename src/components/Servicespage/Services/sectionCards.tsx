import React from "react";

type CardItem = {
   icon: React.ElementType;
  title: string;
  description: string;
};

type SectionCardsProps = {
  title: string;
  cards: CardItem[];
};

const SectionCards: React.FC<SectionCardsProps> = ({ title, cards }) => {
  return (
    <section className="px-4">
      <div className="container">
        <h2 className="text-center mb-10">{title}</h2>

        <div className="flex flex-wrap justify-center gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group p-8 lg:w-[23%] md:w-[48%] w-full rounded-2xl bg-white/50 shadow-xl transition-all duration-300"
            >
                <span className="material-symbols-outlined text-3xl">
                  <card.icon className="text-4xl" />
                </span>

              <h3 className="text-xl font-bold text-black my-3">
                {card.title}
              </h3>

              <p className="text-black leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionCards;
