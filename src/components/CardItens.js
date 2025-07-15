import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/router";

export default function CardItens({ imageSrc, title, description, value }) {
  const router = useRouter();

  return (
    <Card
      className="cursor-pointer pt-0 hover:scale-105 transition"
      onClick={() => {
        router.push("/item");
      }}
    >
      <Image
        className="border-b border-black"
        src={imageSrc}
        width={400}
        height={30}
      />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between gap-8">
          <p>Valor</p>
          <p>R${value.toLocaleString("pt-BR")}</p>
        </div>
      </CardContent>
    </Card>
  );
}
