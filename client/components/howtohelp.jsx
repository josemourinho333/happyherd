import ContentCard from "./ContentCard";

const HowToHelp = ({ helpItems }) => {

  const helpSections = helpItems.map((help, index) => {
    let background;
    let text;

    if (index === 0) {
      background = "bg-gradient-to-t from-secondary to-primary"
      text = "text-neutral-content"
    }

    if (index === 1) {
      background = "bg-gradient-to-br from-info to-accent"
      text = "text-neutral-content"
    }

    if (index === 2) {
      background = "bg-gradient-to-br from-gray-700 to-black"
    }

    return (
      <ContentCard
        key={help.id}
        title={help.title}
        content={help.content}
        bg={background}
        textColor={text}
        index={index}
      />
    )
  })

  return (
    <div className="bg-base-200">
      <div className="carousel carousel-center max-w-screen space-x-4 rounded-box bg-inherit p-10">
        <ContentCard base={true} />
        {helpSections.reverse()}
      </div>
    </div>
  )
};

export default HowToHelp;