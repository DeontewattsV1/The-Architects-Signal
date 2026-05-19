<!--
README generated from README.config.json.
Edit the config, then run: npm run readme:build
-->

<p align="center">
  <img src="./assets/readme-hero.svg" alt="ARCHITECT&apos;S SIGNAL — Mission: Reclamation via Open Science Infrastructure" width="100%" />
</p>

<p align="center">
  <a href="https://deontewatts.space"><img alt="Website" src="https://img.shields.io/badge/Website-DeonteWatts.Space-00FFFF?style=for-the-badge&labelColor=050505"></a>
  <a href="https://orcid.org/0009-0005-8586-3650"><img alt="ORCID" src="https://img.shields.io/badge/ORCID-0009-0005-8586-3650-BD00FF?style=for-the-badge&labelColor=050505"></a>
  <img alt="Status" src="https://img.shields.io/badge/System-Operational-FFD166?style=for-the-badge&labelColor=050505">
</p>
## Support my work

You can support me via any of the links below:

[![Patreon](https://img.shields.io/badge/Patreon-Donate-FF424D?logo=patreon&logoColor=white)](https://www.patreon.com/cw/GetitD)
[![Open Collective](https://img.shields.io/badge/Open%20Collective-Support-FF6F00?logo=open-collective&logoColor=white)](https://opencollective.com/deontewattsv1)
[![Ko-fi](https://img.shields.io/badge/Ko--fi-Coffee-29ABE0?logo=ko-fi&logoColor=white)](https://ko-fi.com/deontewattsv1)
[![Tidelift](https://img.shields.io/badge/Tidelift-Support-0052A7?logo=tidelift&logoColor=white)](https://sonarcloud.io/organizations/deontewattsv1/)
[![LFX Crowdfunding](https://img.shields.io/badge/LFX-Crowdfunding-2B6CB0)](https://crowdfunding.lfx.linuxfoundation.org/deontewattssV1)
[![Liberapay](https://img.shields.io/badge/Liberapay-Donate-1D9D74?logo=liberapay&logoColor=white)](https://liberapay.com/DeontewattsV1/)
[![IssueHunt](https://img.shields.io/badge/IssueHunt-Bounties-24292E?logo=github&logoColor=white)](https://issuehunt.io/profiles/deontewattsv1)
[![Polar](https://img.shields.io/badge/Polar-Dashboard-4B5563)](https://polar.sh/dashboard/deonte-watts)
[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-Support-FFDD00?logo=buymeacoffee&logoColor=black)](https://buymeacoffee.com/deontewattsv1)
[![thanks.dev](https://img.shields.io/badge/thanks.dev-Say%20Thanks-3DA639?logo=github&logoColor=white)](https://thanks.dev/e/gh/deontewattsv1)
# ARCHITECT'S SIGNAL

**Deonte Watts** · Independent Researcher  
Mission: Reclamation via Open Science Infrastructure

A public research identity hub for manuscripts, citation records, DOI releases, authority profiles, and open-science publishing workflows. Architecting justice engines through code and community-centered design.

## Network Nodes

- [**DeonteWatts.Space**](https://deontewatts.space) — Canonical Hub
- [**ORCID**](https://orcid.org/0009-0005-8586-3650) — Research Identifier
- [**GitHub**](https://github.com/DeontewattsV1) — Code Source
- [**Zenodo**](https://zenodo.org/deontewatts) — DOI Archive
- [**Academia.edu**](https://deontewatts.academia.edu) — Research Mirror
- [**FAIRsharing**](https://fairsharing.org/users/17334) — Standards Profile

## Archival Protocol

| Step | Protocol | Function |
|---:|---|---|
| 01 | **AUTHOR** | Write in manuscript/main.tex and keep bibliography in bibliography/references.bib. |
| 02 | **RELEASE** | Create a GitHub release with a semantic version tag such as v1.0.0. |
| 03 | **ARCHIVE** | Zenodo ingests the enabled GitHub release and creates a DOI. |
| 04 | **SYNC** | DataCite receives DOI metadata with ORCID creator metadata. |
| 05 | **MIRROR** | Mirror DOI links to Academia.edu, alphaXiv, Zotero, and profile pages. |
| 06 | **PROMOTE** | Cloudflare Pages rebuilds the public research hub from GitHub. |

## Run the Research Hub App

```bash
npm install
npm run dev
npm run build
```

Cloudflare Pages build settings:

```txt
Build command: npm run build
Build output directory: dist
```

## Configure This README Front Page

Edit `README.config.json`, then regenerate the front page:

```bash
npm run readme:build
```

The generated README uses GitHub-safe Markdown plus an animated SVG image. Full browser JavaScript, mouse tilt effects, and arbitrary CSS should stay inside the Vite/Cloudflare website app, not inside `README.md`.

## Repository Map

```txt
assets/readme-hero.svg        README visual front-page header
README.config.json            Editable content/theme/profile config
scripts/generate-readme.mjs   README + SVG renderer
src/                          Vite/React public research hub app
data/                         Profile, publications, and workflow data
metadata/                     DOI, ORCID, Dublin Core, and DataCite records
manuscript/                   LaTeX manuscript sources
bibliography/                 BibTeX, RIS, and CSL citation records
```

## Citation

See `CITATION.cff` and `.zenodo.json`.
