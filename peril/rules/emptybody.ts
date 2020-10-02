// import { danger, markdown, peril } from "danger"

const getMessage = (username: string) => `\
@${username} We noticed that the body of this issue is blank.
Please fill in this field with more information to help the \
maintainers resolve your issue.\
`

export const emptybody = () => {
  console.log('v1')
  
  const {
    user: { login: username },
    body,
  } = danger.github.issue as any
  
  console.log({p: peril})
  console.log({e: peril.env})

  if (body.trim().length === 0) {
    markdown(getMessage(username))
  }
}

export default async () => {
  emptybody()
}
