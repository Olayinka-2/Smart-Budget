
import ProfileCup from "../components/ProfileCup";
import BalanceDisplay from "../components/BalanceDisplay"


const DashBoard = () => {

  return (
    <div className="min-h-screen py-4 px-8">
      <div className="h-screen flex justify-center">
        <div className="w-full">
          <h1 className="font-semibold text-lg">
            Financial and Saving Dashboard
          </h1>
          <div className="relative flex flex-col gap-2">
            <ProfileCup />
            <BalanceDisplay />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
