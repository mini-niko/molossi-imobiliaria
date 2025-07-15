import { Card, CardContent } from "@/components/ui/card";
import {
  AiOutlineWhatsApp as Whatsapp,
  AiOutlineInstagram as Instagram,
  AiOutlineFacebook as Facebook,
} from "react-icons/ai";

export default function Header() {
  return (
    <header>
      <Card className="rounded-t-none">
        <CardContent className="flex justify-between items-center">
          <div className="flex gap-2 invisible">
            <Instagram size={30} />
            <Facebook size={30} />
            <Whatsapp size={30} />
          </div>
          <span className="bg-primary text-white px-4 py-2 rounded font-bold text-2xl">
            IMOBILIÁRIA
          </span>
          <div className="flex gap-2 text-secondary">
            <Instagram size={30} />
            <Facebook size={30} />
            <Whatsapp size={30} />
          </div>
        </CardContent>
      </Card>
    </header>
  );
}
