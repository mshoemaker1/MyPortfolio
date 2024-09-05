const data = {
  Food: ["Fresh baked goods", "Serves hot food"],
  Ownership: ["Independent", "Women/BIPOC/ LGBTQ+"],
  Specialities: ["Cold brew", "Matcha", "Roaster on-site"],
  Transportation: ["Bike rack", "Drive-through", "Parking"],
  Vibe: ["Allows pets", "Wifi"],
};

export const FilterLibrary = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center self-center py-16 lg:w-[900px]">
      {Object.keys(data).map((key) => (
        <div
          key={key}
          className="flex flex-col w-[255px] h-[210px] mx-4 my-4 rounded-2xl drop-shadow-md"
        >
          <div className="flex flex-col w-full h-[70px] justify-center items-center bg-bronze-300 rounded-t-2xl">
            <p className="text-black">{key}</p>
          </div>
          <div className="flex flex-col bg-bronze-500 h-full px-[40px] pt-[30px] rounded-b-2xl">
            <ul className="list-disc px-6">
              {data[key as keyof typeof data].map((item: string) => (
                <li key={item} className="text-black">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};
