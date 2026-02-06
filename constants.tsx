
import { PaperData } from './types';

export const PAPER_INFO: PaperData = {
  title: "StreetTree: A Large-Scale Global Benchmark for Fine-Grained Tree Species Classification",
  conference: "Accepted to CVPR 2026",
  authors: [
    { name: "Jiapeng Li", affiliationIndex: 1, link: "#" },
    { name: "Yingjing Huang", affiliationIndex: 1, link: "#" },
    { name: "Fan Zhang", affiliationIndex: 1, link: "#" },
    { name: "Yu Liu", affiliationIndex: 1, link: "#" }
  ],
  affiliations: [
    { index: 1, name: "School of Earth and Space Sciences, Peking University" }
  ],
  links: {
    pdf: "#",
    arxiv: "https://arxiv.org/abs/2601.32465",
    code: "https://github.com/streettree/benchmark",
    video: "#",
    poster: "#"
  },
  tldr: "StreetTree is the world’s first large-scale benchmark dataset for fine-grained street tree classification, featuring 12.2 million images representing 3.3 million individual trees across 8,363 species and 133 countries.",
  abstract: "The fine-grained classification of street trees is a crucial task for urban planning, streetscape management, and the assessment of urban ecosystem services. However, progress in this field has been significantly hindered by the lack of large-scale, geographically diverse, and publicly available benchmark datasets specifically designed for street trees. To address this critical gap, we introduce StreetTree, the world’s first large-scale benchmark dataset dedicated to fine-grained street tree classification. The dataset contains over 12 million images covering more than 8,300 common street tree species, collected from urban streetscapes across 133 countries spanning five continents, and supplemented with expert-verified observational data. StreetTree poses substantial challenges for pretrained vision models under complex urban environments: high inter-species visual similarity, long-tailed natural distributions, significant intra-class variations caused by seasonal changes, and diverse imaging conditions such as lighting, occlusions from buildings, and varying camera angles. In addition, we provide a hierarchical taxonomy (order–family–genus–species) to support research in hierarchical classification and representation learning.",
  bibtex: `@inproceedings{streettree2026,
  title={StreetTree: A Large-Scale Global Benchmark for Fine-Grained Tree Species Classification},
  author={Anonymous Authors},
  booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},
  year={2026}
}`
};
