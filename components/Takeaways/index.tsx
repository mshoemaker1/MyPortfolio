interface TakeawayProps {
  data: {
    title: string;
    description: string;
  }[];
}

const Takeaways = ({ data }: TakeawayProps) => {
  return (
    <section className="flex flex-col px-10 py-20 md:flex-row md:px-72 md:py-30">
      <div className="border-b-[1px]">
        <h2 className="mb-4">Key Takeaways</h2>
        {data.map((takeaway, index) => (
          <div
            key={index}
            className="flex flex-col py-12 border-t-[1px] sm:items-center sm:flex-row"
          >
            <p className="font-bold mr-8 sm:w-1/3 mb-4 sm:mb-0">
              {takeaway.title}
            </p>
            <p className="sm:w-2/3">{takeaway.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Takeaways;
