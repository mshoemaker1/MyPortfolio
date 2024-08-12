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
          <div key={index} className="flex flex-row py-12 border-t-[1px]">
            <p className="font-bold w-1/3">{takeaway.title}</p>
            <p className="w-2/3">{takeaway.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Takeaways;
