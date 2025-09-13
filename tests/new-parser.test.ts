import { z, ZodType, int, string } from "zod";
import { parseCSV } from "../src/new-parser";
import * as path from "path";

const STUDENTS_CSV_PATH = path.join(__dirname, "../data/students.csv");
const ERROR_CSV_PATH = path.join(__dirname, "../data/error.csv");
const INTEGERS_CSV_PATH = path.join(__dirname, "../data/integers.csv");
const STRINGS_CSV_PATH = path.join(__dirname, "../data/strings.csv");
const StudentSchema = z.tuple([z.string(), z.coerce.number()])
const IntegerSchema = z.tuple([z.coerce.number(), z.coerce.number()])
const StringSchema = z.tuple([z.string(), z.string()])

test("parseCSV basic functionality", async () => {
  const results = await parseCSV(STUDENTS_CSV_PATH, StudentSchema)

  expect (results[0]).toEqual(["Lebron", 1])
  expect (results[1]).toEqual(["Steph", 2])
  expect (results[2]).toEqual(["Kevin", 3])
})

test("parseCSV returns an error", async () => {
  const results = await parseCSV(ERROR_CSV_PATH, StudentSchema)

  expect (results).toEqual([{message: "Error parsing line: 4, Giannis"}])
})

test("parseCSV without schema", async () => {
    const results = await parseCSV(STUDENTS_CSV_PATH, undefined)

    expect (results[0]).toEqual(["Lebron", "1"])
    expect (results[1]).toEqual(["Steph", "2"])
    expect (results[2]).toEqual(["Kevin", "3"])
})

test("parseCSV without schema on error file", async () => {
    const results = await parseCSV(ERROR_CSV_PATH, undefined)

    expect (results[0]).toEqual(["Lebron", "1"])
    expect (results[1]).toEqual(["Steph", "2"])
    expect (results[2]).toEqual(["Kevin", "3"])
    expect (results[3]).toEqual(["4", "Giannis"])
})

test("parseCSV on integer only schema", async () => {
    const results = await parseCSV(INTEGERS_CSV_PATH, IntegerSchema)

    expect (results[0]).toEqual([1, 2])
    expect (results[1]).toEqual([3, 4])
    expect (results[2]).toEqual([6, 7])
})

test("parseCSV on string only schema", async () => {
    const results = await parseCSV(STRINGS_CSV_PATH, StringSchema)

    expect (results[0]).toEqual(["Lebron", "James"])
    expect (results[1]).toEqual(["Steph", "Curry"])
    expect (results[2]).toEqual(["Kevin", "Durant"])
})

test("parseCSV can deal with empty columns", async () => {
  const results = await parseCSV(STUDENTS_CSV_PATH, StudentSchema)

  expect (results[3]).toEqual(["", 4])
})

test("parseCSV can deal with whitespace between commas", async () => {
  const results = await parseCSV(STUDENTS_CSV_PATH, StudentSchema)

  expect (results[3]).toEqual(["", 4])
})