
export interface Author {
  name: string;
  link?: string;
  affiliationIndex: number;
  isEqualContribution?: boolean;
}

export interface Affiliation {
  index: number;
  name: string;
}

export interface PaperData {
  title: string;
  conference: string;
  authors: Author[];
  affiliations: Affiliation[];
  links: {
    pdf: string;
    arxiv: string;
    code: string;
    video?: string;
    poster?: string;
  };
  abstract: string;
  tldr: string;
  bibtex: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}
