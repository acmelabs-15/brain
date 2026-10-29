Adapted from mattpocock/skills, MIT, commit c55ee46.

# Stage boundaries

A **stage** is one part of the lifecycle: define, plan, build, verify, review or ship. A stage ends when its result is on disk: the map and its records, the spec, the plan, a commit, a verdict, a release.

The **stage boundary** is the gap between two stages. The gap between two rows of a map, or between two tasks of a plan, works the same way. These gaps are the only place this decision belongs. In the middle of a row or a task there is no decision to make: continue, or split the work that is left into sub-agents. Compacting there makes the agent lose the thread.

## The files carry the work

In a brain repo the state of the work lives in files, not in the window:

- the map, which interview-me writes again after every row;
- a DEC file for each decision, and a RES file for each finding, each written the moment it lands;
- the spec, which spec-driven-development writes from the map and those records;
- the plan's rows and `docs/STATUS.md`, which the build updates after every task.

So a move at a boundary loses less here than it would elsewhere: the next session reads the files back, and the protocol's session start resumes from them. End a session between two rows or after a completed task when the context budget runs low. What the files cannot hold is reasoning that nobody wrote down, which is why each decision goes to its DEC file the moment the user makes it.

## The five options

| Option | What it does |
| --- | --- |
| **Continue** | Stay in the session. No context switch at all. |
| **Clear** | Empty the context window and start from nothing. `/clear` in Claude Code and Gemini CLI. |
| **Handoff** | Write a portable markdown file and seed a session anywhere with it. The handoff skill does this. |
| **Sub-agent** | Send the task to its own context window and get a report back. |
| **Compact** | Compress this context and seed a fresh session with the summary. `/compact` in Claude Code, `/compress` in Gemini CLI. |

## The tree

Work top to bottom at the boundary. The first **yes** wins.

**1. Can you continue in this session?** Two things make the answer yes: the next stage needs this session as a **primary source**, beyond what the files hold, or you have enough [smart zone](https://www.aihero.dev/ai-coding-dictionary/smart-zone) left (about 150k tokens) for the next stage to fit. In a brain repo the define stage's reasoning is on disk in its DEC and RES files, so the plan and the build rarely need the interview's window itself. Continue costs nothing and loses nothing, so rule it out before anything else.

**2. Is the context irrelevant to what comes next?** Is everything in this session (the exploration, the decisions, the dead ends) disposable, or already in the files? If so, **clear**. It is the cheapest move on the board: it takes no time and hands back the whole window. Clearing is not terminal: the old session stays resumable.

The cost of getting this wrong is one-way. Clear a *relevant* context and you lose any **why** that is not yet in a file. No amount of reading the diff back gets it returned. Record each decision as it is made, and a clear loses little.

**3. Do you need to hand off?** Handoff is narrow. You need it only when you are:

- swapping to a **new harness** (Claude Code to Codex, for example),
- moving to a **new directory** or repo,
- sending the work to a **colleague**,
- or forking a side task you found **mid-stage** without derailing what you are doing.

That list is the whole clause. What handoff buys is **portability**: a file that travels. If nothing is travelling, you do not need it.

**4. Can the task be done AFK?** Is it scoped tightly enough to run with you away from the keyboard, no steering? Then send it to a **sub-agent** and leave this session untouched. Automated review is the standard case: the agent reads the diff and reports, and you are not needed while it does.

**5. Otherwise, compact.** Relevant context, same harness, same directory, and you need to stay in the loop: this is where the tree lands, and it lands here often. Pass it an instruction (`/compact we're going to QA this area`) so the summary keeps what the next stage needs.

Compact is the **default, not the first reach**. It sits at the bottom because the four questions above it are all cheaper or more precise. The failure mode when people start here is a fresh session that is confidently wrong about a decision the summary flattened.

## Primary and secondary sources

Every move except **Continue** turns a **primary source** into a **secondary source**: the session as it happened, replaced by a summary of it. The trade is always the same shape:

| Source | Information | Noise | Room to move |
| --- | --- | --- | --- |
| Primary (Continue) | Full | Lots | Little |
| Secondary (Compact, Handoff) | Lossy | Less | Lots |

This is why question 1 comes first. You only pay the lossiness when staying costs more than it saves. A DEC or RES file, written at the moment, is the exception: it is a primary source that survives every move.

## These are judgement calls

The questions are not objective. Each has taste in it, and the same boundary can go two ways on two days. The value is in asking them **in order**, at the boundary rather than in the middle of the work.
