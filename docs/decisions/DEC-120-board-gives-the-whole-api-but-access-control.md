---
id: DEC-120
status: accepted # proposed | accepted | superseded by DEC-NNN
kind: decision # architecture exactly when all three adr-test answers are true
adr-test:
  hard-to-reverse: false
  surprising: false
  real-trade-off: true
from: IDEA-015#01 # a row (IDEA-NNN#NN, SPEC-NNN#NN), an idea or spec (IDEA-NNN, SPEC-NNN), or user
evidence: [RES-264] # the RES files this decision rests on
decided: 2026-11-25 by Peter
---
# DEC-120: The board gives the whole API of Vercel Board, but no access control

Row 01 asked which parts of the API of Vercel Board the local Bun server provides. Peter decided: "it should provide all of it except for access control". So the core, schedules, schemas, attachments, sync, the parts that need a deployment on Vercel, and the JavaScript SDK are all in.

The agent recommended to leave out sync and the parts that need a Vercel deployment, because a local server has no platform that gets the webhooks of Slack, GitHub or Linear and no deployment that Vercel wakes (RES-264, parts 13 and 15). Peter did not take that. His answer gives the direction for those parts: "instead of connecting to vercel", the board works on the files of the project.

What this decision leaves open is row 08 of IDEA-015: how sync, the watchers and the sandbox policy work on a local server. Where the data sits is row 02.
