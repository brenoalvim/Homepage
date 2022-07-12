import { Div } from './styles'

export default function Cards() {
  return (
    <Div>
      <div className="cards">
        <ol>
          <a href="https://youtube.com/">
            <li>
              <img src="icons/youtube-brands.svg" alt="" />
            </li>
          </a>
          <a href="https://github.com/brenoalvim">
            <li>
              <img src="icons/github-brands.svg" alt="" />
            </li>
          </a>
          <a href="https://instagram.com/">
            <li>
              <img src="icons/instagram-brands.svg" alt="" />
            </li>
          </a>
          <a href="https://linkedin.com/in/brenoalvim">
            <li>
              <img src="icons/linkedin-in-brands.svg" alt="" />
            </li>
          </a>
        </ol>
      </div>
    </Div>
  )
}
