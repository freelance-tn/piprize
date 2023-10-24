import { Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export const Social = () => {
    return ( 
        <div className="flex flex-row text-white">
            <Link href="https://www.facebook.com/PiCoreTeam/"> <Button variant="ghost"> <Facebook  /> </Button> </Link>
            <Link href="https://www.facebook.com/PiCoreTeam/"> <Button variant="ghost"> <Instagram /> </Button> </Link>
            <Link href="https://twitter.com/PiCoreTeam"      > <Button variant="ghost"> <Twitter   /> </Button> </Link>
        </div>
     );
}
 
