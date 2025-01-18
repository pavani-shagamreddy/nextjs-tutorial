export default async function productDetailsPage({
  params,
}: {
  params: Promise<{ productid: string }>;
}) {
  const productId = (await params).productid;
  return <h1>Details about product {productId} </h1>;
}
