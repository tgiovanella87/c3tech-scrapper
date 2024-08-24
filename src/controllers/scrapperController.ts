import { Request, Response } from "express";

import scrapperTool, { ITEMS_LIST } from "../scrapper/scrapperTool";

export default async function scrapperController(req: Request, res: Response) {
  if (!req.body.url) throw new Error(`The url is mandatory`);
  const response: ITEMS_LIST[] = await scrapperTool(req.body.url);

  if (!response)
    throw new Error(`It was not possible to scrapper the url: ${req.body.url}`);

  res.status(200).json(response);
}
