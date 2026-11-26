---
id: IDEA-015
status: define # define | specced | done | parked
result: # with status: done, the DEC-NNN or the commit SHA this idea produced
---
# IDEA-015: Brain board: a Bun server, a CLI, a mod and agents

## Intent
- Outcome: draft, from Peter's words. Brain has a board that a Bun server provides. The Brain CLI starts and stops that server by itself and gives the board commands. A mod for Claude Code gives the same commands as one board tool, and it creates agents, such as a lead and a worker for a channel, that take ready tasks by themselves.
- User: draft. Peter, in Claude Code.
- Why now: open, row 07.
- Success: open, row 07.
- Constraint: draft, from Peter's words. The server runs on Bun. The board gives the whole API of Vercel Board (DEC-120). It does not connect to Vercel: it works on the files of the project (row 02).
- Out of scope: draft. Access control (DEC-120).

<!-- After the user's explicit yes to this intent, add the line: Confirmed by <name> on <YYYY-MM-DD>. -->

## Destination
A spec for the board: the server, the CLI and the mod with its agents, ready for Peter's approval. This is a draft; Peter did not name the destination.

## Notes
Every session loads ask-user-question, domain-modeling and context-engineering.

### The request, in Peter's words, 2026-11-25

> I'd like board implemented on a BUN server and I'd like a brain CLI to start and stop that server automatically when commands get run by it and the server provides the board functionality to the board cli commands/subcommands.
>
> It should provide all of the same api except doesn't need to support access control.
>
> I'd also like to create a board mod that creates a board tool that provides all of the board commands, subcommands, etc., makes them available through that board command. I think I'd also like the tool to be able to
>
> - '/board agents create lead'
> - '/board agents create worker'
> - '/board agents create <channel> lead'
> - '/board agents create <channel> worker'
>
> I think you should also be able to just write it as prose talking to the agent - and should be able to treat it "create a implementer and qa agent for the spec channel, a lead and worker implementer and worker testing for the spec channel - the implementer agent should automatically claim any ready tasks and the qa agent should claim any ready tasks for testing" and I think that should be enough to set that up upcorrectly.

### Standing preferences

- This idea starts from scratch. Nothing of the earlier board work on the branch `feat/views-mod` is given here. A session reads there only when a row needs it.
- The reference for the API of Vercel Board is RES-264.
- The board is Brain's own implementation. Peter, 2026-11-25: "we're making our own implementation and can do waht we want". So a rule of Vercel Board is a model and no limit. The agent does not bring a difference from Vercel Board to Peter as a problem; it chooses what fits Brain and says so.

### Row 05 — resolved by RES-265

Peter, 2026-11-25: one mod API record on this branch, and more than one old record is folded into it. RES-265 is that record: RES-217 and RES-219 of the branch `feat/views-mod` in one file. No agent ran. It answers each part of the row: a mod can give a tool (tested) and a slash command (stated); it can start a turn with `$.prompt.submit` and an agent with `$.agent.spawn` (stated); its tool loads in a session with no person (tested). Not known: a teammate, an interactive session, an installed mod.

### Rows 03 and 06 — the agent's choice, said to Peter

Peter's words settle the behavior of both, so the agent chose the rest and told him on 2026-11-25. Row 03: the CLI starts the server with the first command that needs it; the server stops when it is idle and no command waits; the data is in files. Row 06: the principal is the user of the machine, and a profile names an agent. Peter did not answer on them yet.

### Row 02 — resolved by DEC-121, with two points left to the spec

The server's own data (the event log, the claims and their leases, the attachments, the schedules, the schemas) sits in a folder of the server that the spec defines. That is the agent's choice; it changes nothing that a person sees in the task files. The place of the replies of a task has the agent's reading in DEC-121, not confirmed by Peter. The history of the row follows.

- Settled: nothing yet. Peter gave a direction, with "I think".
- Source: Peter's reply to row 01 on 2026-11-25: "instead of connecting to vercel, I think creating for example an ideas channel and an ideas/IDEA-001 channel they create directories in the docs directory with those names - threads in ideas/IDEA-001 creates a markdown file - frontmatter has an id, status... and any of it's other labels".
- The direction: a channel is a directory below `docs`, with the path of the channel as its name. A thread is one Markdown file in the directory of its channel. The frontmatter of that file has an ID, a status and each other label of the thread.
- Open: where the replies of a thread sit; where the event log, the reactions, the attachments and the claims sit; what the status is for a thread that is no task; the name of the file.
- One clash to settle: Vercel Board allows only lowercase letters, numbers, `_` and `-` in a channel path (RES-264, part 4). `ideas/IDEA-001` has uppercase letters.
- Second reply of Peter, 2026-11-25, to the question where the replies sit: "I think think all of that gets set as labels - I think it's content that you display is it's text property as it supports markdown".
- The direction from it: the body of a Markdown file is the `text` of a message, because the text is Markdown. Each other field of the message, such as its ID, its author, its time and its reactions, is a label in the frontmatter.
- Peter selected "a file for each message" from two layouts that the agent showed, and corrected it at once: "wait, one file per task, not message".
- Settled on 2026-11-25 (DEC-121): a task is a thread; a channel has a directory, and each task of the channel is one file in it; the file name starts with `TASK-` and the ID; the frontmatter holds the ID and each label; the body is the text.
- The agent asked three times where the replies of a task sit. Each answer of Peter describes the task file and does not name the replies. The agent's reading, not confirmed: a reply is no file and no part of the body, so it sits with the other data of the server.
- Still open: where the replies sit; what holds for a thread that is no task; the root of the channel directories (`docs` is a direction) and the clash with the lowercase rule of Vercel Board; the data that is no label (the event log, the claims and their leases, the attachments, the schedules, the schemas).
- Peter on the letters of a path, 2026-11-25: "luckily we aren't using vercel boards, we're making our own implementation and can do waht we want". So uppercase is allowed, and the root stays `docs` by his direction (DEC-121).

## Map

| # | Question | Type | Status | Blocked by | Result |
|---|---|---|---|---|---|
| 01 | Which parts of the API of Vercel Board does the local server provide: the core (channels, threads, labels, actors, events, tasks), and which of schedules, schemas, attachments, sync, and the JavaScript SDK? | interview | resolved | — | DEC-120 |
| 02 | Where does the server keep the data of the board, and in which form? | interview | resolved | — | DEC-121 |
| 03 | When does the CLI start the server and when does it stop it, and what holds for a command that waits, such as `tail`, `wait` and `tasks run`? | interview | open | — | — |
| 04 | What is an agent that `board agents create` makes in Claude Code: a sub-agent of the session, a separate process with no person, or something else; and how does it take ready tasks by itself? | interview | open | 05 | — |
| 05 | What can a Claude Code mod do for the board: can it give one tool and one slash command, can it start a turn or an agent when a task is ready, and does its tool load in a session with no person? | research | resolved | — | RES-265 |
| 06 | Who is the actor on a board with no Vercel login: what is the principal, and how do profiles name the agents? | interview | open | — | — |
| 07 | Why does Peter want the board now, and how does he know that it works: what does he do with it first, and what must be true then? | interview | open | 01, 04 | — |
| 08 | How do the parts work on a local server that Vercel's platform gives: sync with Slack, GitHub and Linear, the watchers that wake code, and the sandbox policy? | interview | open | 02, 05 | — |

## Not yet specified
- How prose becomes agents: how words such as "an implementer and a qa agent for the spec channel" become profiles, channels and the labels that route tasks. It hangs on row 04.
- What "ready for testing" means on the board: a label, or a task that waits for a different task. It hangs on row 04.
- How Brain's own work, such as a spec, uses the board. Peter's example names a "spec channel".

## Out of scope
- Access control: grants, permissions and private channels. Reason: Peter's words, "doesn't need to support access control".
