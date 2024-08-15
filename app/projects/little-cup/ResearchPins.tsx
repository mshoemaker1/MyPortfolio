export const ResearchPins = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center">
      <div className="flex flex-col w-full justify-between max-w-[348px] h-[303px] mx-8 p-12 rounded-lg border-bronze-500 border-[5px] mb-16">
        <div>
          <p className="font-semibold">Pain Point #1</p>
          <p>Maps are cluttered making it an overwhelming user experience.</p>
        </div>
        <div>
          <p className="font-semibold">Opportunity #1</p>
          <p>The design of the map will need to be clear and compelling.</p>
        </div>
      </div>
      <div className="flex flex-col w-full justify-between max-w-[348px] h-[303px] mx-8 p-12 rounded-lg border-bronze-500 border-[5px] mb-16">
        <div>
          <p className="font-semibold">Pain Point #2</p>
          <p>Users want to be able to filter for specific items.</p>
          <br />
        </div>
        <div>
          <p className="font-semibold">Opportunity #2</p>
          <p>Tailored filters will attract and retain users.</p>
        </div>
      </div>
    </div>
  );
};
