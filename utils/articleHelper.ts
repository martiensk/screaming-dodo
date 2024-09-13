import type { IArticle } from '~/types/article.interface';

export const articles: IArticle[] = [];
export const categories: string[] = [];

console.log('GRABBING ARTICLES');

const articleGlobs = await import.meta.glob<{ default: IArticle }>('~/assets/articles/*.json');

for (const path in articleGlobs) {
    await articleGlobs[path]().then((article) => {
        articles.push(article.default);
        if (!categories.includes(article.default.category)) {
            categories.push(article.default.category);
        }
    });
}

articles.reverse();
