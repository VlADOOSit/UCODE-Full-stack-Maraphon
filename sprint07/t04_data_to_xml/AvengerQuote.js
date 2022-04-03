class AvengerQuote {
    constructor(id, author, quote, photo) {
        this.id = id;
        this.quote = quote;
        this.photo = photo;
        this.author = author;
        this.publishDate = Date();
    }
    addComment(text) { 
        array_push(this.comments, new Comment(text)) 
    }
}

module.exports = AvengerQuote;