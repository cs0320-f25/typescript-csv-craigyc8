import { int, string } from "zod";
import { parseCSV } from "../src/basic-parser";
import * as path from "path";

const PEOPLE_CSV_PATH = path.join(__dirname, "../data/people.csv");
const TESTING_CSV_PATH = path.join(__dirname, "../data/testing.csv")

test("parseCSV yields arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH)
  
  expect(results).toHaveLength(5);
  expect(results[0]).toEqual(["name", "age"]);
  expect(results[1]).toEqual(["Alice", "23"]);
  expect(results[2]).toEqual(["Bob", "thirty"]); // why does this work? :(
  expect(results[3]).toEqual(["Charlie", "25"]);
  expect(results[4]).toEqual(["Nim", "22"]);
});

test("parseCSV yields only arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH)
  for(const row of results) {
    expect(Array.isArray(row)).toBe(true);
  }
});

// TASK A: my own tests for the CSV parser

test("parseCSV can deal with empty columns", async () => {
  const results = await parseCSV(TESTING_CSV_PATH)

  expect (results[2]).toEqual(["", "thirty"]) // passes
})

test("parseCSV can deal with double quotes", async () => {
  const results = await parseCSV(TESTING_CSV_PATH)

  expect (results[3]).toEqual(["Charlie", "25"]) // fails initiially
})

test("parseCSV can deal with fields that contain commas", async () => {
  const results = await parseCSV(TESTING_CSV_PATH)

  expect (results[1]).toEqual(["Alice,", "23"]) // fails initially
})

test("parseCSV can deal with whitespace between commas", async () => {
  const results = await parseCSV(TESTING_CSV_PATH)

  expect (results[4]).toEqual(["Nim", "22"]) // passes
})