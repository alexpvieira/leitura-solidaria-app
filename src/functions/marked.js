import marked from 'marked'

export default function decodeMarkdown(text) {
    return marked(text, { sanitize: true })
}