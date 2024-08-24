import axios from "axios";
import * as cheerio from "cheerio";

export type ITEMS_LIST = {
  img: string;
  description: string;
};

export default async function scrapperTool(
  url: string
): Promise<Array<ITEMS_LIST>> {
  if (!url) throw new Error("URL is missing");

  const response = await axios.get(url);
  const selector = cheerio.load(response.data);

  let items: ITEMS_LIST[] = [];

  selector(".card").each((index, element) => {
    items.push({
      img: selector("img.card-img-top", element).attr("src") as string,
      description: selector("p", element).text() as string,
    });
  });

  return items;
}

//https://c3technology.com.br/tecladosemouses/kittecladoemouse/semfio/c
