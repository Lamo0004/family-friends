import ListServer from "@/components/ListServer";
import ListClientWithFilter from "@/components/ListClientWithFilter";

export default async function HomePage() {
  const data = await ListServer();

  return (
    <main>
      <ListClientWithFilter data={data} />
    </main>
  );
}
