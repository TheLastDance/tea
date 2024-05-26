import { getProductDetail } from "@/apiUsers";

export default async function SingeleProductVercel({
  params: { id },
}: {
  params: { id: string };
}) {
  const prodDetail = await getProductDetail(id);

  return (
    <div className="mt-[140px]">
      <h1 className="text-[black]">{prodDetail.title}</h1>
    </div>
  );
}
