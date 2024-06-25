"use client";
import VariantInfoBlock from "@/components/VariantInfoBlock";
import { productVariants } from "@/data";
import {
  CurrentIndexType,
  EditItemType,
  VariantInfoType,
} from "@/types/variants";
import { useState } from "react";

export default function Home() {
  const [variantInfo, setVariantInfo] = useState(productVariants);

  const handleOnAdd = () => {
    setVariantInfo([
      ...variantInfo,
      {
        name: "",
        description: "",
        image: "",
      },
    ]);
  };

  const handleOnDelete = (currentIndex: CurrentIndexType) => {
    const newItem = variantInfo.filter(
      (item, index) => index !== Number(currentIndex)
    );

    setVariantInfo([...newItem]);
  };

  const handleOnSubmit = () => {
    console.log("data: ", variantInfo);
  };

  const handleOnEdit = ({ index, field, value }: EditItemType) => {
    let newItem = variantInfo.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          [field]: value,
        };
      }
      return item;
    });
    setVariantInfo([...newItem]);
  };

  return (
    <div className="bg-white w-screen h-screen text-black p-6">
      <h1>Upload Images</h1>
      <button
        className="border-2 border-black p-2 bg-sky-500 text-white w-[500px] my-3"
        onClick={handleOnAdd}
      >
        Add
      </button>

      {variantInfo.map((item: VariantInfoType, index) => {
        return (
          <VariantInfoBlock
            key={index}
            currentIndex={index}
            name={item.name}
            description={item.description}
            image={item.image}
            onDeleteItem={(currentIndex) => handleOnDelete(currentIndex)}
            onEditItem={({ index, field, value }) =>
              handleOnEdit({ index, field, value })
            }
          />
        );
      })}
      <button
        className="border-2 border-black p-2 bg-green-600 text-white w-[500px] my-3"
        onClick={handleOnSubmit}
      >
        SUBMIT DATA
      </button>
    </div>
  );
}
