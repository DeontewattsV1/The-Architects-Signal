<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&height=200&section=header&text=ARCHITECT%27S%20SIGNAL&fontSize=52&fontAlignY=35&desc=Mission%3A%20Reclamation%20via%20Open%20Science%20Infrastructure&descAlignY=58&color=0:050505,42:BD00FF,78:00FFFF,100:FFD166&fontColor=FFFFFF" alt="Architect's Signal header" />

<br/>

<img src="./assets/readme-hero.svg" alt="ARCHITECT'S SIGNAL — Mission: Reclamation via Open Science Infrastructure" width="100%" />

<br/>

<img src="https://readme-typing-svg.demolab.com?font=Space+Grotesk&weight=700&size=22&duration=2800&pause=900&color=00FFFF&center=true&vCenter=true&width=750&lines=Mission%3A+Reclamation+via+Open+Science+Infrastructure;DOI+%E2%86%92+ORCID+%E2%86%92+Zenodo+%E2%86%92+OpenAIRE;Architecting+justice+engines+through+code;GoodShyt+Generative+Systems" alt="Typing SVG" />

<br/>

<a href="https://deontewatts.space"><img alt="Website" src="https://img.shields.io/badge/Website-DeonteWatts.Space-00FFFF?style=for-the-badge&labelColor=050505"></a>
<a href="https://orcid.org/0009-0005-8586-3650"><img alt="ORCID" src="https://img.shields.io/badge/ORCID-0009--0005--8586--3650-BD00FF?style=for-the-badge&labelColor=050505"></a>
<img alt="Status" src="https://img.shields.io/badge/System-Operational-FFD166?style=for-the-badge&labelColor=050505">

<br/>

<img src="https://img.shields.io/github/stars/DeontewattsV1/The-Architects-Signal?style=for-the-badge&color=BD00FF&labelColor=050505" alt="Stars">
<img src="https://img.shields.io/github/last-commit/DeontewattsV1/The-Architects-Signal?style=for-the-badge&color=00FFFF&labelColor=050505" alt="Last Commit">
<img src="https://img.shields.io/github/repo-size/DeontewattsV1/The-Architects-Signal?style=for-the-badge&color=FFD166&labelColor=050505" alt="Repo Size">
<img src="https://visitor-badge.laobi.icu/badge?page_id=DeontewattsV1.The-Architects-Signal" alt="Visitors">

</div>

---

## About

**Deonte Watts** · Independent Researcher

A public research identity hub for manuscripts, citation records, DOI releases, authority profiles, and open-science publishing workflows. Architecting justice engines through code and community-centered design.

> **ORCID:** [0009-0005-8586-3650](https://orcid.org/0009-0005-8586-3650)
> **Website:** [deontewatts.space](https://deontewatts.space)

---

## Network Nodes

| Platform | Role | Link |
|:---:|---|---|
| <img src="https://img.shields.io/badge/-050505?style=flat-square&logo=googlechrome&logoColor=00FFFF" alt=""> | **Canonical Hub** | [DeonteWatts.Space](https://deontewatts.space) |
| <img src="https://img.shields.io/badge/-050505?style=flat-square&logo=orcid&logoColor=BD00FF" alt=""> | **Research Identifier** | [ORCID](https://orcid.org/0009-0005-8586-3650) |
| <img src="https://img.shields.io/badge/-050505?style=flat-square&logo=github&logoColor=FFFFFF" alt=""> | **Code Source** | [GitHub](https://github.com/DeontewattsV1) |
| <img src="https://img.shields.io/badge/-050505?style=flat-square&logo=zenodo&logoColor=00FFFF" alt=""> | **DOI Archive** | [Zenodo](https://zenodo.org/deontewatts) |
| <img src="https://img.shields.io/badge/-050505?style=flat-square&logo=academia&logoColor=FFD166" alt=""> | **Research Mirror** | [Academia.edu](https://deontewatts.academia.edu) |
| <img src="https://img.shields.io/badge/-050505?style=flat-square&logo=databricks&logoColor=BD00FF" alt=""> | **Standards Profile** | [FAIRsharing](https://fairsharing.org/users/17334) |

---

## Archival Protocol

| Step | Protocol | Function |
|---:|---|---|
| 01 | **AUTHOR** | Write in manuscript/main.tex and keep bibliography in bibliography/references.bib. |
| 02 | **RELEASE** | Create a GitHub release with a semantic version tag such as v1.0.0. |
| 03 | **ARCHIVE** | Zenodo ingests the enabled GitHub release and creates a DOI. |
| 04 | **SYNC** | DataCite receives DOI metadata with ORCID creator metadata. |
| 05 | **MIRROR** | Mirror DOI links to Academia.edu, alphaXiv, Zotero, and profile pages. |
| 06 | **PROMOTE** | Cloudflare Pages rebuilds the public research hub from GitHub. |

### Archival Workflow Sequence

```mermaid
sequenceDiagram
    participant A as AUTHOR
    participant R as RELEASE
    participant AR as ARCHIVE
    participant S as SYNC
    participant M as MIRROR
    participant P as PROMOTE

    A->>R: Tag semantic version (v1.0.0)
    R->>AR: Zenodo ingests release
    AR->>S: DOI → DataCite + ORCID
    S->>M: Mirror to Academia, alphaXiv, Zotero
    M->>P: Cloudflare Pages rebuild
    P-->>A: Public hub live
```

---

<details>
<summary><strong>Run the Research Hub App</strong></summary>

<br/>

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

</details>

---

<details>
<summary><strong>Repository Map</strong></summary>

<br/>

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

</details>

---

## Configure This README Front Page

Edit `README.config.json`, then regenerate the front page:

```bash
npm run readme:build
```

The generated README uses GitHub-safe Markdown plus an animated SVG image.

---

## Citation

See `CITATION.cff` and `.zenodo.json`.

```bibtex
@misc{watts2026architects_signal,
  author       = {Watts, Deonte},
  title        = {The Architect's Signal: Open Science Infrastructure},
  year         = {2026},
  publisher    = {GitHub / Zenodo},
  url          = {https://github.com/DeontewattsV1/The-Architects-Signal},
  note         = {ORCID: 0009-0005-8586-3650}
}
```

---

## Quick Stats

<div align="center">

<img src="https://github-readme-stats.vercel.app/api?username=DeontewattsV1&show_icons=true&theme=radical&bg_color=050505&title_color=00FFFF&icon_color=BD00FF&text_color=FFFFFF&border_color=BD00FF" alt="GitHub Stats" />

<img src="https://github-readme-streak-stats.herokuapp.com/?user=DeontewattsV1&theme=radical&background=050505&ring=00FFFF&fire=FFD166&currStreakLabel=00FFFF&border=BD00FF" alt="GitHub Streak" />

<br/>

<img src="https://github-profile-trophy.vercel.app/?username=DeontewattsV1&theme=radical&no-bg=true&no-frame=true&column=6" alt="Trophies" />

</div>

---

## Related Projects

<div align="center">

<a href="https://github.com/DeontewattsV1/Git-Locker-"><img src="https://img.shields.io/badge/Git_Lockers-0D1117?style=for-the-badge&logo=github&logoColor=white" alt="Git Lockers"></a>
<a href="https://github.com/DeontewattsV1/Harmonic-Visual-Environment-Journal-and-HIMM"><img src="https://img.shields.io/badge/Harmonic_Visual_Environment_Journal-1A1A2E?style=for-the-badge&logo=github&logoColor=white" alt="Harmonic Visual Environment Journal"></a>
<a href="https://github.com/DeontewattsV1/Wildfire-The-Architecture-of-Surrender"><img src="https://img.shields.io/badge/Wildfire-090D14?style=for-the-badge&logo=github&logoColor=white" alt="Wildfire"></a>

</div>

---

<details>
<summary><strong>Support This Project</strong></summary>

<br/>

<div align="center">

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

</div>

</details>

---

<div align="center">

![Quote](https://quotes-github-readme.vercel.app/api?type=horizontal&theme=radical)

<br/>

<img src="https://capsule-render.vercel.app/api?type=waving&height=150&section=footer&color=0:050505,42:BD00FF,78:00FFFF,100:FFD166" alt="Footer wave" />

<strong>GoodShyt Generative Systems × Architect's Signal</strong><br/>
Open Science · Justice Engines · Reclamation Infrastructure

</div>
