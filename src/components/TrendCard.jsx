const TrendCard = ({ title, image }) => {
  return (
    <div
      className="w-[290px] h-[290px] bg-cover bg-center border rounded-xl"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* <div className="rounded-xl h-20 overflow-hidden">
        <img src={image} alt="" />
      </div> */}
      <button className="text-white bg-indigo-500 rounded-xl mt-6">
        Technology
      </button>
      <h2 className="text-2xl mt-6 text-white">{title}</h2>
    </div>
  );
};

export default TrendCard;
