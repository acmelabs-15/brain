# Dynamic Batching & Parallelism Limits Research (Deep Dive)

## 1. Research Findings & System Constraints

To establish a safe, dynamic calculation for agent workloads, we must respect systemic limits across context, I/O, and API throughput discovered during deep research:

### A. The "Context Rot" Horizon (Gemini 3.1 Pro High)
- **The Myth of 1 Million:** While Gemini 3.1 Pro officially supports a 1,000,000 token context window, independent benchmarks show a severe difference between *Retrieval* (Needle-in-a-Haystack) and *Reasoning*.
- **Reasoning Degradation:** For complex, multi-hop reasoning tasks (like strictly adhering to a 10-page `METHOD.md` methodology while analyzing external files), the model enters a "contextual drift" or "downward spiral" long before 1M tokens. 
- **Safe Limit:** To prevent agentic inconsistency and ensure zero-loss methodology adherence, the **Safe Effective Context Limit (SECL)** for the Orchestrator must be strictly capped at **~300,000 tokens**.

### B. Teamwork Preview Token Overhead
- **The Orchestrator Bottleneck:** While subagents are safely isolated in their own context windows, the **Project Orchestrator** must read every single status update, progress ping, and final handoff report from *every* subagent. 
- **The Bloat:** If 15 subagents each return a 15,000-token handoff report, the Orchestrator instantly absorbs 225,000 tokens. Added to the core prompt and `METHOD.md`, the Orchestrator will immediately cross the 300k context-rot horizon and begin hallucinating or forgetting rules.

### C. Git Index.Lock Collisions (The Physical I/O Limit)
- **Single-Writer System:** Git is fundamentally a pessimistic, single-writer system. It uses a `.git/index.lock` file to prevent corruption.
- **The Parallelism Crash:** If multiple agents operate in the exact same workspace directory (`brain-v2`) and attempt to write files, run `git add`, or update the exact same tracker files (`STATE.md`, `manifest.md`) simultaneously, they will trigger a race condition resulting in fatal `index.lock` crashes.
- **The Concurrency Cap:** Without a dedicated task queue or independent isolated Git clones for each subagent, the maximum safe parallelism in a shared worktree is extremely low—typically no more than **3 to 4 concurrent agents**.

### D. Tokens Per Minute (TPM) Spikes vs. Quota
- **The 429 Illusion:** A `429 RESOURCE_EXHAUSTED` error is often not a total daily quota exhaustion. It is highly likely a **TPM (Tokens Per Minute)** rate limit breach. 
- **The Spike:** Launching multiple agents at the exact same millisecond means all of their massive initialization prompts (containing `METHOD.md` and system rules) hit the API simultaneously, causing a massive TPM spike that instantly gets throttled. Agent dispatch must be staggered or queued to smooth out the TPM curve.

### E. The "Resume Trap" (State Compaction)
- **The Danger of Resuming:** If a session pauses and hands off to the next session, the new Orchestrator cannot simply read the raw `.agents/` transcripts to figure out where to resume. Doing so would instantly flood its context window, causing immediate context rot on Turn 1 of the new session.
- **State Compaction:** The pausing session must use "Checkpointing" and "Compaction"—writing a highly condensed summary of each subagent's progress (e.g., `checkpoint.md`) so the next session can ingest the state with minimal token overhead.

---

## 2. The Dynamic Calculation Model

At the start of every session, the orchestrator must dynamically calculate two bounds.

### Bound 1: Total Work Scope (Max Batch Size)
This calculates the total number of units a session can process before the Orchestrator's context rots from reading all their reports.

**Formula:**
`N (Total Units) = (SECL - CoreContext) / (OverheadPerUnit)`
- **SECL:** 300,000 tokens.
- **CoreContext:** Token count of the session prompt, `METHOD.md`, `GLOSSARY.md`, and `STATE.md`.
- **OverheadPerUnit:** The expected token size of the subagent's final handoff report + communication pings (e.g., 10,000 tokens for a simple extraction, 30,000 for a complex code refactor).

### Bound 2: Maximum Parallelism (Concurrency Limit)
This dictates how many of those `N` units can be processed *at the exact same time*.

**Formula:**
`P (Concurrent Agents) = MIN( N, SharedWorktreeWriteLimit )`
- **SharedWorktreeWriteLimit:** Strictly capped at **4 concurrent agents** to prevent `.git/index.lock` collisions and file write race conditions on shared tracking files like `STATE.md`.
- *Note:* If the agents were given truly isolated cloned workspaces (via `Workspace: "branch"`), this limit could scale up, bounded only by API quota. But in a shared workspace, I/O locking is the absolute ceiling.

---

## 3. Protocol for the Next Session

1. **Calculate & Cap:** Read this document, assess the target files, calculate `N` and `P`, and launch the swarm using the safe batch size.
2. **Staggered Dispatch:** Do not launch all `P` agents at the exact same millisecond. Stagger launches to avoid massive TPM (Tokens Per Minute) API limit spikes.
3. **Throttle the Swarm:** Ensure the `teamwork_preview` orchestrator only keeps `P` agents active at any one moment, queueing the rest.
4. **Never Destruct on Failure:** If an API quota (`429`) or unexpected error hits, **DO NOT ROLL BACK OR DELETE WORK**. 
5. **State Compaction:** Before shutting down, write a heavily condensed `checkpoint.md` summarizing the exact state and progress of the swarm so the next session can resume without suffering immediate context rot from reading raw logs.
