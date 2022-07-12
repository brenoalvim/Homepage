import { Div } from './styles'

export default function Search() {
  function searchWithGoogle() {
    const input = document.querySelector('.search-input') as HTMLInputElement

    window.location.href = `https://www.google.com/search?q=${input.value}`
  }

  return (
    <Div>
      <div className="search-container">
        <input
          type="text"
          name="search"
          placeholder="Search with Google"
          className="search-input"
        />
        <a
          href="#"
          className="search-btn"
          onBlur={searchWithGoogle}
          onClick={searchWithGoogle}
        >
          <i className="fas fa-search"></i>
        </a>
      </div>
    </Div>
  )
}
