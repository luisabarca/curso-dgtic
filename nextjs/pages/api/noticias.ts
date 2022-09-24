import { ServerResponse } from "http";
import { NextApiRequest, NextApiResponse } from "next";
import { getNoticias } from "../../services/noticias";

// type Props = {
//     req: Server
//     res: ServerResponse,
// };

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
    getNoticias().then((noticias) => {
        res.status(200).json(noticias);
    });
}