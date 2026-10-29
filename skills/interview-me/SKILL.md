---
name: interview-me
description: Interviews the user until the intent is confirmed, and keeps the work on disk as a map in an idea file, so one interview can run over any number of sessions. Decide rows go to the user one question per call, research rows to sub-agents, and each resolved row links to its decision or research record. Use when an ask lacks who, why, success or constraint, when an idea is too big for one session, when the user names an idea to continue, when the user says "interview me", "grill me", "are we sure?" or "stress-test my thinking", or before guessing a requirement.
---

# Interview Me

## Overview

What people ask for and what they want are different things. They ask for "a dashboard" because that is what one asks for, not because a dashboard solves their problem. They say "make it faster" without a number to hit.

The cheapest moment to find this gap is before any plan, spec or code exists. Once building starts, switching costs are real. The user rationalises the wrong thing into a "good enough" thing, and the misfit gets locked in.

This skill closes the gap before it costs anything. It charts the ask as a **map** in an **idea** file: one row per question, and each row resolved by the user, by a sub-agent or by a piece of work. Decide rows go to the user one at a time, each with a recommendation. The interview ends when the frontier and the fog are empty and the user confirms the intent.

The interview is always stateful. No one knows at the start whether it takes one session or ten, so the map is on disk before the first question, and every session works from it.

## When to Use

Apply this skill when:

- The ask is missing at least one of: **who** the user is, **why** they want it, what **success** looks like, what the binding **constraint** is
- The request is conventional rather than specific ("build me X", "make it faster") and you cannot unpack the convention without guessing
- The way from the idea to its destination is not visible yet, or the work looks too big for one session
- You are tempted to start with assumptions you have not surfaced
- The user has not said which value they optimise for when two reasonable ones are in tension (simplicity against flexibility, cost against speed)
- The user names an idea to continue (see [Resume](#resume))
- The user explicitly invokes: "interview me", "grill me", "before we start, are we sure?", "stress-test my thinking"

**When NOT to use:**

- The ask is unambiguous and self-contained ("rename this variable", "fix this typo")
- The user has explicitly asked for speed over verification
- Pure information requests ("how does X work?", "what does this code do?")
- Mechanical operations (renames, formats, file moves)
- You can write every line of the intent now, and no question is open

## Loading Constraints

This skill needs a live user who answers. In a non-interactive run (a CI pipeline, a scheduled run, `/loop`, an autonomous loop), write the gap down as a blocker for the user instead of guessing.

## Start of every session

### Load three skills

Load all three before the first row, in every session. A skill that an agent must call only on a condition is the one it skips.

1. Call the Skill tool with "ask-user-question". It composes every question to the user.
2. Call the Skill tool with "domain-modeling". It writes each sharpened term to `GLOSSARY.md` and each decision to a decision record.
3. Call the Skill tool with "context-engineering". It owns the rule for where a session may end.

### Run `brain`

`brain` is brain's command-line tool. It creates every numbered file and checks the workspace. On Claude Code, run it as:

```
bun "${CLAUDE_PLUGIN_ROOT}/scripts/brain.ts" <cmd>
```

Claude Code fills in the plugin path when it loads this skill. On another host, resolve the plugin folder as setup-brain does, then run `scripts/brain.ts` from it with bun. Below, `brain <cmd>` stands for this command.

Every numbered file (IDEA, DEC, RES) comes from `brain new-doc`. Its claim gives each number to one agent only; a file written by hand can take a number that another agent holds. In a repo with no `docs/agents/workspace.md`, `brain new-doc` uses the default folders: tell the user once to run setup-brain.

### No repo

When the session has no repo (an interview about a plan, a design or a piece of writing), the map lives in the conversation, and you say so once, at the chart: "This map lives in our conversation only. It is lost when the conversation ends." Keep the same sections and the same row format, and show the whole map each time it changes. A resolved row's Result holds the answer in a few words, because there is no file to link.

## The idea file

The idea file is `IDEA-NNN-<slug>.md` in the workspace's ideas folder (`paths.ideas` in `docs/agents/workspace.md`, `docs/ideas/` by default). It is the interview's whole state: a new session needs nothing else.

| Part | Holds |
|---|---|
| `status` in the frontmatter | `define` while the interview runs; `specced` once a spec exists; `parked` when the user sets the idea aside |
| H1 | `# IDEA-NNN: <title>`: the ID, then the idea's name |
| Intent | six lines: Outcome, User, Why now, Success, Constraint, Out of scope. It is a draft until the user confirms it (see [Confirm the intent](#confirm-the-intent)) |
| Destination | one or two lines: what reaching the end of this map looks like (a spec, a decision or a change) |
| Notes | the skills every session loads, and the user's standing preferences for this idea |
| Map | the rows |
| Not yet specified | the fog |
| Out of scope | work ruled beyond the destination |

### Rows

A row is one question with one kind of answer. Size is not part of a row: one row can take a minute, another a whole session. Rows are named by how they resolve:

| Kind | Type in the map | Resolved by | Result |
|---|---|---|---|
| Decide | `interview` | the user, through one question ([Decide rows](#decide-rows)) | a decision record, `DEC` |
| Decide | `prototype` | the user's pick between prototypes. Call the Skill tool with "prototype" to build them | a `DEC` that records the pick and links the prototype branch |
| Decide | `ideate` | the user's pick between directions. Call the Skill tool with "idea-refine" to generate them | a `DEC` that records the chosen direction, with the other variations as considered options |
| Research | `research` | a sub-agent that finds facts and cites their sources ([Delegating research](#delegating-research)) | a research record, `RES` with `kind: research` |
| Do | `task` | work that a later decision needs, done by you, or by the user from a precise checklist | a `RES` with `kind: task`: what was done, and the facts later rows need |

A do row names the decision it unblocks. The map plans; it never builds. Work that delivers part of the destination is not a row: rule it out of scope, or rewrite it as the question it hides.

The map is a table with the columns `| # | Question | Type | Status | Blocked by | Result |`:

- **#**: two digits, local to the file, never reused. Other files cite a row as `IDEA-004#03`, and a DEC or RES records it in its `from:` field.
- **Question**: one line. The detail lives in the DEC or RES file, so the map stays an index and never grows into a store.
- **Status**: `open`, `in-progress`, `resolved`, or `superseded by NN` when row NN replaced it.
- **Blocked by**: the rows whose answers this row needs, as `02, 04`, or `—` when it needs none. Each number names a row in the same map.
- **Result**: on a `resolved` row, the ID of the one DEC or RES file that resolved it, such as `DEC-007`, never inline text. On every other row, `—`.

The **frontier** is every `open` row whose blocking rows are all `resolved`. Work it out from the map each time. It is never written down.

A choice you make on your own, cheap to undo and with no effect on what gets built, is not a row and gets no file. State it in chat with its reason in one line.

### Fog and out of scope

**Fog or row?** The test is whether you can state the question precisely now, not whether you can answer it now. A sharp question becomes a row, even when it is blocked. A question you can tell is coming but cannot yet phrase goes to "Not yet specified", as loosely as you see it. Fog is coarser than a row: when the frontier reaches it, one patch can become several rows, or none.

Fog lies toward the destination. Work beyond the destination is not fog. It goes to "Out of scope" with one line on why, and it comes back only if the user redraws the destination.

## Chart (always runs first)

The chart writes the map before the first question, and asks the user nothing. Run it when no idea file exists for this work yet.

1. **Hypothesise, then draft the destination.** Write your best read of what the user wants in one sentence, and what is still missing:

   ```
   HYPOTHESIS: You want a way to answer "how are we doing?" in standup, and "dashboard" was the convention that came to mind.
   MISSING: who it is for, what "metrics" means here, what success looks like.
   ```

   Draft the destination from the hypothesis: the spec, decision or change this map finds its way to. Keep it bounded. A map for one defined outcome stays true; a map for a whole product decays before it is half walked. When you are unsure of the destination, the question that settles it is a row, and the rows it shapes wait on it.

2. **Map the frontier breadth-first.** List every question you can state precisely now, across the whole space, wide before deep. The first frontier usually holds the four coverage questions: who the user is, why now, what success looks like, and the binding constraint. Give each question its type from the Rows table. A question you cannot state yet is fog; work past the destination is out of scope.

3. **Write the idea file.** Pick a slug from the hypothesis (lowercase words joined by hyphens, such as `team-metrics`) and run:

   ```
   bun "${CLAUDE_PLUGIN_ROOT}/scripts/brain.ts" new-doc IDEA <slug>
   ```

   It claims the next idea number, writes the file from its template, and prints the path. Then fill every part:

   - The H1 title after the ID.
   - The Intent draft: your hypothesis on each line. Where you cannot guess, name the row that settles it: `- Success: open, row 03.` Leave the "Confirmed by" comment as it is; it becomes a line only after the user's explicit yes.
   - The Destination.
   - Notes: "Every session loads ask-user-question, domain-modeling and context-engineering.", then any standing preference the user stated.
   - The Map: one row per question from step 2, numbered from `01`, with status `open`, Blocked by `—` for now, and Result `—`.
   - The fog under "Not yet specified", and "Out of scope" (write "None yet." when nothing is ruled out).

4. **Wire the blocking edges in a second pass.** With every row numbered, give each row the rows whose answers it needs. A row that needs no answer keeps `—`. No row waits on itself, directly or through other rows.

5. **Start the research.** For each research row on the frontier, start a sub-agent as [Delegating research](#delegating-research) says, and set the row to `in-progress`.

The chart is done when `brain check` reports no finding for the idea file, no `<...>` placeholder is left outside the "Confirmed by" comment, and the user has the path, the destination and the first frontier in a few lines. Then the loop takes the first frontier row.

## The loop

_T20 writes this section: take the next frontier row, resolve it by its type, and re-map after every resolved row, written to disk; one writer for the idea file; a session ends only between rows._

## Decide rows

A decide row goes to the user. A decision is a fork where two paths are defensible, the choice changes what gets built, and reading more will not settle it. Every decide row ends in one question: an `interview` row asks it at once; a `prototype` or `ideate` row asks it when the prototype or idea-refine skill has made the options.

### Facts are yours

A fact is anything the code, the docs or a tool can answer: which framework the repo uses, whether a list of experiments already exists, what the current latency is. A fact is never the user's job. A quick lookup inside a decide row goes to a sub-agent and never becomes a row. A fact that needs sources and a record is a research row. A question the user could answer only by opening a file is a fact you should have fetched.

### One question per call, with a recommendation

When several decide rows are on the frontier, take the one with the most rows waiting on it. Compose the question with ask-user-question: the question text, the options, the one recommended option with the fact behind it, and the layout. Send one question per call through the host's user-question tool, and wait for the reply.

Your hypothesis for the answer is the recommended option, with the reasoning that produced it. The user reacts faster to a wrong guess than they produce an answer from nothing. The recommendation commits you to a hypothesis you can be visibly wrong about, and it surfaces the assumptions the interview exists to expose. The risk is a polite user who picks it to be agreeable. Be visibly willing to be wrong, and now and then recommend the direction you expect them to push back on.

Why one per call: the user cannot react to your hypotheses when they are buried in a list. A batch invites skim-reading and surface answers. The third question often depends on the answer to the first, and asking them together locks in the wrong framing.

A question names each concept with the glossary's word, from `GLOSSARY.md` through `docs/agents/domain.md`. A concept the glossary lacks is a gap to note for domain-modeling.

### Read the whole reply

Free text is not rejection. One reply can carry a condition, a correction and a side topic at once. A partial answer settles the part it covers, and the gap is the next question. "Whatever you think is best" is delegation, not a decision: ask again with two concrete options as a choice.

### Want versus should want

The most dangerous answers are the ones where the user says what a thoughtful answer *sounds like* rather than what they want. Watch for:

- Answers that pattern-match best-practice talk ("I want it to be scalable", "clean architecture") without specifics
- Answers that defer to convention ("the way most apps do it", "the standard approach")
- Phrases like "I should probably...", "I think I'm supposed to...", "good engineering practice says..."
- Buzzwords ("modern", "scalable", "robust") given as the answer instead of a specific outcome

When you hear these, the next question is:

> *"If you didn't have to justify this to anyone, what would you actually want?"*

Ask it through the same tool. The recommended option is your read of what they would pick without an audience. That single question often does more work than the previous five.

## Delegating research

A research row goes to a sub-agent: one sub-agent and one brief per row. The sub-agent finds the facts, follows each one to the source that owns it, and writes them to its own research record. A fact you think you know goes to the sub-agent too: memory is not a source.

| Host | Agent for a research row |
|---|---|
| Claude Code | The brain plugin's `researcher` agent. It has every tool except Agent, so it cannot start agents of its own. |
| Every other host | The host's general-purpose agent. The brief's "start no other agent" line keeps it alone. |

A read-only agent such as Explore takes a quick lookup inside a decide row only. It cannot write a file, so it never takes a research row.

To start the research for a row:

1. Call the Skill tool with "writing-for-agents". A brief is a document an agent consumes, and its levers apply.
2. Read [`RESEARCH.md`](RESEARCH.md) in full. It holds the brief, the rule for each of its fields, and the variants for a record to continue and for a session with no repo.
3. Fill the brief. Give it this path for the brain CLI: `${CLAUDE_PLUGIN_ROOT}/scripts/brain.ts`. Claude Code fills in the plugin folder when it loads this skill; a sub-agent's Bash has no `CLAUDE_PLUGIN_ROOT`, so the brief carries the full path. On another host, give `scripts/brain.ts` in the plugin folder you resolved.
4. Start the agent with the brief, and set the row to `in-progress` in the idea file.

The sub-agent claims its own record through `brain new-doc`: the brief gives the name format, never a number. You write the idea file; the sub-agent writes only its record.

### Read the result

The sub-agent replies with one path and nothing else. Read the file, not the reply: the file is the primary source. When the reply names no research record, look in the research folder for the record whose `from:` is the row.

| You find | Next |
|---|---|
| The record, with `status: resolved` | Set the row to `resolved`, with the record's ID as its Result. Its follow-ups, `UNVERIFIED` lines among them, go into the re-map. |
| The record, with `status: in-progress` | The sub-agent stopped early, and its findings stand. Start a new one with the brief for a record to continue. |
| No record, and the reply is the progress file's path | The sub-agent's capability check failed. Tell the user what the file says, and set the row back to `open`. |
| No record otherwise | The sub-agent never reached step 1. Start it again with the same brief. |

## Confirm the intent

The Intent section is the restate: what you now think the user wants, in their words, one line each, so the user can confirm or correct it line by line. Put it inside one user-question call with the options "yes" and "refine". Everything the user needs to decide sits inside that call.

```
Here is what I now think you want:

- Outcome:      <one line>
- User:         <one line: who benefits>
- Why now:      <one line: what changed>
- Success:      <one line: how we know it worked>
- Constraint:   <one line: the binding limit>
- Out of scope: <one line: what we are explicitly not doing>
```

The "Out of scope" line is never left out. Half of misalignment is silent disagreement about what is *not* being built.

The gate is an explicit yes. Any clear yes counts: "yes", "approved", "that's it", "go ahead with that". Do not ask again because the words differ from a list. After the yes, replace the comment under the Intent with the line it names: `Confirmed by <name> on <YYYY-MM-DD>.`

A hedged reply is not a yes, and it gets one follow-up. "Sounds good", "sure, let's go" and "I guess" get "Anything you would refine?" The reply to that follow-up decides. Do not ask a third time about the same restate.

Silence is not consent. The interview waits for a reply and chooses nothing on the user's behalf. If the user goes quiet and then says "okay, let's start", they have given up on the interview, not agreed: stop and ask whether you missed something.

A correction goes into the Intent and the map. It can reopen rows, so the restate waits until the frontier and the fog are empty again.

The interview is done only when both hold: the frontier and the fog are empty, and the user gave an explicit yes to the restate. Neither alone is enough. An empty frontier without a yes is your model, not a shared one. A yes to a restate with open rows is a yes to a guess.

The stop has a floor. If several rows resolve and the map keeps growing, that is information about the ask, not a reason to keep grinding. Step back and say so: "I have resolved X rows and the map keeps growing. Something foundational is missing. Want to step back?"

## Finish

_T20 writes this section: when the frontier and the fog are empty, confirm the intent, set `status: specced` once the spec exists, and hand off to spec-driven-development._

## Resume

_T20 writes this section: resume from the idea file's `status`, and find the active effort._

## Example

**Without interview-me:**

```
User:  build me a dashboard for our metrics
Agent: <starts proposing chart libraries and layouts>
```

The agent has assumed who it is for, what metrics, what "our" means, and what success looks like. None of these are stated. Every assumption is a place the user can later say "that is not what I meant."

**With interview-me:**

```
User: build me a dashboard for our metrics

Agent (chart):
HYPOTHESIS: You want a way to answer "how are we doing?" in standup, and "dashboard" is the conventional answer.
DESTINATION (draft): a spec for the view that answers "how are we doing?"
$ brain new-doc IDEA team-metrics
docs/ideas/IDEA-003-team-metrics.md

## Map
| # | Question | Type | Status | Blocked by | Result |
|---|---|---|---|---|---|
| 01 | Who asks "how are we doing?" | interview | open | — | — |
| 02 | Which metrics does the repo already export? | research | in-progress | — | — |
| 03 | What does a good answer let the reader decide? | interview | open | 01 | — |
| 04 | Which metrics answer that question? | interview | open | 02, 03 | — |

## Not yet specified
- How fresh the numbers must be, once the reader is known.

Agent (user-question tool, one call, row 01):
  Question:    When you say "how are we doing?", who is asking?
  Options:     You alone / The engineering team in standup / Up the chain (manager, exec, board)
  Recommended: The engineering team in standup, because "we" usually scopes that way and standups are where this question gets asked. For execs the metrics and the framing change a lot.

User: It's actually for me. I keep losing track of which experiments are running and what their early signal looks like.
```

Row 01 resolves to a decision record, and the destination moves: not a team dashboard but a personal list of experiments. Rows 03 and 04 assumed a team view, so sharper rows supersede them. The dashboard would have been wrong, and the map shows why.

## Interaction with Other Skills

- **ask-user-question**: composes every question this skill asks. Interview-me decides which row to ask and when; ask-user-question decides how the call reads.
- **domain-modeling**: loaded at the start. It records each sharpened term in `GLOSSARY.md` and each decision as a `DEC` file.
- **context-engineering**: loaded at the start. It owns the rule for where a session may end.
- **idea-refine**: resolves `ideate` rows. It generates and stress-tests directions; the user picks one, and the `DEC` keeps the others as considered options.
- **prototype**: resolves `prototype` rows. The user picks between prototypes; the `DEC` links the prototype branch.
- **source-driven-development**: research sub-agents follow its source rules ([Delegating research](#delegating-research)).
- **spec-driven-development**: downstream. It takes the confirmed intent and the map's decision records.
- **planning-and-task-breakdown**: two hops downstream of this skill (after the spec).
- **doubt-driven-development**: opposite end of the timeline. Interview-me finds the intent before a decision; doubt-driven reviews an artifact after it. Both catch divergence, at different moments.

## Common Rationalizations

| Rationalization | Reality |
|---|---|
| "The ask is clear enough" | If you cannot write the user's desired outcome in one sentence right now, the ask is not clear. Run the chart before deciding. |
| "This interview is short; it needs no file" | No one knows at the start whether it takes one session or ten. The map is on disk before the first question. |
| "I'll write the idea file by hand" | Only `brain new-doc` claims the number for one agent. A file made by hand can take a number another agent holds. |
| "I'll put the answer in the Result cell" | The map is an index. A resolved row links to one `DEC` or `RES` file, and the detail lives there. |
| "Asking too many questions wastes their time" | Four to six targeted questions cost minutes. Building the wrong thing costs weeks, and the user bears that cost. |
| "I'll figure it out as I build" | Switching costs after code exists are ten times what they are now. Discovery during implementation is rework. |
| "They said 'whatever you think', so I should decide" | "Whatever you think" is delegation, not decision. Ask again with two concrete options as a choice. |
| "I'll ask the whole frontier at once to save rounds" | The frontier orders the questions; it does not license a batch. One question per call, the next one chosen after the answer. |
| "I'll ask the user which framework the repo uses" | That is a fact. A sub-agent fetches it while you ask the next decide row. |
| "Every choice is the user's" | A cheap, reversible choice that does not change what gets built stays with you. State it with the reason; it gets no row. |
| "If I attach my recommendation, I'm leading them" | Leading is the point. Reacting is faster than generating from scratch. The risk is sycophancy, not leading; mitigate by being visibly willing to be wrong. |
| "We've talked enough, I get it" | Test it: are the frontier and the fog empty? An open row is an answer you are assuming. |
| "The user said 'sounds good', we're done" | A hedged reply gets one follow-up. A clear yes to the concrete restate ends it; the clarity matters, the exact words do not. |
| "I listed my assumptions; silence means they agree" | Silence is not consent. The interview waits for a reply. |

## Red Flags

- The first question asked before the idea file exists, or a map kept only in working notes in a repo
- An idea file written by hand instead of through `brain new-doc`
- A resolved row whose Result is inline text, or names no `DEC` or `RES` file
- A row that delivers part of the destination ("build the X") instead of asking a question
- A sharp question left in the fog, or work beyond the destination written as fog
- Two or more questions in one call, or a question asked in chat prose instead of the user-question tool
- A question without a recommended option and its reason: that is surveying, not committing
- A question for a row that is not on the frontier: a row it waits on is still open
- A question the code or the docs could answer: a fact sent to the user instead of a sub-agent
- Accepting "whatever you think is best" as a final answer
- Questions framed as "what would be best practice?" instead of "what do you actually want?"
- A sophistication-signalling answer ("scalable", "clean", "modern") accepted without the want-versus-should probe
- A term sharpened or a decision made with no domain-modeling call
- An Intent with no "Out of scope" line
- The "Confirmed by" line written before the user's explicit yes
- Asking a third time about the same restate after one follow-up
- Proceeding on silence, or on "correct me now or I proceed"
- A spec, plan or task list produced before the user's explicit yes to the restate
- Several rows resolved while the map keeps growing, and no step back

## Verification

After applying interview-me:

- [ ] ask-user-question, domain-modeling and context-engineering were loaded before the first row
- [ ] The chart ran first: a one-sentence hypothesis, a destination, and the idea file written through `brain new-doc` before the first question (with no repo: the map in the conversation, and the user told so)
- [ ] Every row is one line with a type, a status, its blocking rows and a Result; every resolved row links to one `DEC` or `RES` file
- [ ] The fog is under "Not yet specified", and work beyond the destination is under "Out of scope"
- [ ] `brain check` reports no finding for the idea file
- [ ] Every question went through the host's user-question tool, one per call, composed with ask-user-question
- [ ] Every question carried a recommended option with the reason behind it
- [ ] Every question was for a row on the frontier when asked
- [ ] Every fact a question needed went to a sub-agent, not to the user
- [ ] The want-versus-should probe ran on each convention-signalling answer
- [ ] Small reversible choices you took were stated with their reason, with no row
- [ ] The restate, with its "Out of scope" line, went to the user inside one question call
- [ ] The user gave an explicit yes to the restate; a hedged reply got one follow-up, silence got none
