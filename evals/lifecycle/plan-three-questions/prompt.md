---
name: lifecycle/plan-three-questions
description: The plan gate puts its first approval question to the user, one question, with a recommendation.
tags: [lifecycle]
max_turns: 30
allowed_tools: [Read, Glob, Grep, Skill, Write]
---

/brain:plan

Here is the spec. Plan it.

# Spec: word counter

## Objective
A command-line tool that prints the number of words in a text file. One argument, the file path. Exit 1 with a message when the file is missing.

## Tech Stack
Bun, TypeScript, bun:test.

## Commands
Build: none. Test: bun test. Run: bun run src/count.ts <file>.

## Project Structure
src/count.ts, src/__tests__/count.test.ts.

## Code Style
Named exports, explicit return types.

## Testing Strategy
bun:test beside the source; one test per behaviour.

## Boundaries
Always run the tests before a commit. Never read a file outside the argument.

## Success Criteria
`bun run src/count.ts sample.txt` prints the word count; a missing file exits 1.
