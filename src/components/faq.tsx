import { useState } from "react";
import Happy from "./happy";
import StickyCTA from "./sticky-cta";

const faqItems = [
  {
    question: "What are Aligners?",
    answer:
      "Aligners are Orthodontic devices that are a transparent, plastic form of dental braces used to adjust teeth to make your smile more beautiful!",
  },
  {
    question: "How do Aligners work?",
    answer:
      "Whistle aligners, constructed from thin plastic shells, gently guide your teeth into position. In contrast to conventional metal braces, these invisible aligners are clear, discreet, and less bothersome. Remarkable results can be achieved in as few as six weeks, all while providing the flexibility to remove the aligners whenever needed. With the guidance of an orthodontist, Whistle aligners can work their magic, transforming your smile into a more beautiful one!",
  },
  {
    question: "Can any dentist do irregular teeth treatment?",
    answer:
      "An Orthodontist is a dental specialist who prevents, diagnoses and treats facial irregularities. Orthodontic treatments aim to improve the way the teeth and jaws function, as well as the person's smile or appearance. They straighten crooked or misaligned teeth, fix bad bites and make sure jaws are correctly aligned. For best results from your Invisible Aligners one must consult with an Orthodontist.",
  },
  {
    question: "Are there any restriction on eating or drinking?",
    answer:
      'No restrictions as such. The "snapon/snapoff" feature makes Aligners comfortable and easy to use in all social situations.',
  },
  {
    question: "How long does the treatment take?",
    answer:
      "Typically, it may take 6-12 months for correcting the 'social six' (front teeth). For more complex cases such as crowded teeth, the treatment time could be 12-24 months or slightly longer. The best person to give advice on this is your Orthodontist.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Happy />
      <StickyCTA />
      <section className="faq">
        <div className="container">
          <div className="faq__header">
            <h2 className="section-title">
              <span className="purple">Got Questions?</span> We've got answers
            </h2>
          </div>
          <div className="faq__list">
            {faqItems.map((item, index) => (
              <div
                key={item.question}
                className={`faq__item ${
                  openIndex === index ? "faq__item--open" : ""
                }`}
              >
                <button className="faq__question" onClick={() => toggle(index)}>
                  {item.question}
                  <span className="faq__icon">+</span>
                </button>
                <div className="faq__answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
