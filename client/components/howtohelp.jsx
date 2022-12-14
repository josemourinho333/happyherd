import ContentCard from "./ContentCard";

const HowToHelp = ({ helpItems }) => {

  const helpSections = helpItems.map((help, index) => {
    let background;
    let text;
    let disabled = false;

    if (index === 0) {
      background = "bg-gradient-to-tl from-info to-success"
      text = "text-neutral-content"
    }

    if (index === 1) {
      background = "bg-gradient-to-br from-error to-warning"
      text = "text-neutral-content"
    }

    if (index === 2) {
      background = "bg-gradient-to-b from-primary to-secondary"
      disabled=true;
    }

    return (
      <ContentCard
        key={help.id}
        title={help.title}
        content={help.content}
        bg={background}
        textColor={text}
        index={index}
        slug={help.slug}
        disabled={disabled}
      />
    )
  })

  return (
    <div className="bg-base-100">
      <div className="carousel carousel-center max-w-screen space-x-5 rounded-box bg-inherit py-10 px-5 2xl:justify-center">
        {helpSections.reverse()}
      </div>
    </div>
  )
};

export default HowToHelp;