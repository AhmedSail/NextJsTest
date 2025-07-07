// لا تحتاج هذا:
// import { lusitana } from "../../ui/fonts";

import { Inter, Roboto_Mono, Lusitana } from "next/font/google";

export const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const inter = Inter({ subsets: ["latin"] });
export const roboto = Roboto_Mono({ subsets: ["latin"] });
