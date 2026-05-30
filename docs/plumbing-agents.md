# Git Plumbing Commands as Semantic Agents

This document maps Git plumbing/internal commands to conceptual "agents" for a cryptogram/linguistics research environment. The implementation in `src/agents/plumbingAgents.js` provides lightweight JavaScript stubs to prototype these agents as callable modules or microservices.

## How to use

- Node.js demo (project root):

```bash
node src/agents/plumbingAgents.js "git hash-object" '{"text":"glyph sequence"}'
```

- In code:

```js
const { agents } = require('./src/agents/plumbingAgents');
await agents['git cat-file'].run({ object: 'abc123' });
```

## Mapping (short list)

- git cat-file — Blob Inspector
- git check-attr — Symbolic Attribution Validator
- git check-ignore — Noise-Filter Agent
- git hash-object / git filehash — Cryptogram Encoder (Hasher)
- git mktree — Syntax Tree Builder
- git commit-tree — Syntax Tree Synthesizer
- git update-index — Staging Registrar
- git update-ref — Reference Updater
- git reflog — Provenance Recorder
- git prune — Orphan Purger
- git pack-objects — Object Compressor
- git unpack-objects — Decompressor Agent
- git fsck — Integrity Guardian
- git gc — Garbage Collector Daemon

## Next steps / suggestions for production

- Replace console stubs with real implementations that operate on your data model (e.g., storing trees in a DB, computing cryptographic hashes, indexing with Elastic/Qdrant).
- Expose agents over HTTP (Express/Koa) or RPC for orchestration.
- Add authentication and audit trails for provenance-sensitive operations.
- Add tests that validate agent behavior with sample corpora.

