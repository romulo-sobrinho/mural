module.exports = {
  posts: [
    {
      id: 'A12D55GDE',
      title: 'Post modelo',
      description: 'Descrição do post modelo'
    }
  ],

  getAll() {
    return this.posts
  },

  newPost(title, description) {
    this.posts.push({ id: generateId(), title, description })
  }
}

function generateId() {
  return Math.random().toString(36).substring(2, 9)
}
