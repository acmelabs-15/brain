Adapted from mattpocock/skills, MIT, commit c55ee46.

# Phase boundaries

A **phase** is a chunk of work inside a session: the interview, the spec, the implementation, the QA. The definition is fuzzy on purpose. A phase ends when you think "ok, we are done with that".

The **phase boundary** is the gap between two phases. It is the only place this decision belongs. Mid-phase there is no decision to make: continue, or split the work that is left into sub-agents. Compacting mid-phase makes the agent lose the thread.

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

**1. Can you continue in this session?** Two things make the answer yes: the next phase needs this phase as a **primary source**, or you have enough [smart zone](https://www.aihero.dev/ai-coding-dictionary/smart-zone) left (about 150k tokens) for the next phase to fit. Interview to implementation is the standard yes: the implementation wants the reasoning verbatim, not a summary of it. Continue costs nothing and loses nothing, so rule it out before anything else.

**2. Is the context irrelevant to what comes next?** Is everything in this session (the exploration, the decisions, the dead ends) disposable? If so, **clear**. It is the cheapest move on the board: it takes no time and hands back the whole window. Clearing is not terminal: the old session stays resumable.

The cost of getting this wrong is one-way. Clear a *relevant* context and you lose the **why** behind what you built. No amount of reading the diff back gets it returned.

**3. Do you need to hand off?** Handoff is narrow. You need it only when you are:

- swapping to a **new harness** (Claude Code to Codex, for example),
- moving to a **new directory** or repo,
- sending the work to a **colleague**,
- or forking a side task you found **mid-phase** without derailing what you are doing.

That list is the whole clause. What handoff buys is **portability**: a file that travels. If nothing is travelling, you do not need it.

**4. Can the task be done AFK?** Is it scoped tightly enough to run with you away from the keyboard, no steering? Then send it to a **sub-agent** and leave this session untouched. Automated review is the standard case: the agent reads the diff and reports, and you are not needed while it does.

**5. Otherwise, compact.** Relevant context, same harness, same directory, and you need to stay in the loop: this is where the tree lands, and it lands here often. Pass it an instruction (`/compact we're going to QA this area`) so the summary keeps what the next phase needs.

Compact is the **default, not the first reach**. It sits at the bottom because the four questions above it are all cheaper or more precise. The failure mode when people start here is a fresh session that is confidently wrong about a decision the summary flattened.

## Primary and secondary sources

Every move except **Continue** turns a **primary source** into a **secondary source**: the session as it happened, replaced by a summary of it. The trade is always the same shape:

| Source | Information | Noise | Room to move |
| --- | --- | --- | --- |
| Primary (Continue) | Full | Lots | Little |
| Secondary (Compact, Handoff) | Lossy | Less | Lots |

This is why question 1 comes first. You only pay the lossiness when staying costs more than it saves.

## These are judgement calls

The questions are not objective. Each has taste in it, and the same boundary can go two ways on two days. The value is in asking them **in order**, at the boundary rather than in the middle of the work.
