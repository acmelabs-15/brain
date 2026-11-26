---
id: DEC-121
status: accepted # proposed | accepted | superseded by DEC-NNN
kind: decision # architecture exactly when all three adr-test answers are true
adr-test:
  hard-to-reverse: true
  surprising: false
  real-trade-off: true
from: IDEA-015#02 # a row (IDEA-NNN#NN, SPEC-NNN#NN), an idea or spec (IDEA-NNN, SPEC-NNN), or user
evidence: [RES-264] # the RES files this decision rests on
decided: 2026-11-25 by Peter
---
# DEC-121: Each task of the board is one Markdown file

The board does not connect to Vercel, so its data needs a place in the project (DEC-120). Peter decided the file of a task, in these words: "So a task is a thread - so every task that a channel has, should be a file in it's directory - file name should be prefixed with "TASK-{id}". The frontmatter of the task file should have it's id, all of it's labels, and it's content should be it's text property as that is markdown."

So:

- A task is a thread.
- A channel has a directory, and each task of the channel is one file in it.
- The name of the file starts with `TASK-` and the ID of the task.
- The frontmatter holds the ID and each label of the task. The status of the task is one of them.
- The body of the file is the `text` of the task, which is Markdown.

He rejected one file for each message: "one file per task, not message". The agent had shown that layout as its recommendation.

On the names of the directories, Peter added on the same day: "luckily we aren't using vercel boards, we're making our own implementation and can do waht we want". The agent had named a clash: Vercel Board allows only lowercase letters in a channel path. So a channel path can have uppercase letters, such as `ideas/IDEA-001`, and a rule of Vercel Board does not bind the board where Brain needs a different one.

The root of the channel directories is `docs`, by Peter's direction ("I think ... they create directories in the docs directory with those names"). He did not change it when the agent asked.

This record does not decide where the replies of a task sit. By the words above they are no files of their own and no part of the body. The agent's reading, not confirmed by Peter: the server keeps them with its other data, such as the event log and the claims, in a folder of its own that the spec defines. It also does not decide what holds for a thread that is no task.
