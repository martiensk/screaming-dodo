import type { IArticle } from '~/types/article.interface';

export const articles: IArticle[] = [];

console.log('GRABBING ARTICLES');

const articleGlobs = await import.meta.glob<{ default: IArticle }>('~/assets/articles/*.json');

// replace with SQL
for (const path in articleGlobs) {
    await articleGlobs[path]().then((article) => {
        articles.push(article.default);
    });
}

articles.reverse();

if (articles.length > 20) articles.splice(20);
