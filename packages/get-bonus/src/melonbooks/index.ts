import type { Detail, SearchResult } from '../types';

import { Provider } from '../scraper';

export class Melonbooks extends Provider {
  constructor() {
    super('melonbooks');
  }

  async search(text: string): Promise<SearchResult[]> {
    return [];
  }

  async detail(url: string): Promise<Detail | undefined> {
    return undefined;
  }
}
