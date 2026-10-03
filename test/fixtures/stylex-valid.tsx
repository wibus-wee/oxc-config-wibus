import stylex from '@stylexjs/stylex'

const styles = stylex.create({
  root: {
    color: 'red',
  },
})

export function StylexFixture() {
  return <div {...stylex.props(styles.root)} />
}
