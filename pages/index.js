import CardItens from "@/components/CardItens";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const data = [
  {
    img: "https://placehold.co/600x400.png",
    title: "Casa Simples",
    description: "São Jorge",
    value: 849.49,
  },
  {
    img: "https://placehold.co/600x400.png",
    title: "Apartamento Simples",
    description: "Centro",
    value: 1299.49,
  },
  {
    img: "https://placehold.co/600x400.png",
    title: "Casa Simples",
    description: "Matinho",
    value: 849.49,
  },
  {
    img: "https://placehold.co/600x400.png",
    title: "Apartamento Simples",
    description: "Tacca",
    value: 849.49,
  },
  {
    img: "https://placehold.co/600x400.png",
    title: "Casa Simples",
    description: "Jardim Tarumã",
    value: 849.49,
  },
];

export default function Index() {
  const router = useRouter();

  return (
    <main className="py-24 px-56 md:px-64">
      <div className="grid grid-cols-1 md:grid-cols-4 justify-start gap-12 md:gap-24 flex-wrap">
        {data.map((item) => (
          <CardItens
            imageSrc={item.img}
            title={item.title}
            description={item.description}
            value={item.value}
          />
        ))}
      </div>
    </main>
  );
}
