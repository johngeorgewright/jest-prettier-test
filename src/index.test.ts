import foo from '.'

test('snapshots and prettier', () => {
  expect(foo()).toMatchInlineSnapshot()
})
