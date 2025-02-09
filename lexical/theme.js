import styles from './styles.module.css'

const theme = {
  paragraph: styles.paragraph,
  quote: styles.quote,
  heading: {
    h1: styles.heading1,
    h2: styles.heading2,
    h3: styles.heading2,
    h4: styles.heading2,
    h5: styles.heading2
  },
  image: styles.image,
  link: styles.link,
  code: styles.code,
  hr: styles.hr,
  list: {
    nested: {
      listitem: styles.nestedListItem
    },
    ol: styles.listOl,
    ul: styles.listUl,
    listitem: styles.listItem
  },
  text: {
    bold: styles.textBold,
    italic: styles.textItalic,
    // overflowed: 'editor-text-overflowed',
    // hashtag: 'editor-text-hashtag',
    underline: styles.textUnderline,
    strikethrough: styles.textStrikethrough,
    underlineStrikethrough: styles.underlineStrikethrough,
    code: styles.textCode
  }
}

export default theme
