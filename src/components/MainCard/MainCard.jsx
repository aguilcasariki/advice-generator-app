import { useQuery } from "@tanstack/react-query";
import { fetchAdvice } from "../../../api/fetchAdvice";

const MainCard = () => {
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["advices"],
    queryFn: fetchAdvice,
    refetchOnWindowFocus: false,
  });

  if (error) {
    return <div>Error al cargar el consejo.</div>;
  }
  return (
    <div className=" h-screen bg-dark-blue flex flex-col items-center justify-center">
      <div className="card_container rounded-lg bg-dark-grayish-blue w-80 p-7 md:w-96 flex flex-col items-center shadow-2xl">
        <h1 className="card_title text-neon-green text-xs ">
          {isLoading
            ? `"Loading..."`
            : error
            ? `"Error"`
            : `Advice # ${data.slip.id}`}
        </h1>
        <p className="card_advice text-light-cyan font-extrabold text-center mt-5">
          {isLoading
            ? `"We are processing the data to offer you an optimal experience on our website. We know that waiting can be frustrating, but we are working to load the data as quickly as possible."`
            : error
            ? `"We are working hard to fix the error as soon as possible. We appreciate your patience and understanding while we work on it."`
            : `"${data.slip.advice}"`}
        </p>
        <div className="card_divider mt-5 mb-9">
          <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
              <g transform="translate(138)" fill="#CEE3E9">
                <rect width="6" height="16" rx="3" />
                <rect x="14" width="6" height="16" rx="3" />
              </g>
            </g>
          </svg>
        </div>
      </div>
      <button
        className="card_button -m-6 bg-neon-green p-4 rounded-full shadow-2xl hover:shadow-btnShadow"
        onClick={() => {
          refetch();
        }}
      >
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
            fill="#202733"
          />
        </svg>
      </button>
    </div>
  );
};

export default MainCard;
