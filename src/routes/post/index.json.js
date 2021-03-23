import posts from './_posts.js';

const contents = JSON.stringify(posts.map(post => {
  return {
    title: post.title,
    slug: post.slug,
    author: post.author,
    slug: post.slug,
    date: post.date,
    image: post.image
  };
}));

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  res.end(contents);
}
