import * as fs from "fs";
import * as readline from "readline";
import { z, ZodType } from "zod";

interface ParseError {
    message: string;
}

export async function parseCSV(path: string, schema: ZodType | undefined): Promise<z.infer<typeof schema>[] | ParseError[] | string[][]> {
  const fileStream = fs.createReadStream(path);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
  
  let result = []
  let isFirstRow = true;

  for await (const line of rl) {
    if (isFirstRow) {
        isFirstRow = false;
        continue;
    }
    const values = line.split(",").map((v) => v.trim());

    if (!schema) {
        result.push(values);
    } else{
        const safeValues = schema.safeParse(values);
        if (safeValues.success)
        result.push(safeValues.data);
        else
            return [{message: "Error parsing line: " + line}];
    }
  }
  return result
}