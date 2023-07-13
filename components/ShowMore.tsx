"use client";

import { ShowMoreProps } from "@/types";
import { updateSearchParams } from "@/utils";
import { useRouter } from "next/navigation";
import CustomButton from './CustomButton';


const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMoreProps) => {

  const handleNavigation = () => {
    // Calculate the new limit based on the page number and navigation type
    const newLimit = (pageNumber + 1) * 10;
    setLimit(newLimit);

  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          btnTypes="button"
          title="Show More"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};


export default ShowMore