export default {
  id: 'attr-value-double-quotes',
  description: 'Attribute values must be in double quotes.',
  init: function (parser, reporter) {
    let self = this

    parser.addListener('tagstart', function (event) {
      let attrs = event.attrs
      let attr
      let col = event.col + event.tagName.length + 1

      for (let i = 0, l = attrs.length; i < l; i++) {
        attr = attrs[i]

        if (
          (attr.value !== '' && attr.quote !== '"') ||
          (attr.value === '' && attr.quote === "'")
        ) {
          reporter.error(
            'The value of attribute [ ' +
              attr.name +
              ' ] must be in double quotes.',
            event.line,
            col + attr.index,
            self,
            attr.raw
          )
        }
      }
    })
  },
}
