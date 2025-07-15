import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function Item() {
  return (
    <main className="flex flex-col md:flex-row gap-8 py-24 px-32 md:px-64">
      <div>
        <Image
          className="rounded"
          src="https://placehold.co/1920x1080.png"
          width={1000}
          height={30}
        />
        <div className="grid"></div>
      </div>
      <Card className="p-8 w-full md:w-fit">
        <CardTitle>Está interessado?</CardTitle>
        <CardDescription>Preencha os dados abaixo, e confirme</CardDescription>
        <CardContent className="w-full p-0 space-y-6">
          <div className="space-y-2 w-full">
            <Label>Nome Completo</Label>
            <Input className="w-full" />
          </div>
          <div className="space-y-2 w-full">
            <Label>Email</Label>
            <Input className="w-full" />
          </div>
          <div className="space-y-2 w-full">
            <Label>Telefone</Label>
            <Input className="w-full" />
          </div>
          <div className="space-y-2 w-full">
            <Label>Observação</Label>
            <Textarea className="w-full" />
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
