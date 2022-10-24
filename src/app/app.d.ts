type Link = {
  matIcon?: string
  href: string
  label: string
}

type Movie = {
  id: string
  title: string
  release_date: string
  img_src: string
  producer: string
  genres: string[]
  actors: Actor[]
}

type Actor = {
  id: string
  last_name: string
  first_name: string
  birthday: string
}
