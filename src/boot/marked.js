import decodeMarkdown from '../functions/marked'

export default async ({Vue}) => {
  Vue.prototype.$decodeMarkdown = decodeMarkdown
}
