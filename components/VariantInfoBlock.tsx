import {
  CurrentIndexType,
  EditItemType,
  VariantInfoType,
} from "@/types/variants";

export default function VariantInfoBlock({
  name,
  description,
  image,
  currentIndex,
  onDeleteItem,
  onEditItem,
}: VariantInfoType & {
  currentIndex: CurrentIndexType;
  onDeleteItem: (index: CurrentIndexType) => void;
  onEditItem: ({ index, field, value }: EditItemType) => void;
}) {
  return (
    <div className="border-2 border-black my-2 p-2 flex flex-col w-[500px]">
      <button
        className="border-2 border-black px-2 w-24 bg-rose-600 text-white"
        onClick={() => onDeleteItem(currentIndex)}
      >
        Delete {currentIndex}
      </button>
      <input
        type="text"
        placeholder="name"
        className="border-2 border-yellow-500 p-2 my-1"
        value={name}
        onChange={(e) => {
          onEditItem({
            index: currentIndex,
            field: "name",
            value: e.target.value,
          });
        }}
      />
      <input
        type="text"
        placeholder="decription"
        className="border-2 border-yellow-500 p-2 my-1"
        value={description}
        onChange={(e) => {
          onEditItem({
            index: currentIndex,
            field: "description",
            value: e.target.value,
          });
        }}
      />
      <div className="flex flex-col w-[200px] border-2 border-yellow-500 p-2">
        {image ? (
          <>
            <button
              className="border-2 border-black px-2 w-30 bg-rose-400 text-white mb-2"
              onClick={() =>
                onEditItem({ index: currentIndex, field: "image", value: "" })
              }
            >
              Delete Img
            </button>
            <img src={image} />
          </>
        ) : (
          <input
            type="file"
            name="file"
            accept="image/png, image/jpeg"
            className="my-1"
            onChange={(e) => {
              onEditItem({
                index: currentIndex,
                field: "image",
                value:
                  "https://fastly.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY",
              });
            }}
          />
        )}
      </div>
    </div>
  );
}
